import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';




function CardItem ({name, price, img}) {

    return (
    
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title> {name}</Card.Title>
                <Card.Text> {price} </Card.Text>
                <Button variant="outline-primary"> <Link to={'/detalleProducto'}> Ver producto </Link> </Button>
            </Card.Body>
            <ItemCount/>
        </Card>


    )


}

export default CardItem;