

function ItemDetailContainer() {



    const [getItems, setGetitems] = useState([])

    useEffect(() => {

        async function BaseMeltDetail() {
        
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=agendas")
            
            const data = await response.json();
       
            setItemList(data.results);
        }

      


        //Ejecuto la funcion asincronica//
        BaseMeltDetail()

    }, [])

}