import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {withGetScreen} from 'react-getscreen'
import { Grid, Image } from 'semantic-ui-react'


import MenuCentral from './menuCentral.js'
import Footer from './footer.js'

import './styles/ofertaAcademica.css'

import Carreras from './carrerasData.js'



class CarreraItem extends Component{

  constructor(props){
    super(props);
    this.state={

    }

    this.clickImage = this.clickImage.bind(this);
  }

  clickImage(){

    var perfilEgresoLocal = this.props.perfil
    var perfilEgresoLocalString = JSON.stringify(perfilEgresoLocal)
    var cacheData = {portada:this.props.portada, youtube:this.props.youtube, campus:this.props.campus, objetivo:this.props.objetivo,
                     perfilEgreso:perfilEgresoLocalString, reticula:this.props.reticula, folleto:this.props.folleto}
    var cacheDataString = JSON.stringify(cacheData);

    localStorage.setItem("carrera", cacheDataString);

  }


  render(){

    const newTo = {
      pathname: "/Carrera/"+this.props.nombre,
    };


    return(

        <a target="_blank" href={this.props.link}>
          <img onClick={this.clickImage} className="img-ItemCarrera" src={this.props.card}/>
        </a>

    );
  }
}




class OfertaAcademica extends Component{

  constructor(props){
    super(props);
    this.state={
      carrerasArray:null,
    }
  }

  componentWillMount(){
    var carrerasArrayVar = Carreras();
    this.setState({
      carrerasArray:carrerasArrayVar,
    })
  }


  render(){
    return(
      <div className="div-principal-ofertaAcademica">

        <MenuCentral/>
        <img className="img-ofertaAcademica-portada" src={'http://tecmm.edu.mx/imagesReact/images/ofertaAcademicaNueva/portadaOfertaAcademica.jpg'}/>
        <div className="div-carreras">

          {this.state.carrerasArray.map((it, key)=>(
            <CarreraItem keyIdenty={key} nombre={it.name} link={it.link} card={it.card} portada={it.portada} youtube={it.youtube} objetivo={it.objetivo} perfil={it.perfilEgreso} reticula={it.reticula} folleto={it.folleto} campus={it.campus}/>
          ))}
          
        </div>
        <Footer/>
      </div>
    );
  }
}


const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(OfertaAcademica, options);
