import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

import "../../assets/css/login.css";
import "../../assets/css/style.css";

const Login = () => {
  //para redireccionar de un componente a otro
  const navigate = useNavigate();

  //definimos el estado inicial de las variables
  const [usuario, setUsuario] = useState({
    nombreUsuario: "",
    password: "",
  });

  const { nombreUsuario, password } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  /*useEffect(() => {
    document.getElementById("nombreUsuario").focus();
  }, []);*/

  const Login = async () => {
    if (password.length < 3) {
      const msg = "La contraseña debe ser al menos de 6 caracteres.";
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
        nombreUsuario: usuario.nombreUsuario,
        password: usuario.password
      }

      
      const response = await APIInvoke.invokePOST(`api/usuarios/login`, data);
      const mensaje = response.Mensaje;

      console.log(response)

      if (
        mensaje === "Alerta:Usuario o Password incorrectos"
      ) {
        const msg =
          "No fue posible iniciar la sesión verifique los datos ingresados.";
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
        //obtenemos el token de acceso jwt
        const jwt = response.token;

        //guardamos el token en el localstorage
        localStorage.setItem("token", jwt);

        //redireccionamos al home la pagina principal
        navigate("/home");
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Login();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <form onSubmit={onSubmit}>
              <div className="card-content center">
                <span className="card-title">INICIAR SESION</span>&nbsp;
                <div className="row">
                  <div className="input-field col s12 m12">
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
                  <div className="input-field col s12 m12">
                  <label htmlFor="icon_pass">Contraseña</label>
                    <input
                      id="icon_pass"
                      type="text"
                      name="password"
                      className="validate"
                      value={password}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="card-action center">
                <div className="row">
                  <div className="col s12 m6">
                    <button type="submit" className="btn btn-large">
                      Ingresar
                    </button>
                  </div>
                  <div className="col s12 m6" style={{ marginTop: 10 }}>
                    <Link
                      to={"/registro"}
                      type="button"
                      className="btn btn-large"
                    >
                      REGISTRATE
                    </Link>
                  </div>
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
