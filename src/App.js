import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from './components/container/Container';
import HomePage from './components/home/homepage';
import Editor from './components/editor/Editor';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/dashboard" exact component={Join} />
      <Route path="/chat" component={Chat} />
      <Route path="/whiteboard" component={Container} />
      <Route path="/editor" component={Editor} />
    </Router>
  );
}

export default App;
