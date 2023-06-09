import React, {useState, useEffect} from "react";
import {getDepartamento} from "../service/Departamento"


export const Listar =()=>{

  const [depa, setDepa] = useState([]);

  useEffect(()=>{
    getDepartamento().then(data => {
      console.log(data)
      setDepa(data)
    })
  },[]);



  return(
    <div className="bg-light" style={{marginTop:20, padding:20}}>

        <div className="h3">
          Lista De Departamentos
        </div>

        <div className="table-responsive">
          <>
            <table className="table table-bordered table-hover" style={{marginTop:12}}>
                <thead className="text-center" style={{background:"lightgray"}}>
                    <tr>
                        <th>#</th>
                        <th>Superficie</th>
                        <th>Ambiente</th>
                        <th>Torre</th>
                        <th>Dirección</th>
                        <th>Num Departamento</th>
                    </tr>
                </thead>
                <tbody className="text-center align-baseline">
                    {
                      depa?.map((x, index)=>(
                        <tr key={index}>
                          <th>{index+1}</th>
                          <td>{x.superficie}</td>
                          <td>{x.ambientes}</td>
                          <td>{x.torre}</td>
                          <td>{x.direccion}</td>
                          <td>{x.numero_depar}</td>
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