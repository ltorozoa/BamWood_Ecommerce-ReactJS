import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';



function ItemCount () {

    var Initial = 1;
    var Stock = 10;

    const [contador, setContador] = useState(1);

    function sumarItem() {

        if (contador > Initial){

            
            setContador(contador-1);

        } else {

            console.log('No se pueden seleccionar menos productos');
        }
    }

    function sumarStock(){

        if (contador < Stock){

            
            setContador(contador +1);

        } else {

            console.log('Ha alcanzado el limite de productos disponibles');
        }
    }


    return (

        <div>
            <section>

                <button type="button" className = "btn btn-primary" onClick={ () => {sumarItem()}}> - </button>
                {contador}
                <button type="button" className = "btn btn-primary" onClick={ () => {sumarStock()}}> + </button>

            </section>
        </div>
    )


}

export default ItemCount;