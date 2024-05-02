import React, { useEffect, useState } from 'react'
import APIInvoke from '../../utils/APIInvoke';
import Navbar from '../../componentes/Navbar';
import { Link } from 'react-router-dom';


const ProveedoresInfo = () => {
    const [proveedores, setProveedores] = useState([]);

    const cargarProveedores = async () => {
        const response = await APIInvoke.invokeGET(`api/proveedor/list`);
        console.log(response);
        setProveedores(response);
    }

    useEffect(() => {
        cargarProveedores();
    }, [])

    const eliminarProveedor = async (e, idProveedor) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`api/proveedor/${idProveedor}`);
        
        if (response.id === idProveedor) {
            alert("Borrado con exito")
            cargarProveedores();
        } else {
            alert("Ha ocurrido un error")
        }

        
    }

    return (
        <div classname="wrapper">
            <Navbar />

            <div>
                <section className="content">
                    {/* Default box */}
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Proveedores &nbsp; <Link to={"/proveedorCrear"} class="btn btn-success w-auto">Nuevo Proveedor</Link></h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>

                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>ciudad</th>
                                        <th>direccion</th>
                                        <th>nombre</th>
                                        <th>telefono</th>
                                        <th>nit</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        proveedores.map(
                                            item =>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.ciudad}</td>
                                                    <td>{item.direccion}</td>
                                                    <td>{item.nombre}</td>
                                                    <td>{item.telefono}</td>
                                                    <td>{item.nit}</td>
                                                    <td>
                                                        <button className="btn btn-primary">Editar</button>&nbsp;
                                                        <button onClick={(e) => eliminarProveedor(e, item.id)} type="button" className="btn btn-danger">Eliminar</button>
                                                    </td>
                                                </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>

                </section>
            </div>


        </div>

    );

}

export default ProveedoresInfo;