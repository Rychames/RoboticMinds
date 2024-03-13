import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import iconKey from '../images/iconKey.svg'
import iconEmail from '../images/iconEmail.svg'
import iconPerson from '../images/iconPerson.svg'
import iconInstragram from '../images/iconInstagram.svg'
import iconFacebook from '../images/iconFacebook.svg'
import iconTwitter from '../images/iconTwitter.svg'

import '../styles/loginCSS.css';
import '../scripts/loginRedirect.js'

function Login() {
    const [bodyClass, setBodyClass] = useState('');
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Manipulador de eventos para o botão de sign in
    const handleStyleLogin = () => {
        setBodyClass('login-sign-in-js');
    };

    // Manipulador de eventos para o botão de sign up
    const handleStyleRegistre = () => {
        setBodyClass('login-sign-up-js');
    };

    const handleClickLogin = async (event) => {
        event.preventDefault();

        const userData = {
            email: email,
            password: password
        };

        try {
            const response = await fetch('https://sheltered-waters-90249-dbb39c4c8c4c.herokuapp.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
    
            if (!response.ok) {
                throw new Error('Erro ao fazer login');
            }
    
            const data = await response.json();

            const token = data.token;
            if (token) {
                localStorage.setItem('authToken', token);
                navigate('/');
            } else {
                throw new Error('Token de autenticação não encontrado na resposta');
            }
    

        } catch (error) {
            alert('erro ao fazer login')
            console.error('Erro ao fazer login:', error);
        }

    };



    const handleClickRegistre = async (event) => {
        event.preventDefault(); 
        const userData = {
            name: name,
            email: email,
            password: password
        };

        try {

            const response = await fetch('https://sheltered-waters-90249-dbb39c4c8c4c.herokuapp.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Erro ao registrar');
            }

            const data = await response.json();
            console.log(data);



        } catch (error) {
            console.error('Erro ao registrar:', error);
        }

    };


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
                    <button id="signin" className="login-btn login-btn-primary" onClick={handleStyleLogin}>
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
                        <label className="login-label-input" >
                            <img src={iconPerson} className='icon-custom'></img>
                            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        </label>
                        <label className="login-label-input" >
                            <img src={iconEmail} className='icon-custom'></img>
                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                        <label className="login-label-input">
                            <img src={iconKey} className='icon-custom'></img>
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <button className="login-btn login-btn-second" onClick={handleClickRegistre}>Cadastre-se</button>
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
                    <button id="signup" className="login-btn login-btn-primary" onClick={handleStyleRegistre}>
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
                        <label className="login-label-input">
                            <img src={iconEmail} className='icon-custom'></img>
                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label className="login-label-input">
                            <img src={iconKey} className='icon-custom'></img>
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <a className="login-password" href="#">
                            Esqueceu sua senha?
                        </a>
                        <button className="login-btn login-btn-second" onClick={handleClickLogin}>Login</button>
                    </form>
                </div>
                {/* second column */}
            </div>
            {/* second-content */}
        </div>
    );
};

export default Login;
