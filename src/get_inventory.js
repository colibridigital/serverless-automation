var AWS = require('aws-sdk');
AWS.config.update({ region: process.env.AWS_REGION })
ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08' });
var tableName = process.env.TABLE_NAME;

'use strict';

console.log('Using Dynamo table ' + tableName);

exports.handler = (event, context, callback) => {
  var params = {
    TableName: tableName
  };
  
  ddb.scan(params, function(err, data){
    if (err) {
      console.log("Error", err);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the todo item.',
      });
      return;
    } 
  
    const response = {
      statusCode: 200,
      body: JSON.stringify(
        {
          'Results': data.Items,
          'API Version': "v2.1"
        }
      ),
    };
    callback(null, response);
  })
};
