import React from "react";
import CardItem from "./Item"


function ItemList({ itemList }) {


    return (


        <div>


            {itemList.map(element => {
                return (

                    <CardItem key={element.id} name={element.title} price={element.price} description={element.description} img={element.thumbnail} />
                    
                )

            })
            }

           
        </div>
    )

}

export default ItemList;