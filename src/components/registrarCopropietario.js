import React, { useState } from "react";

export const RegistroForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    last_name: "",
    id_departamento: "",
    carnet: "",
    direccion: "",
    telefono: "",
    foto: null

  });

    const handleChange = (e) => {
        if (e.target.name === "foto") {
          setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }
      };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    console.log(formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">

        
     
        <form onSubmit={handleSubmit}>
            <div className="h4" style={{color: "white", textAlign: "center"}}>
        Registro Copropietario
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
              <label>ID Departamento:</label>
              <input
                type="text"
                name="id_departamento"
                value={formData.id_departamento}
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
            <div className="form-group">
              <label>Foto:</label>
              <input
                type="file"
                name="foto"
                onChange={handleChange}
                className="form-control-file"
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
            <img src={URL.createObjectURL(formData.foto)} alt="Foto" className="img-fluid" style={{ width: "300px", height: "300px" }}/>
          )}
        </div>
    </div>
  );
};

