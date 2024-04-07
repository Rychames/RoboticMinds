import React, { useState } from 'react';


import defaultProfilePhoto from '../images/imgGenericaFoto.png';



function StudentForm({ icons, setProfileImage, profileImage, setUsername, setName, setEmail, registration, setPassword, setBirthDate, cpf, setGender, handleClickRegistre, handleRegistrationChange, handleCpfChange }) {


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    return (
        <>
            <h2 className="login-title login-title-second">Criar uma conta Minds</h2>
            <div className="login-social-media">
                <ul className="login-list-social-media">
                    <a className="login-link-social-media" href="#">
                        <li className="login-item-social-media">
                            <img src={icons.iconInstragram}></img>
                        </li>
                    </a>
                    <a className="login-link-social-media" href="#">
                        <li className="login-item-social-media">
                            <img src={icons.iconFacebook}></img>
                        </li>
                    </a>
                    <a className="login-link-social-media" href="#">
                        <li className="login-item-social-media">
                            <img src={icons.iconTwitter}></img>
                        </li>
                    </a>
                </ul>
            </div>
            <p className="login-description login-description-second">
                ou use seu email para registrar:
            </p>
            <form className="login-form" >

                <div className="profile-image-upload">
                    <label htmlFor="profile-image-input">
                        <img
                            id="profile-image-preview"
                            src={profileImage}
                            alt="Imagem de Perfil"
                        />
                    </label>
                    <input
                        type="file"
                        id="profile-image-input"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                    />
                </div>
                <p id='txtLabelImg'>Foto de Perfil</p>

                <label className="login-label-input">
                    <img src={icons.iconPerson} className='icon-custom'></img>
                    <input type="text" placeholder="Nome Completo" onChange={(e) => setName(e.target.value)} />
                </label>
                <label className="login-label-input">
                    <img src={icons.iconNamePerson} className='icon-custom'></img>
                    <input type="text" placeholder="Nome de Usuário" onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label className="login-label-input">
                    <img src={icons.iconEmail} className='icon-custom'></img>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label className="login-label-input">
                    <img src={icons.iconKey} className='icon-custom'></img>
                    <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label className="login-label-input">
                    <img src={icons.iconRegistration} className='icon-custom'></img>
                    <input type="text" placeholder="Matrícula" value={registration} onChange={handleRegistrationChange} required />
                </label>
                <label className="login-label-input">
                    <img src={icons.iconCPF} className='icon-custom'></img>
                    <input type="text" placeholder="CPF" value={cpf} onChange={handleCpfChange} required />
                </label>
                <label className="login-label-input">
                    <img src={icons.iconBirthDate} className='icon-custom'></img>
                    <input type="date" placeholder="Data de Nascimento" onChange={(e) => setBirthDate(e.target.value)} />
                </label>
                <label className="login-label-input">
                    <img src={icons.iconGender} className='icon-custom'></img>
                    <select className="gender-select" onChange={(e) => setGender(e.target.value)}>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </label>
                <button className="login-btn login-btn-second" onClick={handleClickRegistre}>Cadastre-se</button>
            </form >
        </>

    );
}

export default StudentForm;
