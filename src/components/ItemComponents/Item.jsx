import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




function CardItem ({name, price, img}) {

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title> {name}</Card.Title>
                <Card.Text> {price} </Card.Text>
                <Button variant="primary"> Ver producto </Button>
            </Card.Body>
            

        </Card>


    )


}

export default CardItem;