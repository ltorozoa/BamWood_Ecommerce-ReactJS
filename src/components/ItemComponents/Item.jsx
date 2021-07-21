import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useParams } from 'react-router';




function CardItem ({name, price, img}) {

    const {id} = useParams();

    return (
    
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title> {name}</Card.Title>
                <Card.Text> {price} </Card.Text>
                <Button variant="outline-primary"> <Link to={"/item/" + id}> Ver producto </Link> </Button>
            </Card.Body>
            <ItemCount/>
        </Card>


    )


}

export default CardItem;