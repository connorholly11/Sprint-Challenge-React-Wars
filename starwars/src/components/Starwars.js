import axios from "axios";
import React, {useState, useEffect} from 'react';
import StarWarsCSS from './StarWars.css';

export default function StarwarsCharacters() {

    const [character, setcharacter] = useState([])

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(response =>{
            const characterData = response.data;
            console.log(characterData);
            console.log('hello');
        })

    }, []);

    return(
        <div>
            <h1>HELLO WORLD</h1>
        </div>
    );
}


