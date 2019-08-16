import React from 'react';
//child of Starwars

const StarwarCards = props => {
    console.log(props);
    return(
        <div className="characterBox">
            <h2>{props.results}</h2>
            {/* <p>{props.results.height}</p> */}
        </div>
    )
}


export default StarwarCards;