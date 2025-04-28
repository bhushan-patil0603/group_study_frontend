import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Navbar, NavbarBrand, UncontrolledTooltip } from 'reactstrap';
import { DefaultEditor } from 'react-simple-wysiwyg';
import Avatar from 'react-avatar';
import queryString from 'query-string';

import './Editor.css';

const SOCKET_URL = 'http://localhost:5000'; // Backend URL

const socket = io(SOCKET_URL, {
  withCredentials: true,
});
function Editor() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (username) {
      socket.emit('userEvent', { username });
    }
  }, [username]);

  return (
    <>
      <Navbar color="light" light>
        <NavbarBrand href="/">Real-time document editor</NavbarBrand>
      </Navbar>
      <div className="container-fluid">
        {username ? <EditorSection /> : <LoginSection onLogin={setUsername} />}
      </div>
    </>
  );
}

function LoginSection({ onLogin }) {
  const { name } = queryString.parse(location.search);
  onLogin(name);
}

function EditorSection() {
  return (
    <div className="main-content">
      <div className="document-holder">
        <div className="currentusers">
          <Users />
        </div>
        <Document />
      </div>
      <div className="history-holder">
        <History />
      </div>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const handleUserEvent = (data) => {
      setUsers(Object.values(data.users || {}));
    };

    socket.on('userEvent', handleUserEvent);

    return () => {
      socket.off('userEvent', handleUserEvent);
    };
  }, []);

  return (
    <>
      {users.map((user) => (
        <div key={user.username}>
          <span id={user.username} className="userInfo">
            <Avatar name={user.username} size={40} round="20px" />
          </span>
          <UncontrolledTooltip placement="top" target={user.username}>
            {user.username}
          </UncontrolledTooltip>
        </div>
      ))}
    </>
  );
}

function History() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const handleUserEvent = (data) => {
      setActivities(data.userActivity || []);
    };

    socket.on('userEvent', handleUserEvent);

    return () => {
      socket.off('userEvent', handleUserEvent);
    };
  }, []);

  return (
    <ul>
      {activities.map((activity, index) => (
        <li key={`activity-${index}`}>{activity}</li>
      ))}
    </ul>
  );
}

function Document() {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const handleContentChange = (data) => {
      setHtml(data.editorContent || '');
    };

    socket.on('contentChange', handleContentChange);

    return () => {
      socket.off('contentChange', handleContentChange);
    };
  }, []);

  function handleHtmlChange(e) {
    const value = e.target.value;
    setHtml(value);

    socket.emit('contentChange', {
      content: value,
    });
  }

  return <DefaultEditor value={html} onChange={handleHtmlChange} />;
}

export default Editor;
