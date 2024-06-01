import onda from '../images/onda.svg'
import imgRoboticSobre from '../images/imgRoboticSobre.png'
import imgGenerica from '../images/imgGenericaFoto.png'
import imgRoboticEquip from '../images/imgRoboticEquip.png'
import imgRoboticProjetos from '../images/imgRoboticProje.png'
import imgRoboticMent from '../images/imgRoboticMent.png'
import imgFacaParte from '../images/imgParte5.png'
import imgRoboticInsc from '../images/imgRoboticInsc.png'
import logoRobotic from '../images/Logotipo versão negativa.png'

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Divisoria from '../components/divisoria';
import CardList from '../components/CardList';
import { getUser } from '../scripts/userService.js'

import '../styles/Home.css'
import '../fonts/stylesheet.css'

const itemsProjeto = [
  { title: 'Item 1', },
  { title: 'Item 2', },
  { title: 'Item 3', },
  { title: 'Item 4', },
];

const itemsEquip = await getUser()


const itemsMent = [
  { username: 'Walter Claudino', },
  { username: 'Walter Claudino', },
];

function teste(){}

export default function home(onChange) {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"></link>
      <Header />
      {/* PARTE 1 */}
      <div className="parte1 ">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex justify-content-end mb-5 mt-5">
              <img src={logoRobotic} className="img-fluid imgRoboticHeader "></img>
            </div>
            <div className="col-6 align-self-center mb-5 mt-5">
              <p className="mb-3 txtEquipMind ">Equipe de robótica do Campus Avançado Manacapuru</p>
              <button className="btnRobotic btnJoin">Faça Parte</button>
            </div>
          </div>
        </div>
        <img src={onda}></img>
      </div>

      {/* PARTE 2 */}
      <div className="container">
        <img src={imgRoboticSobre} className="img-fluid imgSobre"></img>
        <div className="row">
          <div className="col-6 mt-5 d-flex flex-column ">
            <p className="txtSobre text-center text-xl-center align-self-center mb-4 ">
              A robótica tem sido uma parte importante do ambiente acadêmico do campus de Manacapuru desde 2020,
              quando foi introduzida com o propósito de fomentar a inovação tecnológica entre os estudantes.
              Sob a orientação do renomado docente Walter Claudino Silva Junior, especialista em robótica e tecnologia da informação,
              essa iniciativa tem sido continuamente aprimorada e mantida ao longo dos anos.
            </p>
            <img src={imgGenerica} className="img-fluid imgGenerica align-self-center"></img>
          </div>
          <div className="col-6 mt-5 d-flex flex-column ">
            <img src={imgGenerica} className="img-fluid imgGenerica align-self-center"></img>
            <p className="txtSobre text-center align-self-center mt-4 ">
              Além de buscar atividades inovadoras,
              a robótica tem se comprometido em preparar os alunos para competições desafiadoras,
              como a First Lego League, onde têm se destacado com suas habilidades e criatividade.
              Essas competições não apenas proporcionam uma plataforma para aplicar o conhecimento adquirido,
              mas também incentivam o desenvolvimento de habilidades práticas e colaborativas essenciais para o sucesso no mundo tecnológico atual.
            </p>
          </div>
        </div>
      </div>

      {/* PARTE 3 */}
      <div className="parte3 container-fluid">
        <div className="container ">
          <img src={imgRoboticProjetos} className="img-fluid imgProjeto mt-3"></img>
          <CardList items={itemsProjeto} style="card-part3" />
          <div className="d-flex justify-content-center align-itens-center"> <button className="btnRobotic btnJoin align-self-center mb-3">Outros Projetos</button></div>
        </div>
      </div>

      <Divisoria />

    

      {/* PARTE 4 */}
      <div className="parte4 container-fluid">
        <div className="container ">
          <img src={imgRoboticEquip} className="img-fluid imgProjeto mt-3"></img>
          <CardList items={itemsEquip} style="stylePT4" />
        </div>
      </div>

      {/* PARTE 5 */}
      <div className="parte5 container-fluid">
        <div className="container ">
          <img src={imgRoboticMent} className="img-fluid imgProjeto mt-3"></img>
          <CardList items={itemsMent} style="stylePT5" />
        </div>
      </div>
      <Divisoria />

      {/* PARTE 6 */}
      <div className="parte6 ">
        <div className="container">
          <img src={imgRoboticInsc} className="img-fluid imgProjeto mt-3"></img>
          <div className="row">
            <div className="col-6 d-flex justify-content-end mb-5 mt-5">
              <img src={imgFacaParte} className="img-fluid imgRoboticHeader "></img>
            </div>
            <div className="col-6 col-xxl-4 col-md-4 align-self-center mb-5 mt-5">
              <p className="txtForms">Nome</p>
              <input type="text" onChange={teste()} className="form-control custom-forms w-xl-50" />
              <p className="txtForms">Email</p>
              <input type="email" onChange={teste()} className="form-control custom-forms "></input>
              <button className="btnRobotic btnInsc mt-3 align-self-center">Inscrever-se</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
