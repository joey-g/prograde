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
      'Access-Control-Allow-Origin': '*' // Required for CORS support to work
    },
    body: JSON.stringify({
      message: msg
    })
  }
}

module.exports.submitContact = (event, context, callback) => {
  try {
    const AWS = require('aws-sdk');
    const ses = new AWS.SES();

    const contactBody = JSON.parse(event.body);
    if (!contactBody) {
      callback(null, buildResponse('Contact body is required.', 400));
    }
    const name = contactBody.name,
      email = contactBody.email,
      message = contactBody.message;
    const emailParams = buildEmailParams(
      `Name: ${name}\n
       Email: ${email}\n
       Message: ${message}`
    );
    console.log(`Sending email with data: ${emailParams}`);

    let response = null;
    ses.sendEmail(emailParams, (err, data) => {
      if (err) {
        console.log(err, err.stack);
        callback(null, buildResponse(err, 500));
      } else {
        console.log(data);
        callback(null, buildResponse(data, 200));
      }
    });
  } catch (err) {
    console.log(err, err.stack);
    callback(null, buildResponse(err.message, 500))
  }
};
