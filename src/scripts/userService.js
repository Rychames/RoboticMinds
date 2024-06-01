import axios from 'axios';
import { getUsersApiURL, getToken } from './authService';



export const requestUser = async (method, body = null) => {
  const usersApiURL = getUsersApiURL();
  const token = await getToken();
  console.log("Token aqui: "+  token);

  if (token == null) {
    console.error('Token is null');
    return null;
  }

  const request = {
    method,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  if (method !== 'GET' && body === null) {
    console.error('Body is null');
    return null;
  }

  let response;

  try {
    switch (method) {
      case 'GET':
        response = await axios.get(usersApiURL, request);
        break;
      case 'POST':
        response = await axios.post(usersApiURL, body, request);
        break;
      case 'PUT':
        response = await axios.put(usersApiURL, body, request);
        break;
      case 'DELETE':
        const userId = body.id;
        response = await axios.delete(`${usersApiURL}/${userId}`, request);
        break;
      default:
        console.error('Invalid method');
        return null;
    }
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer o requestUser:', error);
    throw error;
  }
};

export const getUser = async () => {
  return await requestUser('GET');
};
