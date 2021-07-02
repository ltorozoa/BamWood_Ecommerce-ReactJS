import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';



function ItemCount ( {Stock, initial, onAdd}) {

    const [contador, setContador] = useState(1);

    if (contador > 5){


    }

    return (

        <div>
            <section>

                <button type="button" className = "btn btn-primary" onClick={ () => {setContador(contador-1)}}> - </button>
                {contador}
                <button type="button" className = "btn btn-primary" onClick={ () => {setContador(contador+1)}}> + </button>

            </section>
        </div>
    )


}

export default ItemCount;