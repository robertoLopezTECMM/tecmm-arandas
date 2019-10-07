
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import './styles/carousel.css';


  class CarouselItem extends Component{

    constructor(props){
      super();
    }


    render(){
      return(
        <div>
          <a href={this.props.link}>
            <div style={{width:"100%", height:"100%"}}>
              <img style={{height:"100%"}}  src={this.props.image}/>
            </div>
          </a>
        </div>
      );
    }
  }


  class CarouselComponent extends Component {


    constructor(props){
      super();
      this.state={
        modalVisible : false,
        carouselImages:[
          {image: 'http://tecmm.edu.mx/imagesReact/images/carousel/enneit.jpg', name: 'http://tecmm.edu.mx/imagesReact/images/carousel/enneit.jpg', description:'ahorita no joven', link:'http://tecmm.edu.mx/#/eneit'},
          {image: 'http://tecmm.edu.mx/imagesReact/images/carousel/convocatoria-video-2019.jpg', name: 'http://tecmm.edu.mx/imagesReact/images/carousel/enneit.jpg', description:'ahorita no joven', link:'http://tecmm.edu.mx/imagesReact/images/carousel/documentos/convocatoria-video-2019.pdf'},
          //{image: 'http://tecmm.edu.mx/imagesReact/images/carousel/CONDONACIONES-2019-2020.jpg', name: 'http://tecmm.edu.mx/imagesReact/images/carousel/CONDONACIONES-2019-2020.jpg', description:'ahorita no joven', link:'http://tecmm.edu.mx/imagesReact/images/carousel/documentos/CONDONACIONES-2019-2020.pdf'},
          //{image: 'http://tecmm.edu.mx/imagesReact/images/carousel/SEGUNDO-EXAMEN-2019.jpg', name: 'http://tecmm.edu.mx/imagesReact/images/carousel/SEGUNDO-EXAMEN-2019.jpg', description:'ahorita no joven', link:'http://tecmm.edu.mx/imagesReact/images/carousel/documentos/SEGUNDO-EXAMEN-2019.pdf'},
          //{image: 'http://tecmm.edu.mx/imagesReact/images/carousel/SEGUNDO-EXAMEN-EN-LINEA.jpg', name: 'http://tecmm.edu.mx/imagesReact/images/carousel/SEGUNDO-EXAMEN-EN-LINEA.jpg', description:'ahorita no joven', link:'http://tecmm.edu.mx/imagesReact/images/carousel/documentos/SEGUNDO-EXAMEN-EN-LINEA.pdf'},

          //{image: 'http://tecmm.edu.mx/imagesReact/images/carousel/inscripciones-abiertas.jpg', name: 'http://tecmm.edu.mx/imagesReact/images/carousel/inscripciones-abiertas.jpg', description:'ahorita no joven', link:'http://controlescolar.tecmm.edu.mx'},
          {image: 'http://tecmm.edu.mx/imagesReact/images/carousel/cover_5_aniv.png', name: 'http://tecmm.edu.mx/imagesReact/images/carousel/inscripciones-abiertas.jpg', description:'ahorita no joven', link:'https://www.tecnm.mx/'},
          //{image: 'http://tecmm.edu.mx/imagesReact/images/carousel/Aceptados.jpg', name: 'http://tecmm.edu.mx/imagesReact/images/carousel/inscripciones-abiertas.jpg', description:'ahorita no joven', link:'http://tecmm.edu.mx/documentos/lista-aceptados-semestreB-2019/ACEPTADOS_TECMM_2019.pdf'},
          //{image: 'http://tecmm.edu.mx/imagesReact/images/carousel/Aceptados%20Modalidad%20en%20L%c3%adnea%20Banner.jpg', name: 'http://tecmm.edu.mx/imagesReact/images/carousel/inscripciones-abiertas.jpg', description:'ahorita no joven', link:'http://tecmm.edu.mx/documentos/lista-aceptados-semestreB-2019/Aceptados-en-Linea.pdf'},
        ],
      }
    }


    render(){
      return(

        <div className="div-principal-carouselComponent">

          <div className="div-carousel-carouselComponent">
            <Carousel
              width="100%"
              showIndicators={false}
              showStatus={false}
              showArrows={true}
              showThumbs={false}
              autoPlay
              infiniteLoop
              emulateTouch
              >

                {this.state.carouselImages.map((it)=>(
                  <CarouselItem link={it.link} image={it.image} name={it.name} />
                ))}

            </Carousel>

            <div class="ui stackable four column grid">
              <a href="/ofertaAcademica">
                <button  className="btn1Oferta">OFERTA<br/>ACADÉMICA</button>
              </a>

              <a href="http://tecmm.edu.mx/#/campus">
                <button className="btn2Campus">RED DE CAMPUS<br/>EN JALISCO</button>
              </a>

              <a href="http://controlescolar.tecmm.edu.mx/">
                <button className="btn3Escolares">SERVICIOS<br/>ESCOLARES</button>
              </a>

            </div>

          </div>

        </div>
      );
    }
  }

export default CarouselComponent;
