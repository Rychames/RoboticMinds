import React, { useState, useEffect } from 'react';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import Sidebar from '../../components/Sidebar.js';
import '../../styles/Alunos.css';
import Users from '../../components/Users';
import { getUser } from '../../scripts/userService.js';
import { getApiURL } from '../../scripts/authService';
import imgGenerica from '../../images/imgGenericaFoto.png';

const apiURL = getApiURL();

export default function Alunos() {
    const [searchTerm, setSearchTerm] = useState('');
    const [itemsEquip, setItemsEquip] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const users = await getUser();
            console.log(users);
            setItemsEquip(users || []);
            setFilteredItems(users || []);
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
        const updatedItems = [...filteredItems];
        updatedItems[index].level_access = value === 'Professor' ? 'staff' : 'student';
        setFilteredItems(updatedItems);
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

                <h1 className="text-center">Discentes da RoboticMinds</h1>

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
                        {filteredItems && filteredItems.map((item, index) => (
                            <tr key={index}>
                                <>
                                    <th className="linha">
                                        <img src={item.profile_picture ? `${apiURL}${item.profile_picture}` : imgGenerica} className="fotoPerfil" alt="img" />
                                        <p>{item.username ? item.username : item.title}</p>
                                    </th>
                                    <td>
                                        <select value={item.level_access === 'staff' ? 'Professor' : 'Aluno'} onChange={(e) => handleAccessChange(e, index)}>
                                            <option value="Professor">Professor</option>
                                            <option value="Aluno">Aluno</option>
                                        </select>
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
