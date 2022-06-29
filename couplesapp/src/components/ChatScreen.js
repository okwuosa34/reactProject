import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState('');  
  const [messages, setMessages] = useState([
      {
        name: "Monique & Onyinye",
        image: 
        "https://scontent.faus1-1.fna.fbcdn.net/v/t39.30808-6/277482737_5472483476114191_3584252989457396103_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SGkAsSMA1O0AX9UYQwB&_nc_ht=scontent.faus1-1.fna&oh=00_AT9tNAROKIPWrXW_b8EydyJEstXHsXcpPwgTzG-h6BrIzA&oe=62BAD566",
        message: "Whats up?"
      },
      {
        name: "Monique & Onyinye",
        image: 
        "https://scontent.faus1-1.fna.fbcdn.net/v/t39.30808-6/277482737_5472483476114191_3584252989457396103_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SGkAsSMA1O0AX9UYQwB&_nc_ht=scontent.faus1-1.fna&oh=00_AT9tNAROKIPWrXW_b8EydyJEstXHsXcpPwgTzG-h6BrIzA&oe=62BAD566",
        message: "What part of the city are you located?"
      },
      {
        message: "Whats up?"
      },
  ]);

  const handleSend = (e) => {
    e.preventDefault(); 
    
    setMessages([...messages, { message: input }]);
    setInput("");
  }

  return (
    <div className="chatScreen">
        <p className="chatScreen__timestamp">YOU MATCHED WITH MONIQUE & ONYINYE ON 11/12/2021</p>
        {messages.map((message) => 
            message.name ? (
               <div className="chatScreen__message">
                 <Avatar 
                   className="chatScreen__image"
                   alt={message.name}
                   src={message.image}  
                 />
                 <p className="chatScreen__text">{message.message}</p>
               </div>  
            ) : (
              <div className="chatScreen__message">
                  <p className="chatScreen__textUser">{message.message}</p>
              </div>
            )            
        )}

        <form className="chatScreen__input">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="chatScreen__inputField" 
                placeholder="Type a message..." 
                type="text" 
            />
            <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
        </form>
    </div>
  );
}

export default ChatScreen;