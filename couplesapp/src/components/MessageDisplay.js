// MessageDiplsay is the visual of the chatroom
import React from 'react'
import "./MessageDisplay.css"
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function DisplayMsg({ name, message, profileImg, timestamp }) {
  return (
  <Link to={`/chat/${name}`}>
  <div className="DMs">
      <Avatar className="displayImage" alt={name} src={profileImg} />
      <div className="details">
        <h2>{name}</h2>
        <p>{message}</p>  
      </div>
      <p className="displayTimestamp">{timestamp}</p>  
  </div>
  </Link>  
  );
}

export default DisplayMsg;