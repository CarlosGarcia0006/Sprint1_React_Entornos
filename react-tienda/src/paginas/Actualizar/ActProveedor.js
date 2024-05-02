import React from 'react'
import Navbar from '../../componentes/Navbar';

const ActProveedor = () => {
    return (

        <section className="container">
            <Navbar />

            <div className="row align-items-center mb-4">
                <span className="fw-bold w-auto">Formulario de Proveedores</span>
            </div>
            <div className="divider" />
            <div className="row">
                <form id="form-usuario" className="mt-4" action onsubmit method="POST">
                    <div className="mb-3">
                        <label htmlFor="proveedor-id">Id</label>
                        <input type="text" className="form-control" id="proveedor-id" name="proveedor-id" readOnly />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="proveedor-nit">Documento</label>
                        <input type="text" className="form-control" id="proveedor-nit" name="proveedor-nit" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="proveedor-nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="proveedor-nombre" name="proveedor-nombre" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="proveedor-ciudad">Ciudad</label>
                        <input type="text" className="form-control" id="proveedor-ciudad" name="proveedor-ciudad" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="proveedor-telefono" className="form-label">Número Telefónico</label>
                        <input type="number" className="form-control" id="proveedor-telefono" name="proveedor-telefono" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="proveedor-direccion" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="proveedor-direccion" name="proveedor-direccion" />
                    </div>
                    <button type="button" className="btn btn-primary" onclick="saveProveedor()">Guardar</button>
                </form>
            </div>
        </section>

    );

}

export default ActProveedor;