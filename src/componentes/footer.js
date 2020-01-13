import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import './styles/footer.css';



class Footer extends Component{

  constructor(props){
    super();
    this.state={
      showModal:false
    }

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }


  show(){
  this.setState({ showModal: true });
  }

  hide() {
    this.setState({ showModal: false });
  }

  render(){
    return(


      <div className="div-principal-linksFooter">

        <Rodal  customStyles={{backgroundImage:"url('http://tecmm.edu.mx/imagesReact/images/aguilaFondo.jpg')", backgroundPosition:"top", backgroundSize:"cover", backgroundRepeat:"no-repeat", overflowY:"scroll"}} width="900" height="600" visible={this.state.showModal} onClose={this.hide.bind(this)}>
          <div className="divModalAccesibilidad">

            <h1>Instalar Extensión ChromeVox</h1>

            <ul>
              <li>
                <h3>Drigirse a la tienda de extensiones de chrome <a target="_blank" href="https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn?hl=es-419">(click aqui)</a></h3>
              </li>

              <li>
                  <h3>Click en el boton "Agregar a Chrome"</h3>
                  <img src="http://tecmm.edu.mx/imagesReact/images/linksFooter/instruccionesChromeVox/agregarAChrome.webp"/>
              </li>

              <li>
                  <h3>Aparecera una ventana de confirmación, dar click al boton "Agregar Extensión"</h3>
                  <img src="http://tecmm.edu.mx/imagesReact/images/linksFooter/instruccionesChromeVox/confirmacionChromeVox.webp"/>
              </li>

              <li>
                <h3>Aparecera el icono de CromeVox en la sección de extensiones de su navegador (esquina superior derecha)</h3>
                <img src="http://tecmm.edu.mx/imagesReact/images/linksFooter/instruccionesChromeVox/iconoChromeVox.webp"/>
              </li>

              <li>
                <h3>Una vez terminada la instalación la extensión comenzara a describir la pagina automaticamente</h3>
              </li>
            </ul>

          </div>
        </Rodal>

        <div className="listas-linksFooter">
          <a class="tag" target="_blank" href="/patentes">PATENTES</a>
          <a class="tag" target="_blank" href="https://transparencia.info.jalisco.gob.mx/transparencia/organismo/312">TRANSPARENCIA</a>
          <a class="tag" target="_blank" href="http://tecmm.edu.mx/calendarios/Calendario%20TecMM%202019-2020.png">CALENDARIO</a>
          <a class="tag" target="_blank" href="/contraloriaSocial">CONTRALORÍA SOCIAL</a>
          <a class="tag" target="_blank" href="https://sicyt.jalisco.gob.mx/" >SICyT</a>
          <a class="tag" target="_blank" href="/rectoria">ORGANIGRAMA</a>
          <a class="tag" target="_blank" href="http://187.174.80.186/compras/">LICITACIONES</a>
          <a class="tag" target="_blank" href="https://tecnm.occ.com.mx/Bolsa_Trabajo">BOLSA DE TRABAJO</a>
          <a class="tag" target="_blank" href="http://tecmm.edu.mx/normatividad">NORMATIVIDAD</a>
          <a class="tag" target="_blank" href="/juntasDeGobierno">JUNTAS DE GOBIERNO</a>
          <a class="tag" target="_blank" href="/modeloAcademico">MODELO ACADÉMICO</a>
          <a class="tag" target="_blank" href="/quienesSomos">IDENTIDAD</a>
          <a class="tag" target="_blank" href="/unidadesAcademicas">UNIDADES ACADÉMICAS</a>
          <a class="tag" target="_blank" href="/eneit">ENEIT 2019</a>
          <a class="tag" target="_blank" href="/Contacto">CONTACTO</a>
          <a class="tag" target="_blank" href="https://www.conacyt.gob.mx/">CONACYT</a>
        </div>

        <div className="div-bannerSEP">

          <div className="div-direccion">
            <a>Av. José Guadalupe Tejeda #557</a><br/>
            <a>Arandas, Jalisco.</a><br/>
            <a>01-348-78-32010</a>
            <div className="div-logosDireccion">
              <img src="http://tecmm.edu.mx/imagesReact/images/logos/logos.webp"/>
            </div>
            <a id="leyendaAccesibilidad">Página con capacidad lectora de pantalla para personas con discapacidad visual o con visión reducida a través de la herramienta <a onClick={this.show.bind(this)}>ChromeVox (Click Aqui)</a></a>
          </div>
          <iframe className="direccionMap" frameborder="0"  allowfullscreen="" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5278.527436270717!2d-102.35996953522262!3d20.690620809418682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8357a0e35012dbe2!2sInstituto%20Tecnol%C3%B3gico%20Superior%20de%20Arandas!5e0!3m2!1ses!2smx!4v1578673866894!5m2!1ses!2smx"></iframe>

        </div>

        <div className="div-transformarMexico">
          <img src='http://tecmm.edu.mx/imagesReact/images/linksFooter/Banner%20Verde_Mesa%20de%20trabajo%201%20copia.webp'/>
        </div>

        <div className="div-bannerSepSinTexto">
          <img  src="http://tecmm.edu.mx/imagesReact/images/linksFooter/banner-tecmm-footer.webp  "/>
        </div>


        <div className="div-enlaces-gobierno">

          <img className="img-gobMx" src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"/>

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
