import React, {useState} from "react";
import {enviarDatosDepartamento} from "../service/Departamento"
import { useNavigate } from "react-router-dom";

export const Registrar = () => {

  const navigate = useNavigate()

  const [formulario, setFormulario] = useState({
        superficie: "",
        ambiente: "",
        torre: "",
        direccion: "",
        num: "",
        garaje: false,
        boulera: false
      });
  
  const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
          superficie: formulario.superficie,
          ambientes: formulario.ambiente,
          torre: formulario.torre,
          direccion: formulario.direccion,
          numero_depar: formulario.num,
          garaje: formulario.garaje,
          boulera: formulario.boulera
        };
          enviarDatosDepartamento(data)
          .then(responseData => {
            console.log(responseData);
          });
  }; 

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100" style={{ marginTop: 20, padding: 20 }}>
      
        <form id="miFormulario" onSubmit={handleSubmit}>
          <div className="h4" style={{color: "white", textAlign: "center"}}>
        Formulario De Registro De Departamento
        </div>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="form-group">
            <label>Superficie:</label>

              <input
                className="form-control form-control-lg text-center"
                type="text"
                value={formulario.superficie}
                onChange={(e) =>
                  setFormulario({ ...formulario, superficie: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
            <label>Ambiente:</label>
                <input
                  className="form-control form-control-lg text-center"
                  type="text"
                  value={formulario.ambiente}
                  onChange={(e) =>
                    setFormulario({...formulario, ambiente: e.target.value})
                  }
                  required
                />
            </div>
          </div>

          <div className="row" style={{ marginTop: 20 }}>
          <div className="form-group">
            <label>Torre:</label>
              <input
                className="form-control form-control-lg text-center"
                type="text"
                value={formulario.torre}
                onChange={(e)=>
                  setFormulario({...formulario, torre: e.target.value})
                }
                required
              />
            </div>

            <div className="form-group">
            <label>Direccion:</label>
                <input
                  className="form-control form-control-lg text-center"
                  type="text"
                  value={formulario.direccion}
                  onChange={(e)=>
                    setFormulario({...formulario, direccion: e.target.value})
                  }
                  required
                />
            </div>
          </div>

          <div className="row" style={{ marginTop: 20 }}>
          <div className="form-group">
            <label>Nùmero de Departamento:</label>
              <input
                className="form-control form-control-lg text-center"
                type="text"
                value={formulario.num}
                  onChange={(e)=>
                    setFormulario({...formulario, num: e.target.value})
                  }
                required
              />
            </div>
          </div>
          
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-6">
              <div class="form-check">
                <input 
                  class="form-check-input" 
                  type="checkbox" 
                  id="flexCheckIndeterminate"
                  checked={formulario.garaje}
                  onChange={(e)=>
                    setFormulario({...formulario, garaje: e.target.checked})
                  }
                />
                <label class="form-check-label" for="flexCheckIndeterminate">
                    Garaje
                  </label>
              </div>
            </div>

            <div className="col-6">
              <div class="form-check">
                  <input 
                  class="form-check-input" 
                  type="checkbox" 
                  checked={formulario.boulera}
                  onChange={(e)=>
                    setFormulario({...formulario, boulera: e.target.checked})
                  }
                  id="flexCheckIndeterminate"/>
                  <label class="form-check-label" for="flexCheckIndeterminate">
                    Boulera
                  </label>
                </div>
            </div>
          </div>


          <div className="row" style={{ marginTop: 10 }}>
            <div className="col">
              <button className="btn btn-dark">Guardar Datos</button>
            </div>
            <div className="col">
              <button className="btn btn-dark">Cancelar</button>   
            </div>
          </div>
        </form>
    </div>
  );
};
