import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const nameRef=useRef();
  const roomRef=useRef();

  const roomInfoArray = JSON.parse(localStorage.getItem("roomInfo")) || [];
  console.log("roominfo....", roomInfoArray)
  // localStorage.setItem("roomInfo",null)
  const setLocal = () => {
    const obj = {};
    obj.name = name;
    obj.room = room;
    if (obj.room?.trim() && obj.name?.trim()) {
      const isDuplicate = roomInfoArray.some(
        (item) => item.name === obj.name && item.room === obj.room
      );
  
      if (!isDuplicate) {
        roomInfoArray.push(obj);
        localStorage.setItem("roomInfo", JSON.stringify(roomInfoArray));
      }
    }
  }

  const setInfo=(name,room)=>{
    nameRef.current.value=name;
    setName(name)
    roomRef.current.value=room;
    setRoom(room)
  }
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} ref={nameRef} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} ref={roomRef} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit" onClick={setLocal}>Sign In</button>
        </Link>
        <Link to={'/whiteboard'}>
          <button className={'button mt-20'} type="button" onClick={setLocal}>Whiteboard</button>
        </Link>
        <Link to={`/editor?name=${name}`}>
          <button className={'button mt-20'} type="button" onClick={setLocal}>Document Editor</button>
        </Link>
      </div>
      <div className={'historyDiv'}>
        {
          roomInfoArray.map((item) => (
            <button className={'button'} onClick={()=>{setInfo(item.name,item.room)}}>Join <b>{item.room}</b> room as <b>{item.name}</b></button>
          ))
        }
      </div>
    </div>
  );
}
