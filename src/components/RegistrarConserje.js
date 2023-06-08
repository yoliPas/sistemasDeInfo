import React, { useState } from "react";
import { enviarDatosConserje } from "../service/Conserje";

export const RegistroConserje = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    last_name: "",
    cargo: "",
    carnet: "",
    antecedentes:"",
    direccion: "",
    telefono: "",
    foto: ""

  });
  

  const handleChange = (e) => {
    if (e.target.name === "foto") {
      const file = e.target.files[0];
  
      const reader = new FileReader();
      reader.onload = function(event) {
        const base64String = event.target.result;
        setFormData({ ...formData, [e.target.name]: base64String });
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };


  const handleSubmit = async(e) => {
   
        e.preventDefault();
    

    enviarDatosConserje(formData)
          .then(responseData => {
            console.log(responseData);
          });

   
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
     
     
        <form onSubmit={handleSubmit}>
            <div className="h4" style={{color: "white", textAlign: "center"}}>
         Registro De Conserje
        </div>
             <div className="row col-12">
            <div className="col-6">
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="col-6">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Cargo:</label>
              <input
                type="text"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Carnet:</label>
              <input
                type="text"
                name="carnet"
                value={formData.carnet}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Antecedentes:</label>
              <input
                type="text"
                name="antecedentes"
                value={formData.antecedentes}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Direccion:</label>
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Telefono:</label>
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="form-control"
              />
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
          <div className="col-md-6">
    {formData.foto && (
      <img src={formData.foto} alt="Foto" className="img-fluid" style={{ width: "300px", height: "300px" }}/>
    )}
          <input type="file" name="foto" onChange={handleChange} />

        </div>
    </div>
  );
};

