import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem('authToken') !== null;
  console.log("Status de Login: " + isLoggedIn)
  return isLoggedIn;
}


export function logout() {
  localStorage.removeItem('authToken');
  console.log("Fez logout! Token: " + localStorage.getItem('authToken'))
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

//window.addEventListener('beforeunload', function() {
//  localStorage.removeItem('authToken');
//});

// Componente para deslogar o usuário e redirecioná-lo para a página inicial
export function LogoutRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/');
  }, [navigate]);

  return null;
}
