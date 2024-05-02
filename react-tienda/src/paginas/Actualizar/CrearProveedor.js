import React, { useState } from 'react'
import Navbar from '../../componentes/Navbar';
import { useNavigate } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';

const CrearProveedor = () => {

    const navigate = useNavigate();

    const [proveedor, setProveedor] = useState({
        ciudad: '',
        direccion: '',
        nombre: '',
        telefono: '',
        nit: ''
    });

    const { ciudad, direccion , nombre, telefono, nit } = proveedor;

    const onChange = (e) => {
        setProveedor({
            ...proveedor,
            [e.target.name]: e.target.value
        })
    }

    const nuevoProveedor = async () => {
        const data = {
            ciudad: proveedor.ciudad,
            direccion: proveedor.direccion,
            nombre: proveedor.nombre,
            telefono: proveedor.telefono,
            nit: proveedor.nit
        }

        const response = await APIInvoke.invokePOST(`api/proveedor/`, data);

        const idProveedor = response.id;

        if(idProveedor === ''){
            alert("Ha ocurrido un error al crear un proveedor")
        }else{
            alert("Creacion exitosa")
        }

        setProveedor({
            pNit: '',
            pNombre: '',
            pCiudad: '',
            pTelefono: '',
            pDireccion: ''
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        nuevoProveedor();
    }

    return (
        <section className="container">
            <Navbar />

            <div className="row align-items-center mb-4">
                <span className="fw-bold w-auto">Creacion de Proveedor</span>
            </div>
            <div className="divider" />
            <div className="row">
                
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="proveedor-id">Id</label>
                        <input type="text" className="form-control" id="proveedor-id" name="proveedor-id" readOnly />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nit">Documento</label>
                        <input value={nit} onChange={onChange} required type="text" className="form-control" id="nit" name="nit" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input value={nombre} onChange={onChange} type="text" className="form-control" id="nombre" name="nombre" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ciudad">Ciudad</label>
                        <input value={ciudad} onChange={onChange} type="text" className="form-control" id="ciudad" name="ciudad" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Número Telefónico</label>
                        <input value={telefono} onChange={onChange} type="number" className="form-control" id="telefono" name="telefono" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccion" className="form-label">Dirección</label>
                        <input value={direccion} onChange={onChange} type="text" className="form-control" id="direccion" name="direccion" />
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </div>
        </section>

    );
}
export default CrearProveedor;