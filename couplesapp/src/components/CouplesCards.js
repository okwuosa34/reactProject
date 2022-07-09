import React, { useState } from 'react'
import CoupleCard from "react-tinder-card";
import './CoupleCards.css';

function CouplesCards() {
    // array of objects to list off images and name
    const [people, setPeople] = useState([
        {
            name: "monique & onyinye",
            url: "https://scontent.faus1-1.fna.fbcdn.net/v/t39.30808-6/277482737_5472483476114191_3584252989457396103_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=n_5jxfz75C4AX8ZUxZ9&_nc_ht=scontent.faus1-1.fna&oh=00_AT-WvooppMEIA-Li_ZgztWWP8qAU4fmURe8Oenyk-ZnZ9g&oe=62CE9BE6"
        },
        {
            name: "kennedy & charles",
            url: "https://scontent.faus1-1.fna.fbcdn.net/v/t39.30808-6/279700625_10221623465397997_5264346922195603819_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1WX-mKUgbQ0AX9RbZLE&_nc_ht=scontent.faus1-1.fna&oh=00_AT96lf3guKlyFNkvM-roreFK9Qvt5QBw9JbbhkCCXurLkg&oe=62CF14C6"
        },
    ]);

    // Push to an array
    // setPeople([...people])
    //Key allows REACT to efficiently re-render a LIST

    // Inspector will log that card has been removed from screen
    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
    <div className="coupleCards">
        <div className="coupleCards__cardContainer">
            {people.map(person => (
                <CoupleCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
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