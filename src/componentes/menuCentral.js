import React, { Component } from 'react';
import { Menu } from 'grommet';
import { Dropdown } from 'semantic-ui-react'


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
        <a href="/">
          <img className="img-menuCentral-header" src="http://arandas.tecmm.edu.mx/imagenes/header-menuCentral.jpg"/>
        </a>
        <img className="img-menuCentral-nombre" src="http://arandas.tecmm.edu.mx/imagenes/arandas.png"/>

        <div className="menuCentral">

          <a>
            <div class="dropdown">
              <span>SOMOS TECMM <i class="angle down icon"></i></span>
              <div class="dropdown-content">
                <a href="http://tecmm.edu.mx/quienesSomos">Quienés Somos</a>
                <a href="http://tecmm.edu.mx/rectoria">Rectoria</a>
                <a href="http://tecmm.edu.mx/bienvenida">Bienvenida</a>
                <a href="http://tecmm.edu.mx/modeloAcademico">Modelo Académico</a>
              </div>
            </div>
          </a>

          <a href="http://controlescolar.tecmm.edu.mx">ADMISIÓN</a>
          <a href="http://tecmm.edu.mx/vidaEstudiantil">VIDA ESTUDIANTIL</a>
          <a href="http://vinculacion.tecmm.edu.mx/">VINCULACIÓN</a>
          <a href="http://www.areaacademica.tecmm.edu.mx/">ÁREA ACADÉMICA</a>
          <a href="http://tecmm.edu.mx/contacto">CONTACTO</a>
          <a href="http://tecmm.edu.mx/igualdad">SGIG</a>
          <a href="http://tecmm.edu.mx/quejasYdenuncias">QUEJAS Y DENUNCIAS</a>

        </div>
      </div>
    );
  }
}

export default MenuCentral;
