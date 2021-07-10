import React from "react";
import NavBar from "../../components/NavComponents/NavBar.jsx"
import ItemListContainer from "../ItemContainer/ItemListContainer.jsx";
import ItemCount from "../../components/ItemComponents/ItemCount.jsx";


function HomeContainer() {
    return (

        <div>

            <header>
                <NavBar />
                     
            </header>

            <section>
            <ItemListContainer gretting={'Bienvenidos'}/>
            <ItemCount/>
            </section>

        </div>

    )


}

export default HomeContainer