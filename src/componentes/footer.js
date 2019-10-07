import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/footer.css';



class Footer extends Component{

  constructor(props){
    super();
  }

  render(){
    return(


      <div className="div-principal-linksFooter">

        <div className="listas-linksFooter">

          <div className="lista1-linksFooter">
            <div className="topnav">
              <a href="http://tecmm.edu.mx/patentes">CARTERA TECNOLOGICA</a>
              <a href="https://transparencia.info.jalisco.gob.mx/transparencia/organismo/312">TRANSPARENCIA</a>
              <a href="http://tecmm.edu.mx/calendarios/Calendario%20TecMM%202019-2020.png">CALENDARIO</a>
              <a href="https://www.conacyt.gob.mx/">CONACYT</a>
              <a href="https://sicyt.jalisco.gob.mx/" >SICyT</a>
              <a href="http://tecmm.edu.mx/rectoria">ORGANIGRAMA</a>
              <a href="http://187.174.80.181/compras/">LICITACIONES</a>
              <a href="https://tecnm.occ.com.mx/Bolsa_Trabajo">BOLSA DE TRABAJO</a>
            </div>
          </div>

          <div className="lista2-linksFooter">
            <div className="topnav" >

              <a href="http://tecmm.edu.mx/juntasDeGobierno">JUNTAS DE GOBIERNO</a>
              <a href="http://tecmm.edu.mx/modeloAcademico">MODELO ACADEMICO</a>
              <a href="http://tecmm.edu.mx/quienesSomos">IDENTIDAD</a>
              <a href="http://tecmm.edu.mx">DIRECCIÓN GENERAL</a>
              <a href="http://tecmm.edu.mx/campus" >RED DE CAMPUS</a>
              <a href="http://tecmm.edu.mx/building">NOTICIAS</a>
              <a href="http://tecmm.edu.mx/Contacto">CONTACTO</a>
              <a href="http://tecmm.edu.mx/contraloriaSocial">CONTRALORÍA SOCIAL</a>


            </div>
          </div>

        </div>

        <div className="div-bannerSEP">
          <div className="div-direccion">
            <a>Av. José Guadalupe Tejeda #557</a><br/>
            <a>Arandas, Jalisco.</a><br/>
            <a>01-348-78-32010</a>
          </div>
          <img src='http://tecmm.edu.mx/imagesReact/images/linksFooter/banner-sep.jpg'/>
        </div>

        <div className="div-transformarMexico">
          <img src='http://tecmm.edu.mx/imagesReact/images/linksFooter/Banner%20Verde_Mesa%20de%20trabajo%201%20copia.jpg'/>
        </div>

        <div className="div-bannerSepSinTexto">
          <img  src="http://tecmm.edu.mx/imagesReact/images/linksFooter/banner-sep-sinTexto.jpg"/>
        </div>



        <div className="div-enlaces-gobierno">

          <div className="div-enlaces">

            <h2>Enlaces</h2>
            <ul>
              <li>
                <a href="https://www.gob.mx/accesibilidad">Declaración de accesibilidad</a>
              </li>

              <li>
                <a href="">Aviso de privacidad</a>
              </li>

              <li>
                <a href="https://www.gob.mx/terminos">Términos y condiciones</a>
              </li>

              <li>
                <a href="http://www.ordenjuridico.gob.mx/">Marco jurídico</a>
              </li>

              <li>
                <a href="http://portaltransparencia.gob.mx/buscador/search/search.do?method=begin">Portal de obligaciones y de transparencia</a>
              </li>

              <li>
                <a href="">Sistema infomex</a>
              </li>

              <li>
                <a href="http://inicio.ifai.org.mx/SitePages/ifai.aspx">INAI</a>
              </li>

              <li>
                <a href="https://www.gob.mx/sitemap">Mapa de sitio</a>
              </li>
            </ul>
            <img src="http://tecmm.edu.mx/imagesReact/images/linksFooter/GobMX.png"/>
          </div>

          <div className="div-QueEsGob">
            <h2>¿Qué es gob.mx?</h2>
            <ul>
              <li>
                <a>Es el portal único de trámites,<br/> información y participación ciudadana. </a>
                <a href="https://www.gob.mx/que-es-gobmx" >Leer más</a>
              </li>

              <li>
                <a href="https://www.gob.mx/en/index">English</a>
              </li>

              <li>
                <a href="https://www.gob.mx/temas">Temas</a>
              </li>

              <li>
                <a href="http://reformas.gob.mx/">Reformas</a>
              </li>
            </ul>
          </div>

          <div className="div-Contacto">

            <h2>Contacto</h2>
            <ul>
              <li>
                <a>Ayuda: dudas e información</a><br/>
                <a>gobmx@funcionpublica.gob.mx</a><br/>
              </li>

              <li>
                <a  href="https://www.gob.mx/tramites/ficha/presentacion-de-quejas-y-denuncias-en-la-sfp/SFP54">Denuncia contra servidores públicos</a>
              </li>
            </ul>
          </div>

        </div>

      </div>


    );
  }


}

export default Footer;
