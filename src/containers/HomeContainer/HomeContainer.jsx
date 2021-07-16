import React from "react";
import NavBar from "../../components/NavComponents/NavBar.jsx"
import ItemListContainer from "../ItemContainer/ItemListContainer.jsx";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from "../ItemContainer/ItemDetailContainer.jsx";



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
                            <ItemListContainer gretting={'Agendas'} />
                        </Route>
                        <Route path={'/productos/:nombreProducto'}> 
                            <ItemListContainer />
                        </Route>
                        <Route path={'/productos/:detalleProducto'}> 
                            <ItemDetailContainer/>
                        </Route>
                        <Route path={'detalleProducto'}> 
                            <ItemDetailContainer/>
                        </Route>

                    </section>
                </Switch>
            </BrowserRouter>
        </div>

    )


}

export default HomeContainer