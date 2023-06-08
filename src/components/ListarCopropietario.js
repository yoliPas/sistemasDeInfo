import React, {useState, useEffect} from "react";
import { getCopropietario } from "../service/Copropietario";


export const ListarCopropietario =()=>{

  const [coprop, setCoprop] = useState([]);

  useEffect(()=>{
    getCopropietario().then(data => setCoprop(data))
  },[]);



  return(
    <div className="bg-light" style={{marginTop:20, padding:20}}>

        <div className="h3">
          Lista De Copropietarios
        </div>

        <div className="table-responsive">
          <>
            <table className="table table-bordered table-hover" style={{marginTop:12}}>
                <thead className="text-center" style={{background:"lightgray"}}>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Corrreo</th>
                        <th>Direccion</th>
                        <th>Teléfono</th>
                        <th>Departamento</th>
                        
                    </tr>
                </thead>
                <tbody className="text-center align-baseline">
                    {
                      coprop.map((x, index)=>(
                        <tr key={index}>
                          <th>{index+1}</th>
                          <td>{x.name}</td>
                          <td>{x.last_name}</td>
                          <td>{x.email}</td>
                          <td>{x.direccion}</td>
                          <td>{x.telefono}</td>
                          <td>{x.id_departamento}</td>
                        </tr>
                      ))
                    }
                </tbody>
            </table>
          </> 
          
          

        </div>
     
      </div>
  )
}