import React from "react";
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import './Item.css'

function Item ({prod}){


  const [contador, setCount] = useState(0);

    return(
     
        <Card className="cartas"  >
        <Card.Img variant="top" src={ prod.imagen} />
        <Card.Body>
          <Card.Title>{prod.nombre}</Card.Title>
          <Card.Text>
            $ {prod.precio}
          </Card.Text>
          <div className="productos__content-cantidad">
                <div className="productos__content-cantidad-contador">
                    <p onClick={ () => {if (contador > 0) {setCount (contador => contador -1)}} }>-</p>
                            <h4>{ contador }</h4>
                            <p onClick={ () => {if (contador < 7) {setCount (contador => contador +1)}} }>+</p>
                        </div>
                        <button href="#">Agregar al carrito</button>
                    </div>
        </Card.Body>
      </Card>
      
      
    
    );
}

export default Item;
