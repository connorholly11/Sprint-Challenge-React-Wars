import axios from "axios";
import React, {useState, useEffect} from 'react';
import StarWarsCSS from './StarWars.css';
import StarwarCards from './StarwarCards';

export default function StarwarsCharacters() {

    const [starCharacter, setCharacter] = useState([])

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(response =>{
            const characterData = response.data.results;
            console.log(characterData);
            setCharacter(characterData);
        })

    }, []);


    
    return(
    <div className="conatiner">
        <div className="card">
            {starCharacter.map(character =>{
                return <StarwarCards key={character} character={character}/>
                })
            }
            <h1>HELLO WORLD</h1>
                {/* <StarwarCards 
                characterData = {Starcharacter}/> */}
        </div>
    </div>
    );
}


