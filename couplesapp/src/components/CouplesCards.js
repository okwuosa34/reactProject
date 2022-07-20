import React, { useEffect, useState } from 'react'
import CoupleCard from "react-tinder-card";
import './CoupleCards.css';
import axios from '../axios';

function CouplesCards() {
    // array of objects to list off images and name
    const [pair, setPair] = useState([]);
    const [lastDirection, setLastDirection] = useState()

    // Fetching data w/ async and await syntacs
    useEffect(() => {
      async function getData() {
          const req = await axios.get("/user/couples");
          
          setPair(req.data);
      } 
      
      getData();
    }, []);    

    // Inspector will log that card has been removed from screen
    // Line 54 if last direction exists <p> will let you know which direction was swiped

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        setLastDirection(direction)
    };

    const outOfFrame = (name) => {
        console.log(name + " removed from screen!");
    };

    return (
    <div className="coupleCards">
        <div className="cardContainer">
            {pair.map(couple => (
                <CoupleCard
                    className="swipeFeature"
                    key={couple.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, couple.name)}
                    onCardLeftScreen={() => outOfFrame(couple.name)}
                >
                    <div 
                        style={{ backgroundImage: `url(${couple.imgUrl})` }}
                        className="cardProfile"
                    >
                        <h3>{couple.name}</h3>
                    </div>
                </CoupleCard>
            ))}
            <div className="swipeLog">
                {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
            </div>
        </div>       
    </div>
  );
}

export default CouplesCards