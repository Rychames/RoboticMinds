import logoRobotic from '../images/Logotipo versão negativa.png'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer className="footer text-center text-lg-start">
            <div className="container p-4 ">
                <section className="">
                    <div className="d-flex flex-row flex-md-column justify-content-center align-items-center mb-0">
                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                            <img src={logoRobotic} alt="Logo Entomokey Rouded" className="Logo mb-3 me-3 " />
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                            <a href="#!" className="text">POLÍTICA DE PRIVACIDADE</a>
                            <a href="#!" className="text mx-2">TERMOS DE USO</a>
                            <a href="#!" className="text">CENTRAL DE AJUDA</a>
                            <a href="#!" className="text mx-2">2024</a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
}