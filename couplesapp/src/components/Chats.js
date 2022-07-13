// Chats is the content that will be in the chatroom

import React from 'react';
import './Chats.css';
import Chatview from './Chatview';

function Chats() {
  return (
  <div className="chats">
    <Chatview
      name="Monique & Onyinye"
      message="Hey how are you guys doing?"
      timestamp="30 seconds ago"
      profilePic="https://scontent.faus1-1.fna.fbcdn.net/v/t39.30808-6/277482737_5472483476114191_3584252989457396103_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LWJc4ByvC8wAX9F_iW5&_nc_ht=scontent.faus1-1.fna&oh=00_AT-NM6Bje5EO-tec7JMHtzxwmGXxcOoMoIu8gIeUUPJLkg&oe=62D29066"  
    />
    <Chatview
      name="Kennedy & Charles"
      message="What's up?!"
      timestamp="45 minutes ago"
      profilePic="https://scontent.faus1-1.fna.fbcdn.net/v/t39.30808-6/279700625_10221623465397997_5264346922195603819_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=C9jWoQkexLoAX-hpGT2&_nc_ht=scontent.faus1-1.fna&oh=00_AT-LJkKIaLI3mPqaxAgu1huv3sj3ziJTq_luXU5Za7e2bg&oe=62D30946"  
    />
    <Chatview
      name="Will & Jada"
      message="Keep my wife's name out your f**king mouth!!!"
      timestamp="1 hour ago"
      profilePic="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/actor-will-smith-and-jada-pinkett-smithattend-the-94th-news-photo-1654106004.jpg"  
    />
  </div>
  );
  
}

export default Chats;
