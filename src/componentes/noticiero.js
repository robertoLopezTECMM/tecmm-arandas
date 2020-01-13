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

    const url = 'https://dashboard.tecmm.edu.mx/dashboardScript.php'
    axios.get(url, {params:{action:"getNoticias"}}).then(response => response.data)
    .then((data) => {
      var noticiasFinal=[]

      for(var i=data.length-1; i>=0;){

        noticiasFinal.push(data[i])

        this.setState({ noticiasArray: noticiasFinal })

        i--
      }
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
              <img src={it.imagenPrincipal}/>
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
                 <img src={it.imagenPrincipal}/>
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
