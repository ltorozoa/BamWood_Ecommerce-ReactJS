import React from "react";
import NavBar from "../../components/NavComponents"
import ItemListContainer from "../ItemListContainer";

function HomeContainer() {
    return (

        <div>

            <header>
                <NavBar />
                <ItemListContainer gretting={'Bienvenidos'}/>
            </header>

            <section>

            </section>

        </div>

    )


}

export default HomeContainer