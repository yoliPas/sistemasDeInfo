import React from "react";
import { NavLink } from "react-router-dom";

export const Menu =(props)=>{
  
  function cerrarSesion (){
    document.getElementById("caja_menu").style.display = "none";
    document.getElementById("form_login").style.display = "block";
    document.getElementById("txtusu").value = "";
    document.getElementById("txtpas").value = "";
    document.getElementById("txtusu").focus();
  }
    return (
        <>
        
        <div id="caja_menu" style={{textAlign:"left"}}>

        <strong className="h3">
          Bienvenido Usuario : {props.usu}
        </strong>
                  
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop:20}}>
          <div className="container-fluid">

            <label className="navbar-brand  h5" href=" ">Menú Principal</label>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink to="" className="nav-link  h5  text-center"  >Registrar</NavLink>
                <NavLink to="" className="nav-link  h5  text-center"  >Listar</NavLink>
                <NavLink to="" className="nav-link  h5  text-center"  >Estadistica</NavLink>
                <a className="nav-link  h5  text-center"  style={{color:"blue"}}  href=" "  onClick={cerrarSesion}>Cerrar Sesión</a>
              </div>
            </div>
          </div>
        </nav>
      </div>

    </>
      
    )
}