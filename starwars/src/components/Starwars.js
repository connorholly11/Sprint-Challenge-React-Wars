import axios from "axios";
import React, {useState, useEffect} from 'react';
import StarWarsCSS from './StarWars.css';
import StarwarCards from './StarwarCards';

export default function StarwarsCharacters() {

    const [Starcharacter, setcharacter] = useState([])

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(response =>{
            const characterData = response.data;
            // console.log(characterData);
            setcharacter(characterData);
        })

    }, []);

    

    return(
    <div className="conatiner">
        <div className="card">
        {characterData.map(character =>{
        return <StarwarCards character={character}/>
    })
}
        <h1>HELLO WORLD</h1>
                {/* <StarwarCards 
                characterData = {Starcharacter}/> */}
        </div>
    </div>
    );
}


