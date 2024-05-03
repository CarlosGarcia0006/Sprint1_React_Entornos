import React, { useEffect, useState } from 'react'
import APIInvoke from '../../utils/APIInvoke';
import Navbar from '../../componentes/Navbar';
import { Link } from 'react-router-dom';


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

    const eliminarUsuario = async (e, idUsuario) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`api/usuarios/${idUsuario}`);
        
        if (response.id === idUsuario) {
            alert("Borrado con exito")
            cargarUsuarios();
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
                                                    <td>
                                                    <Link to={`/editarUsuario/${item.id}`} className="btn btn-primary">Editar</Link>&nbsp;
                                                        <button onClick={(e) => eliminarUsuario(e, item.id)} type="button" className="btn btn-danger">Eliminar</button>
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

export default UsuariosInfo;