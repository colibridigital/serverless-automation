var AWS = require('aws-sdk');
var uuidv4 = require('uuid/v4')
AWS.config.update({ region: process.env.AWS_REGION })
ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08' });
var tableName = process.env.TABLE_NAME;

'use strict';

console.log('Using Dynamo table ' + tableName);

exports.handler = (event, context, callback) => {
  let body = JSON.parse(event.body)
  var params = {
    TableName: tableName,
    Item: {
      'id': { S: uuidv4() },
      'product_name': { S: body.product_name },
      'product_manufacturer': { S: body.product_manufacturer },
      'initial_stock': { N: String(body.initial_stock) },
      'sku': { S: body.sku }
    }
  };

  ddb.putItem(params, function (err, data) {
    if (err) {
      console.log("Error", err);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the todo item.',
      });
      return;
    } else {
      console.log("Success", data);
    }
  });

  // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(
        {
          'message': "Item successfully persisted"
        }
      ),
    };
    callback(null, response);
};
