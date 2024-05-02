import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './paginas/auth/Login';
import Home from './paginas/Home';
import UsuariosInfo from './paginas/Informaciones/UsuariosInfo';
import ProveedoresInfo from './paginas/Informaciones/ProveedoresInfo';
import ActProveedor from './paginas/Actualizar/ActProveedor';
import ActUsuario from './paginas/Actualizar/ActUsuario';
import CrearProveedor from './paginas/Actualizar/CrearProveedor';


function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/home' exact element={<Home/>}/>
          <Route path='/usuarios' exact element={<UsuariosInfo/>}/>
          <Route path='/proveedores' exact element={<ProveedoresInfo/>}/>
          <Route path='/proveedorCrear' exact element={<CrearProveedor/>}/>
          <Route path='/proveedorActualizar' exact element={<ActProveedor/>}/>
          <Route path='/usuarioActualizar' exact element={<ActUsuario/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
