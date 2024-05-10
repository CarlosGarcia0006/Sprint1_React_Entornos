import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import "../../assets/css/login.css";
import "../../assets/css/style.css";

const Register = () => {

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nombre: "",
    nombreUsuario: "",
    password: "",
    email: "",
    idTipoDocumento: "" /*No estoy muy segura de este*/,
    numeroDocumento: "",
  });

  const { nombre, nombreUsuario, password, email, idTipoDocumento, numeroDocumento } =
    usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  /*useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);*/

  const Register = async () => {
    if (password.length < 6) {
      const msg = "La contraseña deber ser al menos de 6 caracteres.";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    } else {
      const data = {
        idTipoDocumento: parseInt(usuario.idTipoDocumento) /*No estoy muy segura de este*/,
        numeroDocumento: usuario.numeroDocumento,
        nombre: usuario.nombre,
        password: usuario.password,
        nombreUsuario: usuario.nombreUsuario,  
        email: usuario.email,
      };

      const response = await APIInvoke.invokePOST(`api/usuarios/`, data);
      const verificar = response.id;

      if (verificar === "") {
        const msg = "El usuario no se ha podido crear";
        swal({
          title: "Error",
          text: msg,
          icon: "error",
          buttons: {
            confirm: {
              text: "Ok",
              value: true,
              visible: true,
              className: "btn btn-danger",
              closeModal: true,
            },
          },
        });
      } else {
        const msg = "El usuario fue creado correctamente.";
        swal({
          title: "Información",
          text: msg,
          icon: "success",
          buttons: {
            confirm: {
              text: "Ok",
              value: true,
              visible: true,
              className: "btn btn-primary",
              closeModal: true,
            },
          },
        });

        navigate("/home");

        setUsuario({
          nombre: "",
          nombreUsuario: "",
          password: "",
          email: "",
          idTipoDocumento: "" /*No estoy muy segura de este*/,
          numeroDocumento: "",
        });
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Register();
  };

  return (
    <div className="container">
      <div className="col s12 m6">
        <div className="card">
          <form onSubmit={onSubmit}>
            <div className="card-content center">
              <img src="../../assets/css/img/MisionTIC-UIS.png" alt="" />
              <span className="card-title">REGISTRATE</span>
              <div className="col s12">
                <div className="row">
                  <div className="input-field col s12"></div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="icon_nombre">Nombre real</label>
                    <input
                      id="icon_nombre"
                      type="text"
                      name="nombre"
                      className="validate"
                      value={nombre}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="icon_user">Usuario</label>
                    <input
                      id="icon_user"
                      type="text"
                      name="nombreUsuario"
                      className="validate"
                      value={nombreUsuario}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="icon_pass">Contraseña</label>
                    <input
                      id="icon_pass"
                      type="password"
                      name="password"
                      className="validate"
                      value={password}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="icon_email">Email</label>
                    <input
                      id="icon_email"
                      type="email"
                      name="email"
                      className="validate"
                      value={email}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <p>Tipo de Documento:</p>
                    <label>
                      <input
                        type="radio"
                        name="idTipoDocumento"
                        value="5"
                        checked={idTipoDocumento === "5"}
                        onChange={onChange}
                      />
                      <span>Cédula de Ciudadanía (CC)</span>
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <label>
                      <input
                        type="radio"
                        name="idTipoDocumento"
                        value= "6"
                        checked={idTipoDocumento === "6"}
                        onChange={onChange}
                      />
                      <span>Tarjeta de Identidad (TI)</span>
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="numDocumento">Número de Documento</label>
                    <input
                      id="numeroDocumento"
                      type="text"
                      name="numeroDocumento"
                      className="validate"
                      value={numeroDocumento}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-action center">
              <div className="row">
                <div className="col s12">
                  <button type="submit" className="btn btn-large">
                    Registrar
                  </button>
                </div>
                <div className="col s12" style={{ marginTop: 10 }}>
                  <Link to={"/"} className="btn btn-large">
                    Si tengo cuenta
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Por el momento no está disponible
              <i className="material-icons right">close</i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
