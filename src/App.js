import './App.css';
import React from "react";
import { Route, BrowserRouter as Router, Routes, Link, Outlet } from 'react-router-dom';
 import { Formulario } from './componente/Formulario/Formulario.jsx';
 import { Principal}  from './componente/principal/Principal.jsx';
 import { Catalogo } from './componente/Catalogo/Catalogo.jsx';
import { Item } from './componente/Item/Item.jsx';
import NavBar from './componente/NavBar.jsx';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {   CiShoppingCart, CiHome, CiLogin} from "react-icons/ci";
import { Usuario } from './componente/Usuario/Usuario.jsx';
import { FaCircleUser } from "react-icons/fa6";
import {Carrito} from './componente/Carrito/Carrito.jsx'


function NotFound() {
  return (
      <div>
          <h2>404 Not Found</h2>
          <p>Sorry, the page you are looking for does not exist.</p>
      </div>
  );
}

// function Bienvenida() {
//   return (
   
//   );
// }


function App() {
  return (
      <Router>
          <Navbar bg="light" expand="lg">
              <Navbar.Brand>
                  <h1 style={{ color: "green" }}> <Nav.Link as={Link} to="/Bienvenida"></Nav.Link>Catalogo de compra</h1>
              </Navbar.Brand>
              <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Que buscas hoy?</InputGroup.Text>
        <Form.Control
          placeholder="Buscar"
          aria-label="Buscar"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                      <Nav.Link as={Link} to="/Principal" exact>
                      <CiHome /> Home  </Nav.Link>

                     
                      <Nav.Link as={Link} to="/Carrito">
                      <CiShoppingCart/>Carrito </Nav.Link>

                      
                      <Nav.Link as={Link} to="/Usuario" className="nav-link">
                      <FaCircleUser /> Usuario </Nav.Link>
                       
                        <Nav.Link as={Link} to="/Formulario">
                      <CiLogin />Login </Nav.Link>
                      
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
          <div className="container mt-4">
              <Routes>
                  <Route path="/" element={<Outlet />}>
                      <Route index element={<Catalogo/>} />
                      <Route path='/Formulario' element={<Formulario />} />
                      <Route path='/Principal' element={<Principal />} />
                      {/* <Route path='/Catalogo' element={<Catalogo />} /> */}
                      <Route path='/Item' element={<Item />} />
                      <Route path='/Usuario' element={<Usuario />} />
                      <Route path='/Carrito' element={<Carrito />} />
                      <Route path="*" element={<NotFound />} />
                  </Route>
              </Routes>
          </div>
      </Router>
  );

}




export default App;
