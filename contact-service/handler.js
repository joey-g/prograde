'use strict';

module.exports.submitContact = (event, context, callback) => {
  const contactBody = JSON.parse(event.body);
  const name = contactBody.name,
    email = contactBody.email,
    message = contactBody.message;

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: `Contact: Name ${name} - Email ${email} - Message ${message}`
    })
  };

  callback(null, response);
};
