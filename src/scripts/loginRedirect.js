import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Função para verificar o status de login
export function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem('authToken') !== null;
  return isLoggedIn;
}

// Função para deslogar o usuário
export function logout() {
  localStorage.removeItem('authToken');
  window.location.href = '/';
}

// Componente para redirecionar o usuário com base no status de login
export function LoginRedirect() {
  const navigate = useNavigate();
  navigate('/');
  useEffect(() => {
    if (checkLoginStatus()) {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return null;
}

// Componente para deslogar o usuário e redirecioná-lo para a página inicial
export function LogoutRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/');
  }, [navigate]);

  return null;
}
