import React from "react";
import CardItem from "./Item";

function ItemDetail({ getItems }) {

    return (




        <CardItem key={getItems.id} name={getItems.title} price={getItems.price} description={getItems.description} img={getItems.thumbnail} />

        
   

)


}

export default ItemDetail;