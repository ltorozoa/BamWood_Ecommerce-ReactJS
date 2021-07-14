import React from 'react'

function ItemDetailContainer() {



    const [getItems, setGetitems] = useState([])

    useEffect(() => {

        async function BaseMeltDetail() {
        
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=agendas")
            
            const data = await response.json();
       
            setGetitems(data.results);
        }

      


        //Ejecuto la funcion asincronica//
        BaseMeltDetail()

    }, [])



    return(

            <div>

                <ItemDetail getItems={getItems} />

            </div>


    )
}

export default ItemDetailContainer