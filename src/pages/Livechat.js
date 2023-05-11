import React, { useState, useEffect } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createMessage as CreateMessage } from '../graphql/mutations';
import { listMessages as ListMessages } from '../graphql/queries';
import { onCreateMessage } from '../graphql/subscriptions';
import '../css/chat.css';

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");
  const [userID, setUserID] = useState(""); 

  useEffect(() => {
    const getUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      setUserID(user.username);
    }
    getUser();
    fetchMessages();
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next: (eventData) => {
        const message = eventData.value.data.onCreateMessage;
        setMessages(prevMessages => [...prevMessages, message]);
      },
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchMessages = async () => {
    try {
      const messageData = await API.graphql(graphqlOperation(ListMessages));
      const messages = messageData.data.listMessages.items;
      setMessages(messages);
    } catch (err) {
      console.log('Error fetching messages', err);
    }
  };

  const createMessage = async (e) => {
    e.preventDefault();
    if (content === "") return;
    const message = { userID, content };
    try {
      await API.graphql(graphqlOperation(CreateMessage, { input: message }));
      setContent("");
    } catch (err) {
      console.log("Error creating message:", err);
    }
  };

  return (
    <div className="chat-container">
      {messages.map((message, index) => (
        <div key={index} className="message">
          <h4 className="message-userid">{message.userID}</h4>
          <p>{message.content}</p>
        </div>
      ))}
      <form className="input-form" onSubmit={createMessage}>
        <input
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default LiveChat;
