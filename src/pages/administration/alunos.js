import React, { useState, useEffect } from 'react';
import Header from '../../components/Header.js';
import Footer from '../../components/footer.js';
import Navbar from '../../components/Navbar';
import CardList from '../../components/CardList';
import Users from '../../components/users.js';
import CardItem from '../../components/CardItem';
import '../../styles/alunosCSS.css';
import { getUser } from '../../scripts/userService.js'
import { getApiURL } from '../../scripts/authService';

const apiURL = getApiURL();

export default function Alunos() {
    const [searchTerm, setSearchTerm] = useState('');
    const [itemsEquip, setItemsEquip] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const users = await getUser();
            console.log(users);
            setItemsEquip(users);
            setFilteredItems(users);
        }
        fetchUsers();
    }, []);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        const filtered = searchTerm === '' ? itemsEquip : itemsEquip.filter(item =>
            item.username.toLowerCase().includes(searchTerm)
        );
        setFilteredItems(filtered);
    };

    const handleAccessChange = (event, index) => {
        const { value } = event.target;
        // Aqui você pode atualizar o nível de acesso no estado ou enviar para a API para atualizar no banco de dados
        // Exemplo de atualização no estado:
        const updatedItems = [...filteredItems];
        updatedItems[index].level_access = value === 'Professor' ? 'staff' : 'student';
        setFilteredItems(updatedItems);
    };
    

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />

            <Header />

            <main>
                <Navbar />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous" />
                <div className="container">
                    <br />
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form className="card card-sm">
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>
                                    <div className="col">
                                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" onChange={handleSearch} value={searchTerm} />
                                    </div>
                                    <div className="col-auto col2">
                                        <button className="btn btn-lg btn-success" type="submit">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <h1>Discentes da RoboticMinds</h1>

                <br />

                <table className="table">
                    <thead>
                        <tr>
                            <th className="coluna tipo1" scope="col">ALUNOS</th>
                            <th className="coluna tipo2" scope="col">NIVEL DE ACESSO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.map((item, index) => (
                            <tr key={index}>
                                <>
                                    <th className="linha"><img src={`${apiURL}${item.profile_picture}`} className={`fotoPerfil`} alt='img' />  <p>{item.username ? (item.username) : (item.title)}</p></th>
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
