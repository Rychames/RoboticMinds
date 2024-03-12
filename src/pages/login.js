import React, { useState, useEffect } from 'react';
import '../styles/loginCSS.css';
import iconKey from '../images/iconKey.svg'
import iconEmail from '../images/iconEmail.svg'
import iconPerson from '../images/iconPerson.svg'
import iconInstragram from '../images/iconInstagram.svg'
import iconFacebook from '../images/iconFacebook.svg'
import iconTwitter from '../images/iconTwitter.svg'
import BackgroundGear from '../components/BackgroundGear';

function Login() {
    const [bodyClass, setBodyClass] = useState('');

    // Manipulador de eventos para o botão de sign in
    const handleSignInClick = () => {
        setBodyClass('login-sign-in-js');
    };

    // Manipulador de eventos para o botão de sign up
    const handleSignUpClick = () => {
        setBodyClass('login-sign-up-js');
    };

    // Atualiza a classe do body quando o estado muda
    useEffect(() => {
        document.body.className = bodyClass;
    }, [bodyClass]);

    return (
        
        <div className="login-container">
            <div className="login-content login-first-content">
                <div className="login-first-column">
                    <h2 className="login-title login-title-primary">Bem vindo de volta!</h2>
                    <p className="login-description login-description-primary">
                        Se mantenha conectado com nós
                    </p>
                    <p className="login-description login-description-primary">
                        por favor informe seu login
                    </p>
                    <button id="signin" className="login-btn login-btn-primary" onClick={handleSignInClick}>
                        login
                    </button>
                </div>
                <div className="login-second-column">
                    <h2 className="login-title login-title-second">Criar uma conta Minds</h2>
                    <div className="login-social-media">
                        <ul className="login-list-social-media">
                            <a className="login-link-social-media" href="#">
                                <li className="login-item-social-media">
                                    <img src={iconInstragram}></img>
                                </li>
                            </a>
                            <a className="login-link-social-media" href="#">
                                <li className="login-item-social-media">
                                    <img src={iconFacebook}></img>
                                </li>
                            </a>
                            <a className="login-link-social-media" href="#">
                                <li className="login-item-social-media">
                                    <img src={iconTwitter}></img>
                                </li>
                            </a>
                        </ul>
                    </div>
                    {/* social media */}
                    <p className="login-description login-description-second">
                        ou use seu email para registrar:
                    </p>
                    <form className="login-form">
                        <label className="login-label-input" htmlFor="">
                            <img src={iconPerson} className='icon-custom'></img>
                            <input type="text" placeholder="Name" />
                        </label>
                        <label className="login-label-input" htmlFor="">
                            <img src={iconEmail} className='icon-custom'></img>
                            <input type="email" placeholder="Email" />
                        </label>
                        <label className="login-label-input" htmlFor="">
                            <img src={iconKey} className='icon-custom'></img>
                            <input type="password" placeholder="Password" />
                        </label>
                        <button className="login-btn login-btn-second" onClick={handleSignUpClick}>Cadastre-se</button>
                    </form>
                </div>
                {/* second column */}
            </div>
            {/* first content */}
            <div className="login-content login-second-content">
                <div className="login-first-column">
                    <h2 className="login-title login-title-primary">Olá discente</h2>
                    <p className="login-description login-description-primary">
                        Insira seus dados pessoais
                    </p>
                    <p className="login-description login-description-primary">
                        e faça parte da Robotic Minds
                    </p>
                    <button id="signup" className="login-btn login-btn-primary" onClick={handleSignUpClick}>
                        Cadastre-se 
                    </button>
                </div>
                <div className="login-second-column">
                    <h2 className="login-title login-title-second">Faça login na Robotic Minds</h2>
                    <div className="login-social-media">
                        <ul className="login-list-social-media">
                            <a className="login-link-social-media" href="#">
                                <li className="login-item-social-media">
                                    <img src={iconInstragram}></img>
                                </li>
                            </a>
                            <a className="login-link-social-media" href="#">
                                <li className="login-item-social-media">
                                    <img src={iconFacebook}></img>
                                </li>
                            </a>
                            <a className="login-link-social-media" href="#">
                                <li className="login-item-social-media">
                                    <img src={iconTwitter}></img>
                                </li>
                            </a>
                        </ul>
                    </div>
                    {/* social media */}
                    <p className="login-description description-second">
                        ou use seu email:
                    </p>
                    <form className="login-form">
                        <label className="login-label-input" htmlFor="">
                            <img src={iconEmail} className='icon-custom'></img>
                            <input type="email" placeholder="Email" />
                        </label>
                        <label className="login-label-input" htmlFor="">
                            <img src={iconKey} className='icon-custom'></img>
                            <input type="password" placeholder="Password" />
                        </label>
                        <a className="login-password" href="#">
                            Esqueceu sua senha?
                        </a>
                        <button className="login-btn login-btn-second" onClick={handleSignInClick}>Login</button>
                    </form>
                </div>
                {/* second column */}
            </div>
            {/* second-content */}
        </div>
    );
};

export default Login;
