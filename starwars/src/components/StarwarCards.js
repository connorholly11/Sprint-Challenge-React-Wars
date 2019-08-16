import React from 'react';
//child of Starwars
import { Card, Icon } from 'semantic-ui-react'




const StarwarCards = props => {
    console.log(props);
    return(
    <div className="characterBox">
        <Card>
            <h3>Name:</h3>
   <Card.Content header={props.character.name} />
   <br/>
   <strong>Height(cm):</strong><Card.Content description={props.character.height} />
  </Card>
  <p><strong>Eye Color: </strong>{props.character.eye_color}</p>


        
            {/* <h2>{props.character.name}</h2>
             <p>Height(cm): {props.character.height}</p> */}
     </div>
    )
}


export default StarwarCards;


{/* <Card>
    <Card.Content header='About Amy' />
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon name='user' />
      4 Friends
    </Card.Content>
  </Card> */}