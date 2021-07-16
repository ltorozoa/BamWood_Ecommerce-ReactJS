import React from "react";
import CardItem from "./Item";

function ItemDetail ({getItems}){

return(

    <div>

            {getItems.map(element => {
                return (

                    <CardItem key={element.id} name={element.title} price={element.price} description={element.description} img={element.thumbnail} />

                )

            })
            }

    </div>
            

)


}

export default ItemDetail;