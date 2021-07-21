import React from "react";
import {useEffect, useState} from 'react';
import ItemDetail from "../../components/ItemComponents/ItemDetails";




function ItemDetailContainer() {

    const [getItems, setGetitems] = useState([])
    


    useEffect(() => {

        async function BaseMeltDetail() {
        
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=agendas')
            
            const data = await response.json();
       
            setGetitems(data.results[0]);
        }

      


        //Ejecuto la funcion asincronica//
        BaseMeltDetail()

    }, [])

        console.log(getItems);

    return(

            <div>

              {getItems ? <ItemDetail getItems={getItems} /> : <p>"...Loading"</p>};
                
            </div>


    )
}

export default ItemDetailContainer