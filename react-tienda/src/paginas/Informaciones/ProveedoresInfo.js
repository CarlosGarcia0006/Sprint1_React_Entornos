import React, { useEffect, useState } from 'react'
import APIInvoke from '../../utils/APIInvoke';
import Navbar from '../../componentes/Navbar';


const ProveedoresInfo = () => {
    const [usuarios, setUsuarios] = useState([]);

    const cargarUsuarios = async () => {
        const response = await APIInvoke.invokeGET(`api/proveedor/list`);
        console.log(response);
        setUsuarios(response);
    }

    useEffect(() => {
        cargarUsuarios();
    }, [])

    return (
        <div classname="wrapper">
            <Navbar />

            <div>
                <section className="content">
                    {/* Default box */}
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Proveedores</h3>
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
                                        usuarios.map(
                                            item =>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.ciudad}</td>
                                                    <td>{item.direccion}</td>
                                                    <td>{item.nombre}</td>
                                                    <td>{item.telefono}</td>
                                                    <td>{item.nit}</td>
                                                    <td><button>Editar</button><button>Eliminar</button></td>
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