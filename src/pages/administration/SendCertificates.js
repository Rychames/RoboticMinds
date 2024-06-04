import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EnvioCertificados.css';

const EnvioCertificados = () => {
  const alunos = [
    { nome: 'DEBORA CALHEIROS FERREIRA', email: 'deboraze09@gmail.com', status: 'Enviado' },
    { nome: 'DIB RAYNER PERES CHAES', email: 'rychames@gmail.com', status: 'Não Enviado' },
    { nome: 'JONATAS PINHEIRO FERREIRA', email: 'jotapynho@gmail.com', status: 'Enviado' },
    { nome: 'DIB RAYNER PERES CHAES', email: 'rychames@gmail.com', status: 'Enviado' },
    { nome: 'JONATAS PINHEIRO FERREIRA', email: 'jotapynho@gmail.com', status: 'Enviado' },
    { nome: 'DIB RAYNER PERES CHAES', email: 'rychames@gmail.com', status: 'Enviado' },
  ];

  return (
    <div className="container mt-4">
      <header className="text-center mb-4">
        <h1>Certificados <span className="text-info">Robotic Minds</span></h1>
      </header>
      <nav className="nav nav-tabs mb-4">
        <button className="nav-link">Criar</button>
        <button className="nav-link active">Enviar por Email</button>
        <button className="nav-link">Configurações</button>
      </nav>
      <main>
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
                <td className={aluno.status === 'Enviado' ? 'text-info font-weight-bold' : 'text-secondary'}>{aluno.status}</td>
                <td>
                  <button className="btn btn-outline-secondary btn-sm mr-2">Enviar</button>
                  <button className="btn btn-outline-secondary btn-sm">Abrir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default EnvioCertificados;
