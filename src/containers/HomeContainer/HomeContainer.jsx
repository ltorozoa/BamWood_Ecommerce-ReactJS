import React from "react";
import NavBar from "../../components/NavComponents/NavBar.jsx"
import ItemListContainer from "../ItemContainer/ItemListContainer.jsx";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from "../ItemContainer/ItemDetailContainer.jsx";



function HomeContainer() {
    return (

        <div>
            <BrowserRouter>
                
                    <NavBar />
            
                <Switch>
                
                        <Route exact path={'/'}> 
                            <ItemListContainer gretting={'Agendas'} />
                        </Route>
                        <Route exact path={'/category/:id'}> 
                            <ItemListContainer />
                        </Route>
                        <Route exact path={'/item/:id'}> 
                            <ItemDetailContainer/>
                        </Route>
                        <Route exact path={'detalleProducto'}> 
                            <ItemDetailContainer/>
                        </Route>

                    
                </Switch>
            </BrowserRouter>
        </div>

    )


}

export default HomeContainer