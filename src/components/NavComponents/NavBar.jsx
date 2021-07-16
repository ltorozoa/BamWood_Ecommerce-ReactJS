import React, { useRef } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { usePopper } from 'react-popper';
import Carrito from "./Carrito";
import { Link } from 'react-router-dom';



function NavBar() {

  const Dropdown = useRef();
  const {}=usePopper(Dropdown);

  return (
    <div className="container-fluid">

      <div >

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <span className="navbar-brand"> <Link to={'/'}> BamWood </Link> </span>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <span className="nav-link active" aria-current="page"> Sobre nosotros </span>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Productos </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item"> <Link to={'/'}> Agendas </Link> </a> </li>
                </ul>

              </li>

              <li className="nav-item">
                <span className="nav-link active" aria-current="page" href="#"> Contacto </span>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" >
            </input>
            <button className="btn btn-outline-success" type="submit"> Buscar </button>
          </form>
          <div>

            <Carrito />

          </div>
        </nav>
      </div>
    </div >
  )
}


export default NavBar