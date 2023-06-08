import React, {  useState, useEffect, useRef} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink, Outlet} from "react-router-dom";
import {Listar} from "./Listar";
import {Estadistica} from "./Estadistica"
import { Registrar } from "./RegistrarDepartamento";
import {RegistroForm} from "./registrarCopropietario"
import { RegistroConserje } from "./RegistrarConserje";
import { ListarConserje } from "./ListarConserje";
import { ListarCopropietario } from "./ListarCopropietario";

export const Menu =(props)=>{

  const navigate = useNavigate()

  const [reg, setReg] = useState("");
  const [list, setList] = useState("");
  const [esta, setEsta] = useState("");
  const [showRegistrar, setShowRegistrar] = useState(false);
  const [showConserje, setShowConserje] = useState(false);
  const [showCopropietario, setShowCopropietario] = useState(false);
  const [showActualizarDpto, setActualizarDpto] = useState(false);
  const [showActualizarCons, setActualizarCons] = useState(false);
  const [showActualizarProp, setActualizarProp] = useState(false);
  const [tipoRegistro, setTipoRegistro] = useState('');


  const handleTipoRegistroChange = (event) => {
    const tipo = event.target.value;

    setShowRegistrar(tipo === 'tipo1');
    setShowConserje(tipo === 'tipo2');
    setShowCopropietario(tipo === 'tipo3');
    setActualizarCons(false)
    setActualizarDpto(false)
    setActualizarProp(false)
    setEsta("0");
    setList("0");
  };
  const handleActualizar = (event) => {
    const tipo = event.target.value;

    setActualizarDpto(tipo === 'tipo1');
    setActualizarCons(tipo === 'tipo2');
    setActualizarProp(tipo === 'tipo3');
    setShowRegistrar(false)
    setShowConserje(false)
    setShowCopropietario(false)
    setEsta("0");
    setList("0");
  };


  function cerrarSesion (){
    navigate("/")
  }
  
  function openRegist(){
    setReg("1");
    setEsta("0");
    setList("0");
  }

  function openList(){
    setShowRegistrar(false)
    setShowConserje(false)
    setShowCopropietario(false)
    setReg("0");
    setEsta("0");
    setList("1");
  }

  function openEst(){
    setShowRegistrar(false)
    setShowConserje(false)
    setShowCopropietario(false)
    setReg("0");
    setEsta("1");
    setList("0");
  }

    return (
        <>
        
        <div id="caja_menu" style={{textAlign:"left"}}>
                  
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#474547'}}>
          <div className="container-fluid">

            <label className="navbar-brand  h5" href="/">Menú Principal</label>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
              <div className="navbar-nav">
                
                  <select value={tipoRegistro} onChange={handleTipoRegistroChange} style={{margin:10}}>
                    <option value="">Seleccionar tipo de registro</option>
                    <option value="tipo1">Departamento</option>
                    <option value="tipo2">Conserje</option>
                    <option value="tipo3">Copropietario</option>
                  </select>
                  
                  <select onChange={handleActualizar} style={{margin:10}}>
                    <option value="">Actualizar</option>
                    <option value="tipo1">Departamento</option>
                    <option value="tipo2">Conserje</option>
                    <option value="tipo3">Copropietario</option>
                  </select>
                <NavLink to="" className="nav-link  h5  text-center"  onClick={openList}>Departamentos</NavLink>
                <NavLink to="" className="nav-link  h5  text-center" onClick={openEst} >Conserjes</NavLink>
                <a className="nav-link  h5  text-center"  style={{color:"white"}}    onClick={cerrarSesion}>Cerrar Sesión</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
{/*        <a href="/menu" ref={redirectRef} style={{ display: 'none' }} target="_self"></a>
 */}
        {showRegistrar && (
        <div>
          <Registrar/>
        </div>
      )}
      {showConserje && (
        <div>
          <RegistroConserje/>
        </div>
      )}
      {showCopropietario && (
        <div>
          <RegistroForm/>
        </div>
      )}
      {showActualizarDpto && (
        <div>
          <Listar/>
        </div>
      )}
      {showActualizarCons && (
        <div>
          <ListarConserje/>
        </div>
      )}
      {showActualizarProp && (
        <div>
          <ListarCopropietario/>
        </div>
      )}
      {list === "1" && <Listar/>}
      {esta === "1" && <ListarConserje/>}
    </>
      
    )
}