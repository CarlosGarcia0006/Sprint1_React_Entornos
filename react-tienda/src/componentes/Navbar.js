import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <Link to={"/home"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span className="fs-4">Website</span>
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/usuarios"} style={{ marginLeft: 10, border: 'none' }} className="btn btn-outline-light" target="myFrame">Usuarios</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/proveedores"} style={{ marginLeft: 10, border: 'none' }} className="btn btn-outline-light" target="myFrame">Clientes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"#"} style={{ marginLeft: 10, border: 'none' }} className="btn btn-outline-light"target="myFrame">Proveedores</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );

}

export default Navbar;

