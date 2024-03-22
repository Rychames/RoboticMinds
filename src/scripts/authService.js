import axios from 'axios';

export const getApiURL = () => {
  return "https://roboticminds-a038b27b4466.herokuapp.com"
}
export const getUsersApiURL = () => {
  return "https://roboticminds-a038b27b4466.herokuapp.com/api/users/"
}
export const getRegisterApiURL = () => {
  return "https://roboticminds-a038b27b4466.herokuapp.com/api/users/register/"
}
export const getTokenApiURL = () => {
  return "https://roboticminds-a038b27b4466.herokuapp.com/token/"
}


export const getToken = async () => {
  try {
    let token = localStorage.getItem('token');
    return token ? token : null; 
  } catch (error) {
    console.error("Error while getting token:", error);
    return null;
  }
 };

export const loginUser = async (credentials, navigate) => {
  const tokenApiURL = getTokenApiURL();
  try {
    const response = await axios.post(tokenApiURL, credentials);

    navigate('/');
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
 }
};

export const registerUser = async (userData, navigate) => {
  const registerApiURL = getRegisterApiURL();
 try {
    const response = await axios.post(registerApiURL, userData);
    alert("Usuario Cadastrado!");

    navigate('/');
    return response.data;
 } catch (error) {
    console.error('Erro ao registrar:', error);
    throw error;
 }
};
