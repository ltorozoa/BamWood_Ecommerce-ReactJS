import React from "react";
import NavBar from "../../components/NavComponents/NavBar.jsx"
import ItemListContainer from "../ItemContainer/ItemListContainer.jsx";
import ItemCount from "../../components/ItemComponents/ItemCount.jsx";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function HomeContainer() {
    return (

        <div>
            <BrowserRouter>
                <header>
                    <NavBar />
                </header>
                <Switch>
                    <section>
                        <Route exact path={'/'}> 
                            <ItemListContainer gretting={'Cargando...'} />
                        </Route>
                        <Route>
                            <ItemCount/>
                        </Route>
                    </section>
                </Switch>
            </BrowserRouter>
        </div>

    )


}

export default HomeContainer