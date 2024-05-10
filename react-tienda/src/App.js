import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './paginas/auth/Login';
import Home from './paginas/Home';
import UsuariosInfo from './paginas/Informaciones/UsuariosInfo';
import ProveedoresInfo from './paginas/Informaciones/ProveedoresInfo';
import CrearProveedor from './paginas/Actualizar/CrearProveedor';
import EditProveedor from './paginas/Actualizar/EditProveedor';
import EditUsuario from './paginas/Actualizar/EditUsuario';
import Register from './paginas/auth/Register';


function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login/>}/>
          <Route path='/registro' exact element={<Register/>}/>
          <Route path='/home' exact element={<Home/>}/>
          <Route path='/usuarios' exact element={<UsuariosInfo/>}/>
          <Route path='/proveedores' exact element={<ProveedoresInfo/>}/>
          <Route path='/proveedorCrear' exact element={<CrearProveedor/>}/>
          <Route path='/editarProveedor/:idProveedor' exact element={<EditProveedor/>}/>
          <Route path='/editarUsuario/:idUsuario' exact element={<EditUsuario/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
