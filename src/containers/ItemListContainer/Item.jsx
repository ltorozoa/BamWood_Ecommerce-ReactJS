import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function Item( id, tittle, image, price, description) {
    
return (

    <div>
        <Card style={{ width: '18rem' }}>

            <Card.Img variant="top" src="holder.js/100px180"> {image} </Card.Img>
            <Card.Body>
                <Card.Title>{tittle}</Card.Title>
                <Card.Text> {description} </Card.Text>
                <Card.price> {price} </Card.price>
                
                <Button variant="primary"> Agregar al carrito </Button>
            </Card.Body>
        </Card>

    </div>

    )
}

export default Item 