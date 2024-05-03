import React, { useState, useEffect } from 'react'
import Navbar from '../../componentes/Navbar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';

const EditUsuario = () => {

    const navigate = useNavigate();

    const { idUsuario } = useParams();

    const [usuario, setUsuario] = useState({
        id: '',
        idTipoDocumento: '',
        numeroDocumento: '',
        nombre: '',
        password: '',
        nombreUsuario: '',
        email: ''
    });

    const { id, idTipoDocumento , numeroDocumento, nombre, password, nombreUsuario, email} = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const cargarUsuario = async () => {
        const response = await APIInvoke.invokeGET(`api/usuarios/list/${idUsuario}`);
        response.idTipoDocumento = response.idTipoDocumento.id_tipodocumento
        setUsuario(response);
    }

    useEffect(() => {
        cargarUsuario();
    }, [])

    const EditarUsuario = async () => {

        const data = {
            id: usuario.id,
            idTipoDocumento: usuario.idTipoDocumento,
            numeroDocumento: usuario.numeroDocumento,
            nombre: usuario.nombre,
            password: usuario.password,
            nombreUsuario: usuario.nombreUsuario,
            email: usuario.email
        }

        const response = await APIInvoke.invokePUT(`api/usuarios/`, data);

        if(response.id === usuario.id) {
            alert("Usuario editado correctamente")
        }else{
            alert("Ha ocurrido un error")
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        EditarUsuario();
        navigate("/usuarios")
    }

    return (
        <section className="container">
            <Navbar />

            <div className="row align-items-center mb-4">
                <span className="fw-bold w-auto">Editar Usuario</span>
            </div>
            <div className="divider" />
            <div className="row">
                 
                <form onSubmit={onSubmit}>
                <div className="mb-3">
                        <label htmlFor="usuario-id">Id</label>
                        <input type="text" className="form-control" id="usuario-id" name="usuario-id" placeholder= {idUsuario} readOnly />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="idTipoDocumento">Tipo de documento</label>
                        <input value={idTipoDocumento} onChange={onChange} required type="text" className="form-control" id="idTipoDocumento" name="idTipoDocumento" placeholder= {usuario.idTipoDocumento.id_tipodocumento}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="numeroDocumento">Numero de documento</label>
                        <input value={numeroDocumento} onChange={onChange} required type="text" className="form-control" id="numeroDocumento" name="numeroDocumento" placeholder= {usuario.numeroDocumento}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input value={nombre} onChange={onChange} type="text" className="form-control" id="nombre" name="nombre" placeholder= {usuario.nombre}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Contraseña</label>
                        <input value={password} onChange={onChange} type="text" className="form-control" id="password" name="password" placeholder= {usuario.password}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nombreUsuario">Nombre se usuario</label>
                        <input value={nombreUsuario} onChange={onChange} type="text" className="form-control" id="nombreUsuario" name="nombreUsuario" placeholder= {usuario.nombreUsuario}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input value={email} onChange={onChange} type="text" className="form-control" id="email" name="email" placeholder= {usuario.email}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button> &nbsp;
                    <Link to={"/usuarios"} className="btn btn-danger" >
                        <span>Regresar</span>
                    </Link>
                </form>
                
            </div>
        </section>

    );
}

export default EditUsuario;