import React from 'react'
import "./Header.css";
// Importing Peron icon from Meterial-UI
import PersonIcon from '@mui/icons-material/Person';
// Importing Chat icon from Material-UI
import ChatIcon from '@mui/icons-material/Chat';
// Importing Color from Material-UI
import { brown } from '@mui/material/colors';
// Importing iconButton click feature
import IconButton from '@mui/material/IconButton';

function Header() {
  return (
      // BEM, Material UI was used for icons
    <div className="header">
        <IconButton>
        <PersonIcon sx={{ color: brown[200] }} className="header__icon" fontSize="large" />
        </IconButton>

        <img 
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-emblem.jpg" 
        alt="couple logo"
        />

        <IconButton>
        <ChatIcon sx={{ color: brown[200] }} className="header__icon" fontSize="large" />
        </IconButton>      
    </div>
  );
}

export default Header
