import React, { useState } from "react";
import { enviarDatosDepartamento } from "../service/Departamento"
import { useNavigate } from "react-router-dom";

export const Registrar = () => {

  const navigate = useNavigate()

  const [formulario, setFormulario] = useState({
    superficie: "",
    ambiente: "",
    torre: "",
    direccion: "",
    num: "",
    foto: "",
    garaje: false,
    boulera: false
  });

  const handleGuardarDatos = () => {
    const confirmacion = window.confirm('¿Deseas guardar los datos?');
    if (confirmacion) {
      alert('Los datos se han guardado exitosamente.');
    }};

  const handleChange = (e) => {
    if (e.target.name === "foto") {
      const file = e.target.files[0];
  
      const reader = new FileReader();
      reader.onload = function(event) {
        const base64String = event.target.result;
        setFormulario({ ...formulario, [e.target.name]: base64String });
      };
      reader.readAsDataURL(file);
    } else {
      setFormulario({ ...formulario, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      superficie: formulario.superficie,
      ambientes: formulario.ambiente,
      torre: formulario.torre,
      direccion: formulario.direccion,
      numero_depar: formulario.num,
      foto: formulario.foto,
      garaje: formulario.garaje,
      boulera: formulario.boulera
    };
    enviarDatosDepartamento(data)
      .then(responseData => {
        console.log(responseData);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100" style={{ marginTop: -30, marginLeft: 120,padding: 20}}>

      <form id="miFormulario" onSubmit={handleSubmit}>
        <div className="h4" style={{ color: "white", textAlign: "center" }}>
          Registrar Departamento
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="form-group">
            <label>Superficie:</label>
            <input
              className="form-control form-control-lg text-center"
              type="text"
              name="superficie"
              value={formulario.superficie}
              onChange={handleChange}
              required
              placeholder="Superfice"
            />
          </div>

          <div className="form-group">
            <label>Ambiente:</label>
            <input
              className="form-control form-control-lg text-center"
              type="text"
              name="ambiente"
              value={formulario.ambiente}
              onChange={handleChange}
              placeholder="Ambiente"
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
              name="torre"
              value={formulario.torre}
              onChange={handleChange
              }
              placeholder="Torre"
              required
            />
          </div>

          <div className="form-group">
            <label>Direccion:</label>
            <input
              className="form-control form-control-lg text-center"
              type="text"
              name="direccion"
              value={formulario.direccion}
              onChange={handleChange
              }
              placeholder="Dirección"
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
              name="num"
              value={formulario.num}
              onChange={handleChange
              }
              placeholder="Número departamento"
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
                name="garaje"
                id="flexCheckIndeterminate"
                checked={formulario.garaje}
                onChange={handleChange}
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
                name="boulera"
                checked={formulario.boulera}
                onChange={handleChange
                }
                id="flexCheckIndeterminate" />
              <label class="form-check-label" for="flexCheckIndeterminate">
                Boulera
              </label>
            </div>
          </div>


        </div>


        <div className="row" style={{ marginTop: 10 }}>
          <div className="col">
            <button className="btn btn-dark" onClick={handleGuardarDatos}>Guardar</button>
          </div>
          <div className="col">
            <button className="btn btn-dark">Cancelar</button>
          </div>
        </div>
      </form>
      <div className="col-md-6" style={{ marginTop:10, marginLeft: 200, borderColor: "red", border: "0"}}>
          {formulario.foto && (
            <img src={formulario.foto} alt="Foto" className="img-fluid" style={{ width: "300px", height: "300px" }} />
          )}
          <input type="file" name="foto" onChange={handleChange} />

        </div>
    </div>
    
  );
};
