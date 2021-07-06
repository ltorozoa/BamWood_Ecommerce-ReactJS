import React from "react"
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import Icono from "./CartWitgetComponent";


function NavBar() {
  return (
    <div className="container-fluid">

      <div >

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <span className="navbar-brand" href="#">BamWood </span>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <span className="nav-link active" aria-current="page" href="#">Inicio </span>
              </li>
              <li className="nav-item">
                <span className="nav-link active" aria-current="page" href="#"> Sobre nosotros </span>
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
            <Icono />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar