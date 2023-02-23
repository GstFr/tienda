import React from "react";
import Card from 'react-bootstrap/Card';

function Item ({prod}){
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{prod.nombre}</Card.Title>
          <Card.Text>
            $ {prod.precio}
          </Card.Text>
          
        </Card.Body>
      </Card>
    );
}

export default Item;
