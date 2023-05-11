import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import '../css/search.css';
import { Auth } from 'aws-amplify';


AWS.config.update({
  region: 'us-east-1',
  accessKeyId: 'AKIA3IVX7LEVAA5Q5TFR',
  secretAccessKey: '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',
});

const docClient = new AWS.DynamoDB.DocumentClient();

const AdoptionCenters = () => {
  const [zipCodeInput, setZipCodeInput] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [centers, setCenters] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchAdoptionCenters = async () => {
      const params = {
        TableName: 'adoption',
        FilterExpression: '#zip = :zip',
        ExpressionAttributeNames: {
          '#zip': 'zip',
        },
        ExpressionAttributeValues: {
          ':zip': parseInt(zipCode),
        },
      };
      const data = await docClient.scan(params).promise();
      setCenters(data.Items);

      // Fetch news articles for the first center
      if (data.Items.length > 0) {
        const center = data.Items[0];
        const articles = await fetchNewsArticles(center.name);
        setArticles(articles);
      }
    };

    if (zipCode !== '') {
      fetchAdoptionCenters();
    }
  }, [zipCode]);

  const fetchNewsArticles = async (query) => {
    const apiKey = "AIzaSyApYcMNkHNfPjV1yiaJP0RjDFDt6Dk0-4A";
    const engineID = "1148ff606ea12418a";
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${engineID}&q=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.items || [];
  };

  const handleSearch = () => {
    setZipCode(zipCodeInput);
  };

  const sendTopResultsEmail = async () => {
    const emailContent = articles.slice(0, 10).map((article, index) => (
      `<div>
        <h3>${index + 1}. ${article.title}</h3>
        <a href="${article.link}">${article.link}</a>
        <p>${article.snippet}</p>
      </div>`
    )).join('');
  
    const user = await Auth.currentAuthenticatedUser();
    const recipientEmail = user.attributes.email;
  
    const emailParams = {
      from: 'anjiayu9@gmail.com',
      to: recipientEmail,
      subject: 'Top 10 Adoption Center Articles',
      html: `<html><body>${emailContent}</body></html>`
    };
  
    const sqs = new AWS.SQS();
    const sqsParams = {
      MessageBody: JSON.stringify(emailParams),
      QueueUrl: 'https://sqs.us-east-1.amazonaws.com/774553688362/topsearch' // SQS Queue URL
    };
  
    try {
      await sqs.sendMessage(sqsParams).promise();
      console.log('Message sent to SQS successfully');
    } catch (error) {
      console.error('Error sending message to SQS:', error);
    }
  };
  
  

  return (
    <div>
      <h1>Adoption Centers</h1>
      <input type="text" value={zipCodeInput} onChange={e => setZipCodeInput(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {centers.map(center => (
        <div key={center.id}>
          <h2>{center.name}</h2>
          <p>{center.email}</p>
          <p>{center.phone}</p>
        </div>
      ))}
      <h1>Latest News</h1>
      {articles.map((article, index) => (
        <div key={index} className="cardd">
          <h3 className="cardd-title">{article.title}</h3>
          <a href={article.link} target="_blank" rel="noreferrer">{article.link}</a>
          <p>{article.snippet}</p>
        </div>
      ))}
      <button onClick={sendTopResultsEmail}>Send Top 10 Results</button>
    </div>
  );
};

export default AdoptionCenters;
