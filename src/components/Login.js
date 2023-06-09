import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Menu} from './Menu';
import {login} from '../service/Usuario';

export const Login =()=>{

  const [miLogin, setMiLogin] = useState("False");
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState({})


  function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if(txtusu.length === 0 || txtpas.length === 0){
      alert("Complete los datos faltantes por favor.")
    }else{
          login(usuario, password)
          navigate('/menu')
    }
  }
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100" >

    <div  style={{background:"lightgray", padding:20, width:"350px", height:"350px", borderRadius:"10px"}}>
    <form id="form_login">
        <div style={{padding: "10px"}}>
            <h1 style={{color:'#474547', textAlign:"center"}}>LOGIN</h1>
            <label htmlFor="txtusu"><strong>Username</strong></label>
            <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control" onChange={(e)=>setUsuario(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="txtpas"><strong>Password</strong></label>
            <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control" onChange={(e)=>setPassword(e.target.value)}  required/>
        </div><br/>
        <div style={{ display: "flex", justifyContent:"center", marginTop:"30px"}}>        
        <input type="submit"  className="btn btn-dark" value="Login" onClick={iniciarSesion} style={{justifyContent:"center"}}/>
</div>
    </form>
    {miLogin === "true" && <Menu usu={usuario}/>}
</div>
</div>
  )
}