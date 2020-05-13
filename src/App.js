import React from 'react';
import logo from './logo.svg';
import './App.css';
//boostrap
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
//Paginas
import Home from "./Home";
import Admin from "./Admin";
import Login from "./Login";
import Formulario_inscripcion from "./Formulario_inscripcion";
import Perfil_usuario from "./Perfil_usuario";
import Productos from "./Productos";
import Producto from "./Producto";
import {Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header >
        {/*Barra de navegacion*/}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <img src={require("./img/logo.png")} style={{width:100, marginTop: -7}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Productos">Productos</Nav.Link>
            </Nav>
            <Form inline>
              <NavDropdown title="Login" id="basic-nav-dropdown" style={{left: '-60px;'}}>
                <NavDropdown.Item href="/Login">Usuario</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Formulario_inscripcion">Nuevo Usuario</NavDropdown.Item>
              </NavDropdown>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        {/*Fin barra de navegacion*/}
      </header>

      {/*Rutas*/}
      <Route exact path="/" component={Home} />
      <Route exact path="/Admin" component={Admin} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Formulario_inscripcion" component={Formulario_inscripcion} />
      <Route exact path="/Perfil_usuario" component={Perfil_usuario} />
      <Route exact path="/Productos" component={Productos} />
    </div>
  );
}

export default App;
