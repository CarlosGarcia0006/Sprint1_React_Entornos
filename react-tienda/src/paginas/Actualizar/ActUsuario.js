import React from 'react'
import Navbar from '../../componentes/Navbar';

const ActUsuario = () => {
    return (
        <section className="container">
            <Navbar/>

            <div className="row align-items-center mb-4">
                <span className="fw-bold w-auto">Formulario de Usuarios</span>
            </div>
            <div className="divider" />
            <div className="row">
                <form id="form-usuario" className="mt-4" action onsubmit method="POST">
                    <input type="hidden" id="idusuario" />
                    <div className="mb-3">
                        <label htmlFor="usuario-id">Id</label>
                        <input type="text" className="form-control" id="usuario-id" name="usuario-id" readOnly />
                    </div>
                    <div className="mb-3">
                        <div className="form-group">
                            <label htmlFor="usuario-tipodocumento">Tipo Documento :</label>
                            <select id="usuario-tipodocumento" name="usuario-tipodocumento" className="form-select">
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="usuario-documento">Documento</label>
                            <input type="text" className="form-control" id="usuario-documento" name="usuario-documento" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="usuario-nombres" className="form-label">Nombres</label>
                            <input type="text" className="form-control" id="usuario-nombres" name="usuario-nombres" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="usuario-nombreusuario">Usuario</label>
                            <input type="text" className="form-control" id="usuario-nombreusuario" name="usuario-nombreusuario" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="usuario-email" className="form-label">Correo Electrónico</label>
                            <input type="email" className="form-control" id="usuario-email" name="usuario-email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="usuario-password" className="form-label">Clave</label>
                            <input type="password" className="form-control" id="usuario-password" name="usuario-password" />
                        </div>
                        <button type="button" className="btn btn-primary" onclick="saveUsuario()">Guardar</button>
                    </div></form>
            </div></section>

    );
}
export default ActUsuario;