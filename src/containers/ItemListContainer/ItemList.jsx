import React from "react";
import Item from "./Item";


function ItemList({}) {

    return (

        <div>

            {items.map(item => <Item key={item.id} id={item.id} tittle={item.tittle}
                image={item.thumbnail} price={item.price} description={item.description}
            />)
            }

        </div>



    )


}

export default ItemList