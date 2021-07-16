import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "../../components/ItemComponents/ItemList"





function ItemListContainer({ gretting }) {

    // En el itemList voy a guardar los valores de la API y la voy a ir llenando//

    const [itemList, setItemList] = useState([])
    // El estado inicia vacio//
    // Los resultados los guardamos en un estado y no una variable ya que necesitamos que se renderice cada vez que se modifique//

    useEffect(() => {

        async function BaseMelt() {
            //Llamo los datos de la API//
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=agendas")
            // Recibo los datos de la API a través del .json//
            const data = await response.json();
            // En setItemList voy a guarda "data" que serian los resultados de la API //
            setItemList(data.results);
        }

        //Ejecuto la funcion asincronica//
        BaseMelt()

    }, [])



    // Se muestras los datos que trajo la API en la consola//
    /* console.log (itemList); */


    return (

        <div>

            <h2>{gretting}</h2>
            <ItemList itemList={itemList} />
            

        </div>

    )


}

export default ItemListContainer