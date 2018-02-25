'use strict';

function buildEmailParams(bodyText) {
  return {
    Destination: {
      ToAddresses: ['boxrrumble@gmail.com']
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: bodyText
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Prograde Contact'
      }
    },
    ReturnPath: 'joey.gryder@gmail.com',
    Source: 'joey.gryder@gmail.com'
  }
}

function buildResponse(msg, statusCode) {
  return {
    statusCode: statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: msg
    })
  }
}

module.exports.submitContact = (event, context, callback) => {
  const AWS = require('aws-sdk');
  const ses = new AWS.SES();

  const contactBody = JSON.parse(event.body);
  const name = contactBody.name,
    email = contactBody.email,
    message = contactBody.message;

  const emailParams = buildEmailParams(
    `Name: ${name} -- Email: ${email} -- Message: ${message}`
  );
  let response = null;
  ses.sendEmail(emailParams, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      response = buildResponse(err, 500);
    } else {
      console.log(data);
      response = buildResponse(data, 200);
    }
    callback(null, response);
  });
};
