import React, { useState, useEffect } from 'react'
import Navbar from '../../componentes/Navbar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';

const EditProveedor = () => {

    const navigate = useNavigate();

    const { idProveedor } = useParams();

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

    const cargarProveedor = async () => {
        const response = await APIInvoke.invokeGET(`api/proveedor/list/${idProveedor}`);
        setProveedor(response);
    }

    useEffect(() => {
        cargarProveedor();
    }, [])

    const EditarProveedor = async () => {

        const data = {
            id: proveedor.id,
            ciudad: proveedor.ciudad,
            direccion: proveedor.direccion,
            nombre: proveedor.nombre,
            telefono: proveedor.telefono,
            nit: proveedor.nit
        }

        const response = await APIInvoke.invokePUT(`api/proveedor/`, data);

        if(response.id === proveedor.id) {
            alert("Proveedor editado correctamente")
        }else{
            alert("Ha ocurrido un error")
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        EditarProveedor();
        navigate("/proveedores")
    }

    return (

        <section className="container">
            <Navbar />

            <div className="row align-items-center mb-4">
                <span className="fw-bold w-auto">Editar proveedor</span>
            </div>
            <div className="divider" />
            <div className="row">
                 
                <form onSubmit={onSubmit}>
                <div className="mb-3">
                        <label htmlFor="proveedor-id">Id</label>
                        <input type="text" className="form-control" id="proveedor-id" name="proveedor-id" placeholder= {idProveedor} readOnly />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nit">Documento</label>
                        <input value={nit} onChange={onChange} required type="text" className="form-control" id="nit" name="nit" placeholder= {proveedor.nit}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input value={nombre} onChange={onChange} type="text" className="form-control" id="nombre" name="nombre" placeholder= {proveedor.nombre}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ciudad">Ciudad</label>
                        <input value={ciudad} onChange={onChange} type="text" className="form-control" id="ciudad" name="ciudad" placeholder= {proveedor.ciudad}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Número Telefónico</label>
                        <input value={telefono} onChange={onChange} type="number" className="form-control" id="telefono" name="telefono" placeholder= {proveedor.telefono}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccion" className="form-label">Dirección</label>
                        <input value={direccion} onChange={onChange} type="text" className="form-control" id="direccion" name="direccion" placeholder= {proveedor.direccion}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button> &nbsp;
                    <Link to={"/proveedores"} className="btn btn-danger" >
                        <span>Regresar</span>
                    </Link>
                </form>
                
            </div>
        </section>

    );

}

export default EditProveedor;