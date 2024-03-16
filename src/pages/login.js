import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import defaultProfilePhoto from '../images/imgGenericaFoto.png';


import '../styles/loginCSS.css';
import '../scripts/loginRedirect.js'
import '../scripts/pegaIMG.js'

function Login() {
    const [bodyClass, setBodyClass] = useState('');
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoURL, setPhotoURL] = useState(defaultProfilePhoto);
    const [photo, setPhoto] = useState(null);
    const [birthDate, setBirthDate] = useState('');
    const [cpf, setCpf] = useState('');
    const [gender, setGender] = useState('');

    // Manipulador de eventos para o botão de sign in
    const handleStyleLogin = () => {
        setBodyClass('login-sign-in-js');
    };

    // Manipulador de eventos para o botão de sign up
    const handleStyleRegistre = () => {
        setBodyClass('login-sign-up-js');
    };



    // const handlePhotoChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setPhoto(file); // Atualiza o estado com o arquivo de imagem selecionado
    //             setPhotoURL(reader.result); // Atualiza a URL da imagem selecionada
    //         };
    //         reader.readAsDataURL(file);
    //     }
    //     // Não faz nada se nenhum arquivo for selecionado, mantendo a imagem padrão
    // };



    // https://sheltered-waters-90249-dbb39c4c8c4c.herokuapp.com/api/login
    // Adicione o middleware multer.none() para lidar com multipart/form-data sem processar arquivos

    const handleClickLogin = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('username', name);
        formData.append('password', password);

        try {
            const response = await axios.post('https://roboticminds.onrender.com/token/', formData);

            const data = response.data;

            if (data.access && data.refresh) {
                // Aqui você pode armazenar os tokens conforme necessário
                localStorage.setItem('authToken', data.access);
                navigate('/'); // Redireciona para a página inicial ou outra página após o login bem-sucedido
            } else {
                throw new Error('Tokens de autenticação não encontrados na resposta');
            }

        } catch (error) {
            alert('erro ao fazer login');
            console.error('Erro ao fazer login:', error);
            if (error.response) {
                console.error('Detalhes do erro:', error.response.data);
            }
        }
    };

    const handleClickRegistre = async (event) => {
        event.preventDefault();

        // Criando o objeto com os dados do usuário
        const userData = {
            username: name,
            email: email,
            password: password, 
            //birth_date: birthDate, 
            cpf: cpf, 
            sex: gender 
        };
        
        
        try {
            const response = await fetch('https://roboticminds.onrender.com/api/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNTYxMTgzLCJpYXQiOjE3MTA1NjA4ODMsImp0aSI6IjYyYzBmMDViY2JkNTQyYTVhNmUxMmQwODdlYzNlNjE1IiwidXNlcl9pZCI6M30.Gq3DfC3DovCp5LtMa6T9pZpB8xYa5uFtQQm_TjhnDb8'
                },
                body: JSON.stringify(userData), // Convertendo o objeto para uma string JSON
            });

            if (!response.ok) {
                throw new Error('Erro ao registrar, errors: ' + response.error);
            }

            const data = await response.json();


            if(data[0] = "Um usuário com este nome de usuário já existe"){
                console.log("\nNão foi possivel cadastrar usuario!\n")
            }
            else{
                console.log("\nUsuario Cadastrado com sucesso!\n")
            }

            navigate("/");


        } catch (error) {
            alert('Erro ao registrar');
            console.error('Erro ao registrar:', error);
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
                    <p className="login-description login-description-second">
                        ou use seu email para registrar:
                    </p>

                    <form>

                    </form>

                    <form className="login-form" >

                        <div className="profile-image-upload">
                            <label htmlFor="profile-image-input">
                                <img
                                    id="profile-image-preview"
                                    src={defaultProfilePhoto}
                                    alt="Imagem de Perfil"
                                />
                            </label>
                            <input
                                type="file"
                                id="profile-image-input"
                                accept="image/*"
                                style={{ display: "none" }}
                            />

                        </div>
                        <p id='txtLabelImg'>Foto de Perfil</p>



                        {/* <label className="custom-label-input profile-photo-input" id='custom-profile'>
                            {photoURL && <img src={photoURL} alt="Foto de Perfil" className="profile-photo" onClick={() => document.getElementById('fileInput').click()} />}
                            <p>Foto de Perfil</p>
                        </label>
                        <input type="file" id="fileInput" onChange={handlePhotoChange} className="profile-photo-input-hidden" /> */}


                        <label className="login-label-input">
                            <img src={iconPerson} className='icon-custom'></img>
                            <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
                        </label>
                        <label className="login-label-input">
                            <img src={iconEmail} className='icon-custom'></img>
                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label className="login-label-input">
                            <img src={iconKey} className='icon-custom'></img>
                            <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <label className="login-label-input">
                            <img src={iconBirthDate} className='icon-custom'></img>
                            <input type="date" placeholder="Data de Nascimento" onChange={(e) => setBirthDate(e.target.value)} />
                        </label>
                        <label className="login-label-input">
                            <img src={iconCPF} className='icon-custom'></img>
                            <input type="text" placeholder="CPF" onChange={(e) => setCpf(e.target.value)} />
                        </label>
                        <label className="login-label-input">
                            <img src={iconGender} className='icon-custom'></img>
                            <select className="gender-select" onChange={(e) => setGender(e.target.value)}>
                                <option value="">Selecione o sexo</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
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
                            <input type="email" placeholder="Nome de Usuário" onChange={(e) => setName(e.target.value)} />
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
