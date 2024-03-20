// authService.js
import axios from 'axios';

export const loginUser = async (credentials, navigate) => {
 try {
    // Substitua esta URL pela sua API de login
    const response = await axios.post('https://roboticminds.onrender.com/token/', credentials);

    navigate('/');
    return response.data;
 } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
 }
};

export const registerUser = async (userData, navigate) => {
 try {
    // Substitua esta URL pela sua API de registro
    const response = await axios.post('https://roboticminds.onrender.com/api/user/register/', userData);
    alert("Usuario Cadastrado!");

    // Aqui você pode definir a lógica para lidar com o sucesso do registro
    // Por exemplo, redirecionar o usuário para outra página
    navigate('/');
    return response.data;
 } catch (error) {
    console.error('Erro ao registrar:', error);
    throw error;
 }
};
