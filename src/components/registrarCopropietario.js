import React, { useState } from "react";


export const RegistroForm = () => {
  const [showModal, setShowModal] = useState(false);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    last_name: "",
    id_departamento: "",
    carnet: "",
    direccion: "",
    telefono: "",
    foto: null,
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
    console.log(formData);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center vh-100"
      style={{
        color: "white",
        marginTop: -30,
        marginLeft: 100,
        width: 900,
        height: 800,
      }}
    >
      <form onSubmit={handleSubmit} style={{ color: "white" }}>
        <div className="h4" style={{ color: "white", textAlign: "center" }}>
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
        </div>

        <div className="row" style={{ marginTop: 10 }}>
          <div className="col">
            <button className="btn btn-dark">
              Guardar
            </button>
          </div>
          <div className="col">
            <button className="btn btn-dark">Cancelar</button>
          </div>
        </div>
      </form>
      <div
        className="form-group"
        style={{ color: "white", marginTop: 10, width: 10, marginLeft: 50 }}
      >
        <label
          style={{ color: "white", marginTop: 10, width: 10, marginLeft: 60 }}
        >
          Foto:
        </label>
        <input
          type="file"
          name="foto"
          onChange={handleChange}
          className="form-control-file"
          style={{
            display: "block",
            margin: "auto",
            marginTop: "-15px",
            width: "400px",
            marginLeft: "100px",
          }}
        />
      </div>
      <div className="col-md-6">
        {formData.foto && (
          <img
            src={URL.createObjectURL(formData.foto)}
            alt="Foto"
            className="img-fluid"
            style={{ width: "300px", height: "300px", marginLeft: "25px" }}
          />
        )}
      </div>
    </div>
  );
};
