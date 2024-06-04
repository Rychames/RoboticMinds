import React, { useState } from 'react';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import Sidebar from '../../components/Sidebar.js';
import '../../styles/Certificates.css';

const Certificates = () => {
    const [activeTab, setActiveTab] = useState('criar');

    const certificados = [
        { titulo: 'CERTIFICADO DE PARTICIPAÇÃO', modelo: 'Alterar Modelo', status: 'Publicado' },
        { titulo: 'CERTIFICADO DE PARTICIPAÇÃO', modelo: 'Alterar Modelo', status: 'Não Publicado' },
        { titulo: 'CERTIFICADO DE PARTICIPAÇÃO', modelo: 'Alterar Modelo', status: 'Publicado' },
        { titulo: 'CERTIFICADO DE PARTICIPAÇÃO', modelo: 'Alterar Modelo', status: 'Não Publicado' },
        { titulo: 'CERTIFICADO DE PARTICIPAÇÃO', modelo: 'Alterar Modelo', status: 'Não Publicado' },
        { titulo: 'CERTIFICADO DE PARTICIPAÇÃO', modelo: 'Alterar Modelo', status: 'Publicado' },
        { titulo: 'CERTIFICADO DE PARTICIPAÇÃO', modelo: 'Alterar Modelo', status: 'Publicado' },
        { titulo: 'CERTIFICADO DE PARTICIPAÇÃO', modelo: 'Alterar Modelo', status: 'Não Publicado' },
    ];

    const alunos = [
        { nome: 'DEBORA CALHEIROS FERREIRA', email: 'deboraze09@gmail.com', status: 'Enviado' },
        { nome: 'DIB RAYNER PERES CHAES', email: 'rychames@gmail.com', status: 'Não Enviado' },
        { nome: 'JONATAS PINHEIRO FERREIRA', email: 'jotapynho@gmail.com', status: 'Enviado' },
        { nome: 'DIB RAYNER PERES CHAES', email: 'rychames@gmail.com', status: 'Enviado' },
        { nome: 'JONATAS PINHEIRO FERREIRA', email: 'jotapynho@gmail.com', status: 'Enviado' },
        { nome: 'DIB RAYNER PERES CHAES', email: 'rychames@gmail.com', status: 'Enviado' },
    ];

    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                crossOrigin="anonymous"
            />
            <Header />
            <main className="d-flex">
                <Sidebar />
                <div className="container mt-4">
                    <header className="text-center mb-4">
                        <h1>
                            Certificados <span className="text-info">Robotic Minds</span>
                        </h1>
                    </header>
                    <nav className="nav nav-tabs mb-4">
                        <button
                            className={`nav-link ${activeTab === 'criar' ? 'active' : ''}`}
                            onClick={() => setActiveTab('criar')}
                        >
                            Criar
                        </button>
                        <button
                            className={`nav-link ${activeTab === 'enviar' ? 'active' : ''}`}
                            onClick={() => setActiveTab('enviar')}
                        >
                            Enviar por Email
                        </button>
                        <button className="nav-link">Configurações</button>
                    </nav>
                    <div>
                        {activeTab === 'criar' && (
                            <>
                                <button className="btn btn-info mb-4">+ Novo Certificado</button>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Título</th>
                                            <th>Modelo</th>
                                            <th>Status</th>
                                            <th>Opções</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {certificados.map((certificado, index) => (
                                            <tr key={index}>
                                                <td>{certificado.titulo}</td>
                                                <td>
                                                    <button className="btn btn-link p-0">Alterar Modelo</button>
                                                </td>
                                                <td
                                                    className={
                                                        certificado.status === 'Publicado'
                                                            ? 'text-info font-weight-bold'
                                                            : 'text-secondary'
                                                    }
                                                >
                                                    {certificado.status}
                                                </td>
                                                <td>
                                                    {certificado.status === 'Publicado' ? (
                                                        <button className="btn btn-link p-0 mr-2">Despublicar</button>
                                                    ) : (
                                                        <button className="btn btn-link p-0 mr-2">Publicar</button>
                                                    )}
                                                    <button className="btn btn-secondary btn-sm rounded-circle">i</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>
                        )}
                        {activeTab === 'enviar' && (
                            <>
                                <div className="d-flex mb-4">
                                    <input type="text" className="form-control mr-2" placeholder="Buscar por aluno" />
                                    <button className="btn btn-info">Enviar para Todos</button>
                                </div>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Aluno</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th>Opções</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {alunos.map((aluno, index) => (
                                            <tr key={index}>
                                                <td>{aluno.nome}</td>
                                                <td>{aluno.email}</td>
                                                <td
                                                    className={
                                                        aluno.status === 'Enviado'
                                                            ? 'text-info font-weight-bold'
                                                            : 'text-secondary'
                                                    }
                                                >
                                                    {aluno.status}
                                                </td>
                                                <td>
                                                    <button className="btn btn-outline-secondary btn-sm mr-2">Enviar</button>
                                                    <button className="btn btn-outline-secondary btn-sm">Abrir</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Certificates;
