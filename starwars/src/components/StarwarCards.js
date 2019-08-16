import React from 'react';
//child of Starwars

const StarwarCards = props => {
    console.log(props);
    return(
        <div className="characterBox">
            <h2>{props.character.name}</h2>
            <p>{props.character.height}</p>
        </div>
    )
}


export default StarwarCards;