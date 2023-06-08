import React, {useState, useEffect} from "react";
import { getConserje } from "../service/Conserje";


export const ListarConserje =()=>{

  const [conse, setConse] = useState([]);

  useEffect(()=>{
    getConserje().then(data => setConse(data))
  },[]);



  return(
    <div className="bg-light" style={{marginTop:20, padding:20}}>

        <div className="h3">
          Lista De Conserjes
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
                        <th>Carnet</th>
                        <th>Antecedentes</th>
                        
                    </tr>
                </thead>
                <tbody className="text-center align-baseline">
                    {
                      conse.map((x, index)=>(
                        <tr key={index}>
                          <th>{index+1}</th>
                          <td>{x.name}</td>
                          <td>{x.last_name}</td>
                          <td>{x.email}</td>
                          <td>{x.carnet}</td>
                          <td>{x.antecedentes}</td>
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