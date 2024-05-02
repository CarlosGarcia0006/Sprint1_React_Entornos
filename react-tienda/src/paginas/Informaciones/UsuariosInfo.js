import React, { useEffect, useState } from 'react'
import APIInvoke from '../../utils/APIInvoke';
import Navbar from '../../componentes/Navbar';


const UsuariosInfo = () => {
    const [usuarios, setUsuarios] = useState([]);

    const cargarUsuarios = async () => {
        const response = await APIInvoke.invokeGET(`api/usuarios/list`);
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
                            <h3 className="card-title">Usuarios</h3>
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
                                        <th>numeroDocumento</th>
                                        <th>email</th>
                                        <th>nombre</th>
                                        <th>password</th>
                                        <th>nombreUsuario</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        usuarios.map(
                                            item =>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.numeroDocumento}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.nombre}</td>
                                                    <td>{item.password}</td>
                                                    <td>{item.nombreUsuario}</td>
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

export default UsuariosInfo;