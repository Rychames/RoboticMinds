import React, { useState, useEffect } from 'react';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import Sidebar from '../../components/Sidebar.js';
import '../../styles/Alunos.css';

import { getUser, updateUser } from '../../scripts/userService.js'
import { ResponseHandle } from '../../scripts/handleResponse.js'

import { getApiURL } from '../../scripts/apiUrls.js';
import imgGenerica from '../../images/imgGenericaFoto.png';

const apiURL = getApiURL();

export default function Alunos() {
    const [searchTerm, setSearchTerm] = useState('');
    const [itemsEquip, setItemsEquip] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const responseHandle = new ResponseHandle(getUser)
            const { count, next, previous, total_pages } = await responseHandle.getPaginate();
            const users = await responseHandle.getResults();
            setItemsEquip(users || []);
            setFilteredItems(users || []);
            console.log("Usuários:", users);
            console.log("Count:", count);
            console.log("Next:", next);
            console.log("Previous:", previous);
            console.log("Total Pages:", total_pages);
        }
        fetchUsers();
    }, []);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        if (itemsEquip && Array.isArray(itemsEquip)) {
            const filtered = searchTerm === '' ? itemsEquip : itemsEquip.filter(item =>
                item.username.toLowerCase().includes(searchTerm)
            );
            setFilteredItems(filtered);
        }
    };

    const handleAccessChange = (event, index) => {
        const { value } = event.target;
        const level_access_values = {
            Aluno: 'student',
            Professor: 'teacher',
        }
        const levelAccess = level_access_values[value]
        const user = [...filteredItems];

        user[index].level_access = levelAccess;
        console.log(user[index])

        const newUser = {
            id: user[index].id,
            level_access: user[index].level_access
        }
        updateUser(newUser)
        setFilteredItems(user);
    };


    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />

            <Header />

            <main>
                <Sidebar />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="mt-5 col-12 col-md-10 col-lg-8">
                            <div className="input-group custom-search mb-3">
                                <span className="input-group-text fas fa-search" id="inputGroup-sizing-default"></span>
                                <input className="form-control" type="search" placeholder="Digite o nome de um aluno" onChange={handleSearch} value={searchTerm} />
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="text-center">Discentes da RoboticMinds </h1>

                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th className="coluna tipo1" scope="col">ALUNOS</th>
                            <th className="coluna tipo2" scope="col">NIVEL DE ACESSO</th>
                            <th className="coluna tipo3" scope="col">PROJETOS</th>
                            <th className="coluna tipo4" scope="col">SITUAÇÃO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.map((user, index) => (
                            <tr key={index}>
                                <>
                                    <th className="d-flex">
                                        <img src={user.profile_picture ? `${apiURL}${user.profile_picture}` : imgGenerica} className="fotoPerfil" alt="img" />
                                        <p className='align-self-center align-middle'>{user.username ? user.username : user.title}</p>
                                    </th>
                                    <td>
                                        <select value={user.level_access === "teacher" ? 'Professor' : 'Aluno'} onChange={(e) => handleAccessChange(e, index)}>
                                            <option value="Professor">Professor</option>
                                            <option value="Aluno">Aluno</option>
                                        </select>
                                    </td>
                                    <td className='text-center align-middle'>
                                        <button className='custom-button'>VIZUALIZAR PROJETO</button>
                                    </td>
                                    <td className='text-center align-middle'>
                                        <p className='aqua-text mt-3'>EM PROJETO</p>
                                    </td>
                                </>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>

            <Footer />
        </>
    );
}
