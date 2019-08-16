import axios from "axios";
import React, {useState, useEffect} from 'react';
import StarWarsCSS from './StarWars.css';
import StarwarCards from './StarwarCards';
import styled from "styled-components";

const Card = styled.div
`
    display:flex;
    flex-wrap:wrap;
`;

export default function StarwarsCharacters() {

    const [starCharacter, setCharacter] = useState([])

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(response =>{
            const characterData = response.data.results;
            // console.log(characterData);
            setCharacter(characterData);
        })

    }, []);


    
    return(
    <div className="container">
        {/* <div className="card"> */}
        <Card>
            {starCharacter.map(character =>{
                return <StarwarCards character={character}/>
                })
            }
        </Card>
        {/* </div> */}
    </div>
    );
}


