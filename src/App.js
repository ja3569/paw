// App.js
import './App.css';
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import Navbar from './Navbar';
import Adopt from './pages/Adopt'; 
import Request from './pages/Request';
import About from './pages/About';
import Livechat from './pages/Livechat';
import Articles from './pages/Articles';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route and Routes

Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <Router>
      <div>
        <Navbar signOut={signOut} user={user} />
        <Routes>
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/request" element={<Request />} />
          <Route path="/livechat" element={<Livechat />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/" element={<About />} />
          {/* Add other Routes here for your other pages like About, Articles, Request */}
        </Routes>
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
