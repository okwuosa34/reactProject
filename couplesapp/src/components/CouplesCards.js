import React, { useState, useEffect } from 'react'
import CoupleCard from "react-tinder-card";
import database from '../firebase';
import './CoupleCards.css';

function CouplesCards() {
    // array of objects to list off images and name
    const [people, setPeople] = useState([
        {
            name: "monique & onyinye",
            url: "https://scontent.faus1-1.fna.fbcdn.net/v/t39.30808-6/277482737_5472483476114191_3584252989457396103_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SGkAsSMA1O0AX9UYQwB&_nc_ht=scontent.faus1-1.fna&oh=00_AT9tNAROKIPWrXW_b8EydyJEstXHsXcpPwgTzG-h6BrIzA&oe=62BAD566"
        },
        {
            name: "kennedy & charles",
            url: "https://scontent.faus1-1.fna.fbcdn.net/v/t39.30808-6/279700625_10221623465397997_5264346922195603819_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=YCvK61TIzz4AX8x1DmQ&_nc_ht=scontent.faus1-1.fna&oh=00_AT_V90md25RkNADq6cGJN37UBJ76oa7fl_tuQlyySTzr3g&oe=62B95406"
        },
    ]);

    // Runs based on a condition
    useEffect(() => {
        // where the code runs...

        // will run ONCE when the component loads, and never again
        // Snapshot takes snapshot of document data and return it.
        // wrapped in setPeople to continue to pull from database
        database
        .collection("Couples")
        .onSnapshot((snapshot) => 
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    // Push to an array
    // setPeople([...people])
    //Key allows REACT to efficiently re-render a LIST

    return (
    <div>
        <h1>Couples Cards</h1>

        <div className="coupleCards__cardContainer">
            {people.map(person => (
                <CoupleCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div 
                        style={{backgroundImage: `url(${person.url})` }}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </CoupleCard>
            ))}
        </div>       
    </div>
  );
}

export default CouplesCards