const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1', //region
  accessKeyId: 'AKIA3IVX7LEVAA5Q5TFR', //accessKeyId
  secretAccessKey: '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', //secretAccessKey
});

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'adoption',
  KeyConditionExpression: '#id = :id',
  ExpressionAttributeNames: {
    '#id': 'id',
  },
  ExpressionAttributeValues: {
    ':id': 'NY315',
  },
};

docClient.query(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
