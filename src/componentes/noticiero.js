import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'
import ItemsCarousel from 'react-items-carousel';
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import axios from 'axios';

import './styles/noticiero.css';

class Noticiero extends Component {

  constructor(){
    super();
    this.state={
      selected : 0,
      noticiasArray : [],
      showProgress:"block"
    }
  }

  componentWillMount(){

    var noticiasLocal
    var objConverted
    var noticiasFinal = []
    var counterSize

    const url = 'https://tecmm.edu.mx/dashboard_conexion_db.php'
    axios.get(url).then(response => response.data)
    .then((data) => {
      noticiasLocal=data
      counterSize=noticiasLocal.length

      for(var i=counterSize-1; i>=0;){

        objConverted={
          titulo:noticiasLocal[i].titulo,
          pathTitulo:noticiasLocal[i].pathTitulo,
          imagen:noticiasLocal[i].imagen,
          imagenesExtra:JSON.parse(noticiasLocal[i].imagenesExtra),
          contenido:JSON.parse(noticiasLocal[i].contenido)
        }

        //console.log("objeto convertido: ", objConverted)
        noticiasFinal.push(objConverted)

        this.setState({
        noticiasArray: noticiasFinal,
        showProgress:"none"
        })
        i--
      }

      console.log("arreglo final: ", this.state.noticiasArray)


     })
  }



  render() {


      if(this.props.isMobile() || this.props.isTablet()){
        const settings = {
          dots:false,
          infinite: true,
          speed: 900,
          slidesToShow: 2,
          slidesToScroll: 2
        };

     return (
       <div className="div-principalNoticiero">
         <h2>NOTICIAS TECMM</h2>
         <Slider  {...settings}>
           {this.state.noticiasArray.map((it)=>(
             <div className="div-noticiaItem">
              <img src={it.imagen}/>
              <div className="div-tituloNoticia">{it.titulo}</div>
             </div>
           ))}
         </Slider>
       </div>
     );

      }else{
        const settings = {
          dots:false,
          infinite: true,
          speed: 900,
          slidesToShow: 4,
          slidesToScroll: 2
        };

        return (
          <div className="div-principalNoticiero">
            <h2>NOTICIAS TECMM</h2>
            <Slider  {...settings}>
              {this.state.noticiasArray.map((it)=>(
                <div className="div-noticiaItem">
                 <img src={it.imagen}/>
                 <div className="div-tituloNoticia">{it.titulo}</div>
                </div>
              ))}
            </Slider>
          </div>
        );
      }
   }
 }


const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(Noticiero, options);
