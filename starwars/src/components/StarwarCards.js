import React from 'react';
//child of Starwars

const StarwarsCards = props => {
    console.log(props);
    return(
        <div className="characterBox">
            <p>{props.character}</p>
        </div>
    )
}


export default StarwarsCards;