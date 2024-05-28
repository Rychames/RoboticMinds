import logoRobotic from '../images/Logotipo versão negativa.png'

export default function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="container d-flex  justify-content-center align-itens-center ">
                <div className="col-6 col-md-3 col-xxl-3 ">
                    <img src={logoRobotic} className='img-fluid mt-5'></img>
                </div>
            </div>
            <div className="d-flex text-center justify-content-center align-itens-center mt-3">
                    <i className="bi bi-facebook me-3"></i>
                    <i className="bi bi-instagram me-3"></i>
                    <i className="bi bi-twitter-x me-3"></i>
                    <p className="txtFooter me-3">POLITICA DE PRIVACIDADE</p>
                    <p className="txtFooter me-3">TERMOS DE USO</p>
                    <p className="txtFooter me-3">QUEM SOMOS</p>
                    <p className="txtFooter ">@2024</p>
            </div>
        </div>
    );
}