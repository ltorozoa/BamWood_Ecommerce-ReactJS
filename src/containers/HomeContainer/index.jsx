import React from "react";
import NavBar from "../../components/NavComponents"
import ItemListContainer from "../ItemListContainer";
import ItemCount from "../../components/Main/ItemCount";


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