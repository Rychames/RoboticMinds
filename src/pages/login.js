import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import iconKey from '../images/iconKey.svg'
import iconEmail from '../images/iconEmail.svg'
import iconPerson from '../images/iconPerson.svg'
import iconGender from '../images/iconGender.svg'
import iconPhoto from '../images/iconPhoto.svg'
import iconBirthDate from '../images/iconBirthDate.svg'
import iconCPF from '../images/iconCPF.svg'
import iconInstragram from '../images/iconInstagram.svg'
import iconFacebook from '../images/iconFacebook.svg'
import iconTwitter from '../images/iconTwitter.svg'
import iconRegistration from '../images/iconRegistration.svg'
import defaultProfilePhoto from '../images/imgGenericaFoto.png';

import { loginUser, registerUser } from '../scripts/authService.js';
import StudentForm from '../components/StudentForm';
import VisitorForm from '../components/VisitorForm';

import '../styles/loginCSS.css';
import '../scripts/loginRedirect.js'



function Login() {
    const navigate = useNavigate();
    const [bodyClass, setBodyClass] = useState('');
    const [loading, setLoading] = useState(false);
    const [isDialogVisible, setIsDialogVisible] = useState(true);
    const [userType, setUserType] = useState('');


    const [photoURL, setPhotoURL] = useState(defaultProfilePhoto);
    const [photo, setPhoto] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [registration, setRegistration] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [cpf, setCpf] = useState('');
    const [gender, setGender] = useState('');

    const handleUserTypeSelection = (type) => {
        setUserType(type);
        setIsDialogVisible(false);
    };


    const handleStyleLogin = () => {
        setBodyClass('login-sign-in-js');
    };

    const handleStyleRegistre = () => {
        setBodyClass('login-sign-up-js');
    };

    const handleClickLogin = async (event) => {
        event.preventDefault();
        setLoading(true);

        const credentials = {
            username: name,
            password: password
        };

        try {
            const tokenAcess = await loginUser(credentials, navigate);
            localStorage.setItem('authToken', tokenAcess);
        } catch (error) {
            alert('Erro ao fazer login');
        } finally {
            setLoading(false);
        }
    };

    const handleClickRegistre = async (event) => {
        event.preventDefault();
        console.log("Passou aqui!");
        setLoading(true);

        const userData = {
            username: name,
            email: email,
            password: password,
            birth_date: birthDate,
            cpf: cpf,
            registration: registration,
            sex: gender
        };
        try {
            const teste = await registerUser(userData, navigate);

            console.log(teste);
            console.log("\nUsuario Cadastrado com sucesso!\n");
        } catch (error) {
            alert('Erro ao registrar');
            console.error('Erro ao registrar:', error);
        }
        finally {
            setLoading(false);
        }
    };




    useEffect(() => {
        document.body.className = bodyClass;
    }, [bodyClass]);



    return (

        <div className="login-container" >
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


                <div className="login-second-column" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {isDialogVisible ? (
                        <div>
                            <h2 style={{ color: '#49c1ea' }}>Você é um aluno ou visitante?</h2>
                            <div className="columnPT2">
                                <button onClick={() => handleUserTypeSelection('student')}>Aluno</button>
                                <button onClick={() => handleUserTypeSelection('visitor')}>Visitante</button>
                            </div>
                        </div>
                    ) : userType === 'student' ? (
                        <StudentForm
                            icons={{ iconPerson, iconKey, iconEmail, iconCPF, iconBirthDate, iconGender, iconInstragram, iconFacebook, iconTwitter, iconRegistration }}
                            setPhotoURL={setPhotoURL} setPhoto={setPhoto} setName={setName} setRegistration={setRegistration} setEmail={setEmail} setPassword={setPassword} setBirthDate={setBirthDate} setCpf={setCpf} setGender={setGender}
                            handleClickRegistre={handleClickRegistre}

                        />
                    ) : (
                        <VisitorForm
                            icons={{ iconPerson, iconKey, iconEmail, iconGender, iconInstragram, iconFacebook, iconTwitter }}
                            setPhotoURL={setPhotoURL} setPhoto={setPhoto} setName={setName} setEmail={setEmail} setPassword={setPassword} setGender={setGender}
                            handleClickRegistre={handleClickRegistre}
                        />
                    )}

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
                            <img src={iconPerson} className='icon-custom'></img>
                            <input type="email" placeholder="Nome de Usuário" onChange={(e) => setName(e.target.value)} required />
                        </label>
                        <label className="login-label-input">
                            <img src={iconKey} className='icon-custom'></img>
                            <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required />
                        </label>
                        <a className="login-password" href="#">
                            Esqueceu sua senha?
                        </a>
                        <button className="login-btn login-btn-second" onClick={handleClickLogin} disabled={loading}>
                            {loading ? '' : 'Login'}
                        </button>
                    </form>
                </div>
                {/* second column */}
            </div>
            {/* second-content */}
        </div>
    );
};

export default Login;
