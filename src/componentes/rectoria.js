import React, { Component } from 'react';
import { Menu } from 'grommet';
import { Dropdown } from 'semantic-ui-react'
import MenuCentral from './menuCentral.js'
import Footer from './footer.js'

import './styles/rectoria.css';

class RectoriaItem extends Component{
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return(
      <div id="card-rectoriaItem" class="card">
        <div class="image">
          <img src={this.props.image}/>
        </div>
        <div class="content">
          <div id="nombre" class="header">{this.props.nombre}</div>
          <div class="meta">
            <a id="puesto">{this.props.cargo}</a>
          </div>
          <div id="correo" class="description">
            <i class="envelope icon"></i>
            <a target="_blank" href={this.props.mailTo}>{this.props.correo}</a>
          </div>
        </div>
        <div id="contacto" class="extra content">
          <span>
            <i class="phone icon"></i>
            {this.props.telefono}
          </span>
        </div>
      </div>
    );
  }
}

class Rectoria extends Component {

  constructor(){
    super();
    this.state={
      directores:[
        {nombre: 'Lic. Jorge Capilla Pacheco', image:"http://tecmm.edu.mx/imagesReact/images/directores/no-foto.jpg", cargo: 'Comisario Publico', telefono:"38-84-94-70 ext. 1035", correo:'jorge.capilla@tecmm.edu.mx', mailTo:'mailto:jorge.capilla@tecmm.edu.mx'},
        {nombre: 'Mtra. María del Carmen Calva Tapia', image:"http://tecmm.edu.mx/imagesReact/images/directores/Carmen-Calva.jpg", cargo: 'Directora de Extension y Vinculacion', telefono:"38-84-94-70 ext. 1035", correo:'carmen.calva@tecmm.edu.mx', mailTo:'mailto:carmen.calva@tecmm.edu.mx'},
        {nombre: 'Mtro. Martín Villaseñor Flores', image:"http://tecmm.edu.mx/imagesReact/images/directores/Martin-Villasenor.jpg", cargo: 'Director de Area Academica, Investigacion e Innovacion', telefono:"38-84-94-70 ext. 1035", correo:'martin.villasenor@tecmm.edu.mx', mailTo:'mailto:martin.villasenor@tecmm.edu.mx'},
        {nombre: 'Dr. Luis Fernando González Aldrete', image:"http://tecmm.edu.mx/imagesReact/images/directores/Luis-Fernando-Gonzalez-Aldrete.jpg", cargo: 'Director de Planeacion y Desarrollo', telefono:"38-84-94-70 ext. 1035", correo:'luisfernando.gonzalez@tecmm.edu.mx', mailTo:'mailto:luisfernando.gonzalez@tecmm.edu.mx'},
        {nombre: 'L.C.P. Ricardo Ramos Dueñas', image:"http://tecmm.edu.mx/imagesReact/images/directores/Lic-Ricardo.jpg", cargo: 'Director de Administracion y Finanzas', telefono:"38-84-94-70 ext. 1035", correo:'ricardo.ramos@tecmm.edu.mx', mailTo:'mailto:ricardo.ramos@tecmm.edu.mx'},
        {nombre: 'Lic. Juan Pablo Cerrillo Hernández', image:"http://tecmm.edu.mx/imagesReact/images/directores/Juan-Pablo-Cerrillo-Hernandez.jpg", cargo: 'Campus Arandas', telefono:"38-84-94-70 ext. 1035", correo:'juan.cerrillo@tecmm.edu.mx', mailTo:'mailto:juan.cerrillo@tecmm.edu.mx'},
        {nombre: 'Mtro. Luis Eduardo Jiménez Herrera', image:"http://tecmm.edu.mx/imagesReact/images/directores/Luis-Eduardo-Jimenez-Herrera.jpg", cargo: 'Campus Chapala', telefono:"38-84-94-70 ext. 1035", correo:'luis.jimenez@tecmm.edu.mx', mailTo:'mailto:luis.jimenez@tecmm.edu.mx'},
        {nombre: 'Ing. Sergio Arturo Martínez Méndez', image:"http://tecmm.edu.mx/imagesReact/images/directores/Sergio-Arturo-Martinez-Mendez.jpg", cargo: 'Campus Cocula', telefono:"38-84-94-70 ext. 1035", correo:'sergio.martinez@tecmm.edu.mx', mailTo:'mailto:sergio.martinez@tecmm.edu.mx'},
        {nombre: 'Mtro. Roberto Durán Michel', image:"http://tecmm.edu.mx/imagesReact/images/directores/Roberto-Duran-Michel.jpg", cargo: 'Campus El Grullo', telefono:"38-84-94-70 ext. 1035", correo:'roberto.duran@tecmm.edu.mx', mailTo:'mailto:roberto.duran@tecmm.edu.mx'},
        {nombre: 'Ing. Gualberto Castro Moreno', image:"http://tecmm.edu.mx/imagesReact/images/directores/Gualberto-Moreno-Castro.jpg", cargo: 'Campus La Huerta', telefono:"38-84-94-70 ext. 1035", correo:'gualberto.castro@tecmm.edu.mx', mailTo:'mailto:gualberto.castro@tecmm.edu.mx'},
        {nombre: 'Dra. Ma. Eugenia Amador Murguía', image:"http://tecmm.edu.mx/imagesReact/images/directores/Maria-Eugenia-Amador-Murguia.jpg", cargo: 'Campus Lagos de Moreno', telefono:"38-84-94-70 ext. 1035", correo:'maria.amador@tecmm.edu.mx', mailTo:'mailto:maria.amador@tecmm.edu.mx'},
        {nombre: 'Mtro. Emmanuel Pablo Saldaña Castillón', image:"http://tecmm.edu.mx/imagesReact/images/directores/Emmanuel-Pablo-Saldana-Castillon.jpg", cargo: 'Campus Mascota', telefono:"38-84-94-70 ext. 1035", correo:'emmanuel.saldana@tecmm.edu.mx', mailTo:'mailto:emmanuel.saldana@tecmm.edu.mx'},
        {nombre: 'Dr. Ernesto Rosales Castañeda', image:"http://tecmm.edu.mx/imagesReact/images/directores/Ernesto-Rosales-Castaneda.jpg", cargo: 'Campus Tequila', telefono:"38-84-94-70 ext. 1035", correo:'ernesto.rosales@tecmm.edu.mx', mailTo:'mailto:ernesto.rosales@tecmm.edu.mx'},
        {nombre: 'Mtra. Gloria Luz Rodríguez Gil', image:"http://tecmm.edu.mx/imagesReact/images/directores/Gloria-Luz-Rodriguez-Gil.jpg", cargo: 'Campus Tala', telefono:"38-84-94-70 ext. 1035", correo:'gloria.rodriguez@tecmm.edu.mx', mailTo:'mailto:gloria.rodriguez@tecmm.edu.mx'},
        {nombre: 'M.C. Felipe Alfonso Ordoñez García', image:"http://tecmm.edu.mx/imagesReact/images/directores/Felipe-Alfonso-Ordonez-Garcia.jpg", cargo: 'Campus Tamazula', telefono:"38-84-94-70 ext. 1035", correo:'alfonso.ordonez@tecmm.edu.mx', mailTo:'mailto:alfonso.ordonez@tecmm.edu.mx'},
        {nombre: 'Mtro. Oscar Daniel Zamora Cuevas', image:"http://tecmm.edu.mx/imagesReact/images/directores/Oscar-Daniel-Zamora-Cuevas.jpg", cargo: 'Campus Puerto Vallarta', telefono:"38-84-94-70 ext. 1035", correo:'daniel.zamora@tecmm.edu.mx', mailTo:'mailto:daniel.zamora@tecmm.edu.mx'},
        {nombre: 'Dr. Juan Antonio González Arechiga Ramírez Wiella', image:"http://tecmm.edu.mx/imagesReact/images/directores/Juan-Antonio-Gonzalez-Arechiga-Ramirez-Wiella.jpg", cargo: 'Campus Zapopan', telefono:"38-84-94-70 ext. 1035", correo:'antonio.gonzalezarechiga@tecmm.edu.mx', mailTo:'mailto:antonio.gonzalezarechiga@tecmm.edu.mx'},
        {nombre: 'Mtro. Héctor Dávalos Tinajero', image:"http://tecmm.edu.mx/imagesReact/images/directores/Hector-Davalos-Tinajero.jpg", cargo: 'Campus Zapotlanejo', telefono:"38-84-94-70 ext. 1035", correo:'hector.davalos@tecmm.edu.mx', mailTo:'mailto:hector.davalos@tecmm.edu.mx'},

      ],
    }
    }



