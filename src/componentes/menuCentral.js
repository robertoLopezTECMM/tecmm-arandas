import React, { Component } from 'react';
import { Menu } from 'grommet';


import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'

import './styles/menuCentral.css';

class MenuCentral extends Component {

  constructor(){
    super();
    this.state={
      width:0
    }
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu(e){
    this.setState({
      width:"80%"
    })
  }

  closeMenu(e){
    this.setState({
      width:"0px"
    })
  }

  render(){
    const options = [
      { key: 1, text: 'Quienés Somos', value: "http://arandas.tecmm.edu.mx/imagenes/header-menuCentral.jpg" },
      { key: 2, text: 'Rectoria', value: 2 },
      { key: 3, text: 'Bienvenida', value: 1 },
      { key: 4, text: 'Modelo Académico', value: 2 },
    ]

    const styleDrawer = {
      width:this.state.width
    }

    return(
      <div className="div-principalMenuCentral">

        {/*MENU MOVIL*/}
          <div style={styleDrawer} id="mySidenav" class="sidenav">
            <img class="tecmmicon" src="http://tecmm.edu.mx/imagesReact/images/logo-tecmm-blanco.png"/>
            <a class="closebtn" onClick={this.closeMenu.bind(this)}><i class="times icon"></i></a>
            <a>
              SOMOS TECMM
              <ul>
                <li>
                  <a href="http://tecmm.edu.mx/quienesSomos">Quienés Somos</a>
                </li>

                <li>
                  <a href="http://tecmm.edu.mx/rectoria">Rectoria</a>
                </li>

                <li>
                  <a href="http://tecmm.edu.mx/bienvenida">Bienvenida</a>
                </li>

                <li>
                  <a href="http://tecmm.edu.mx/modeloAcademico">Modelo Académico</a>
                </li>
              </ul>
            </a>

            <a href="http://controlescolar.tecmm.edu.mx">ADMISIÓN</a>
            <a href="http://tecmm.edu.mx/vidaEstudiantil">VIDA ESTUDIANTIL</a>
            <a href="http://vinculacion.tecmm.edu.mx/">VINCULACIÓN</a>
            <a href="http://www.areaacademica.tecmm.edu.mx/">ÁREA ACADÉMICA</a>
            <a href="http://tecmm.edu.mx/contacto">CONTACTO</a>
            <a href="http://tecmm.edu.mx/igualdad">SGIG</a>
            <a href="http://tecmm.edu.mx/quejasYdenuncias">QUEJAS Y DENUNCIAS</a>
          </div>
          <span className="span-menuMovilButton" onClick={this.openMenu.bind(this)}>&#9776;</span>
        {/*MENU MOVIL*/}

        {/*MENU CENTRAL ESCRITORIO*/}

        <div className="div-menuGobMx">
          <img src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"/>

          <div className="div-linksMenuGobMx">

            <ul>
              <li> <a target="_blank" href="https://www.gob.mx/gobierno">Gobierno</a> </li>
              <li> <a target="_blank" href="https://www.participa.gob.mx/">Participa</a> </li>
              <li> <a target="_blank" href="https://datos.gob.mx/">Datos</a> </li>
              <li> <a target="_blank" href="https://www.gob.mx/gobierno"><i class="search icon"></i></a> </li>
            </ul>

          </div>

        </div>
        <a href="/">
          <img className="img-menuCentral-header" src="http://arandas.tecmm.edu.mx/imagenes/banner-tecmm.webp"/>
        </a>
        <img className="img-menuCentral-nombre" src="http://arandas.tecmm.edu.mx/imagenes/arandas.png"/>

        <Nav id="menuCentralBootstrap" variant="pills" activeKey="1">
          <Dropdown>
            <Dropdown.Toggle id="dropdownBootstrap">SOMOS TECMM</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="http://tecmm.edu.mx/quienesSomos" id="dropdownItemBootstrap">Quienés Somos</Dropdown.Item>
              <Dropdown.Item href="http://tecmm.edu.mx/rectoria" id="dropdownItemBootstrap">Rectoria</Dropdown.Item>
              <Dropdown.Item href="http://tecmm.edu.mx/modeloAcademico" id="dropdownItemBootstrap">Modelo Académico</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Item id="navItemBootstrap">
            <Nav.Link id="navLinkBootstrap" href="http://controlescolar.tecmm.edu.mx">
              ADMISIÓN
            </Nav.Link>
          </Nav.Item>
          <Nav.Item id="navItemBootstrap">
            <Nav.Link id="http://tecmm.edu.mx/vidaEstudiantil">
              VIDA ESTUDIANTIL
            </Nav.Link>
          </Nav.Item>
          <Nav.Item id="navItemBootstrap">
            <Nav.Link id="navLinkBootstrap" href="http://tecmm.edu.mx/enConstruccion">
              VINCULACIÓN
            </Nav.Link>
          </Nav.Item>
          <Nav.Item id="navItemBootstrap">
            <Nav.Link id="navLinkBootstrap" href="http://tecmm.edu.mx/enConstruccion">
              ÁREA ACADÉMICA
            </Nav.Link>
          </Nav.Item>
          <Nav.Item id="navItemBootstrap">
            <Nav.Link id="navLinkBootstrap" href="http://tecmm.edu.mx/contacto">
              CONTACTO
            </Nav.Link>
          </Nav.Item>
          <Nav.Item id="navItemBootstrap">
            <Nav.Link id="navLinkBootstrap" href="http://tecmm.edu.mx/igualdad">
              SGIG
            </Nav.Link>
          </Nav.Item>
          <Nav.Item id="navItemBootstrap">
            <Nav.Link id="navLinkBootstrap" href="http://tecmm.edu.mx/quejasYDenuncias">
              QUEJAS Y DENUNCIAS
            </Nav.Link>
          </Nav.Item>
        </Nav>


      </div>
    );
  }
}

export default MenuCentral;
