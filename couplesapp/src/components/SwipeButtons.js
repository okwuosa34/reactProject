// Creating the buttons to go under the cards

import React from 'react';
import './SwipeButtons.css';

import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { brown } from '@mui/material/colors';
import { yellow } from '@mui/material/colors';
import { lime } from '@mui/material/colors';
import { blueGrey } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';


function SwipeButtons() {
  return (
    <div className="swipeButtons">
        <IconButton className="swipeButtons__repeat">
            <ReplayIcon sx={{ color: lime[700] }} fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__left">
            <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__star">
            <StarRateIcon sx={{ color: blueGrey[400] }} fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__right">
            <FavoriteIcon sx={{ color: brown[200] }} fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__lightning">
            <FlashOnIcon sx={{ color: yellow[400] }} fontSize="large" />
        </IconButton>
        <Link to={{ pathname: "https://cash.app/$doubleo34" }} target="_blank">
        <IconButton className="swipeButtons__currency">
            <CurrencyExchangeIcon sx={{ color: green[500] }} fontSize="large" />
        </IconButton>
        </Link>       
    </div>
  );
};

export default SwipeButtons;

