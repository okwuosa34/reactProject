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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';
import Logo from "./newLogo.png";

function Header({ backButton }) {
  // Provides session history 
  const history = useHistory();
  return (
      // BEM, Material UI was used for icons
      // history.replace(backButton) is replacing history with url
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon sx={{ color: brown[200] }} fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon sx={{ color: brown[200] }} className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/main">
        <img 
        className="header__logo"
        src={Logo} 
        alt="couple logo"
        />
      </Link>

      <Link to="/chat">
      <IconButton>
        <ChatIcon sx={{ color: brown[200] }} className="header__icon" fontSize="large" />
      </IconButton>
      </Link>
              
    </div>
  );
}

export default Header;
