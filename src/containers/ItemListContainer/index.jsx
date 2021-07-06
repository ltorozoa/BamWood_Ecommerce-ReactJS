import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";


function ItemListContainer({ gretting }) {

    const [items, setItems] = useState([])

    useEffect(() => {

        async function DataMELT() {

            const respuesta = await fetch ("https://api.mercadolibre.com/sites/MLA/search?q=agendas");
            const data = await respuesta.Json

            return data

        }

        DataMELT()
        setItems()

    }), [];


    return (

        <div>
           
            <h2>{gretting}</h2>

            {items ? <ItemList items={items} /> : <h2> Loading...</h2>}

        </div>




    )

   
}
 

    
export default ItemListContainer