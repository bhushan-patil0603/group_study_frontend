import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import Container from './components/container/Container';
import HomePage from './components/home/homepage';
import Editor from './components/editor/Editor';
import ProtectedRoute from './components/ProtectedRoute';
import { SignIn } from '@clerk/clerk-react';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/sign-in"
        exact
        component={() => (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
          }}>
            <SignIn routing="path" path="/sign-in" />
          </div>
        )}
      />
      <ProtectedRoute path="/dashboard" exact component={Join} />
      <Route path="/chat" component={Chat} />
      <Route path="/whiteboard" component={Container} />
      <Route path="/editor" component={Editor} />
    </Router>
  );
};

export default App;