  render(){
    return(
      <div className="div-principalRectoria">
        <MenuCentral/>
        <div className="div-contenedorDirectores">

          <div className="div-director">
            <div id="directores" class="ui link cards">
              <div id="card-director" class="card">
                <div class="image">
                  <img src="http://tecmm.edu.mx/imagesReact/images/directores/no-foto.jpg"/>
                </div>
                <div class="content">
                  <div id="nombre" class="header">DR. Hector Henrique Salgado Ramirez</div>
                  <div class="meta">
                    <a id="puesto">Director General</a>
                  </div>
                  <div class="description">
                    <i class="envelope icon"></i>
                    direccion.general@tecmm.edu.mx.
                  </div>
                </div>
                <div id="contacto" class="extra content">
                  <span>
                    <i class="phone icon"></i>
                    33-12-34-21 ext.1035
                  </span>
                </div>
              </div>

              <div id="card-director" class="card">
                <div class="image">
                  <img src="http://tecmm.edu.mx/imagesReact/images/directores/Hector-Salgado.jpg"/>
                </div>
                <div class="content">
                  <div id="nombre" class="header">DR. Hector Henrique Salgado Ramirez</div>
                  <div class="meta">
                    <a id="puesto">Director General</a>
                  </div>
                  <div class="description">
                    <i class="envelope icon"></i>
                    direccion.general@tecmm.edu.mx.
                  </div>
                </div>
                <div id="contacto" class="extra content">
                  <span>
                    <i class="phone icon"></i>
                    33-12-34-21 ext.1035
                  </span>
                </div>
              </div>

            </div>

          </div>

          <div class="ui link cards">
            {this.state.directores.map((it)=>(
              <RectoriaItem image={it.image} nombre={it.nombre} cargo={it.cargo} correo={it.correo} mailTo={it.mailTo} telefono={it.telefono} />
            ))}
          </div>

        </div>
        <Footer/>
      </div>
    );
  }
}

export default Rectoria;
