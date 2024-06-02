import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import iconKey from '../images/iconKey.svg'
import iconEmail from '../images/iconEmail.svg'
import iconPerson from '../images/iconPerson.svg'
import iconNamePerson from "../images/iconNamePerson.svg"
import iconGender from '../images/iconGender.svg'
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

import '../styles/Login.css';
import '../scripts/loginRedirect.js'



function Login() {
    const navigate = useNavigate();
    const [bodyClass, setBodyClass] = useState('');
    const [loading, setLoading] = useState(false);
    const [isDialogVisible, setIsDialogVisible] = useState(true);
    const [userType, setUserType] = useState('');


    const [photoURL, setPhotoURL] = useState(defaultProfilePhoto);
    const [photo, setPhoto] = useState(null);
    const formData = new FormData();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [registration, setRegistration] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [cpf, setCpf] = useState('');
    const [gender, setGender] = useState('');
    const [profileImage, setProfileImage] = useState(defaultProfilePhoto);

    // Logica css

    useEffect(() => {
        document.body.className = bodyClass;
    }, [bodyClass]);

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

    // Logica de validação e chamada do backend

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function isValidPassword(password) {
        const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return re.test(String(password));
    }

    function isValidRegistration(registration) {
        const re = /^\d{10}$/;
        return re.test(String(registration));
    }

    const handleRegistrationChange = (event) => {
        const rawRegistration = event.target.value.replace(/\D/g, '');
        if (rawRegistration.length <= 10) {
            setRegistration(rawRegistration);
        }
    };

    function formatCPF(cpf) {
        cpf = cpf.replace(/\D/g, '');
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return cpf;
    }

    const handleCpfChange = (event) => {
        let rawCpf = event.target.value.replace(/\D/g, '');
        if (rawCpf.length > 11) {
            rawCpf = rawCpf.slice(0, 11);
        }
        const formattedCpf = formatCPF(rawCpf);
        setCpf(formattedCpf);
    };


    function isValidCPF(cpf) {
        cpf = formatCPF(cpf);
        const re = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return re.test(cpf);
    }

    function isValidBirthDate(birthDate) {
        const minBirthDate = new Date(1920, 0, 1);
        return new Date(birthDate) >= minBirthDate;
    }



    const handleClickLogin = async (event) => {
        event.preventDefault();
        setLoading(true);


        // if (!isValidPassword(password)) {
        //     alert('Senha inválida');
        //     setLoading(false);
        //     return;
        // }

        const credentials = {
            username: name,
            password: password
        };

        try {
            const authToken = await loginUser(credentials, navigate);
            localStorage.setItem('authToken', authToken['access']);
        } catch (error) {
            alert('Erro ao fazer login');
        } finally {
            setLoading(false);
        }
    };


    const handleClickRegistre = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!isValidEmail(email)) {
            alert('Email inválido');
            setLoading(false);
            return;
        }

        if (!isValidPassword(password)) {
            alert('Senha inválida');
            setLoading(false);
            return;
        }

        if (!isValidRegistration(registration)) {
            alert('Matrícula inválida');
            setLoading(false);
            return;
        }

        const formattedCPF = formatCPF(cpf);
        if (!isValidCPF(formattedCPF)) {
            alert('CPF inválido');

            setLoading(false);

            return;
        }

        if (!isValidBirthDate(birthDate)) {
            alert('Data de nascimento inválida');
            setLoading(false);
            return;
        }

        const userData = {
            // name: name,
            username: username,
            email: email,
            password: password,
            birth_date: birthDate,
            cpf: cpf.replace(/[^0-9]/g, ''),
            registration: registration,
            sex: gender,
            // profileImage: profileImage
        };

        for (const key in userData) {
            formData.append(key, userData[key]);
        }
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });

        try {
            await registerUser(formData, navigate);
            Swal.fire({
                title: "<strong>Usuário Cadastrado com Sucesso!</strong>",
                icon: "success",
            });
        } catch (error) {
            Swal.fire({
                title: "<strong>Falha no Cadastro!</strong>",
                icon: "error",
            });
        }
        finally {
            setLoading(false);
        }
    };


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
                            icons={{ iconPerson, iconNamePerson, iconKey, iconEmail, iconCPF, iconBirthDate, iconGender, iconInstragram, iconFacebook, iconTwitter, iconRegistration }}
                            setProfileImage={setProfileImage} profileImage={profileImage} setUsername={setUsername} setName={setName} registration={registration} setEmail={setEmail} setPassword={setPassword} setBirthDate={setBirthDate} cpf={cpf} setGender={setGender}
                            handleClickRegistre={handleClickRegistre}
                            handleCpfChange={handleCpfChange}
                            handleRegistrationChange={handleRegistrationChange}
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
                    <h2 className="login-title login-title-login">Faça login na Robotic Minds</h2>
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
                            <input type="text" placeholder="Nome de Usuário" onChange={(e) => setName(e.target.value)} required />
                        </label>
                        <label className="login-label-input">
                            <img src={iconKey} className='icon-custom'></img>
                            <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required />
                        </label>
                        <a className="login-password" href="#">
                            Esqueceu sua senha?
                        </a>
                        <button className="login-btn login-btn-second custom-btn-login" onClick={handleClickLogin} disabled={loading}>
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
