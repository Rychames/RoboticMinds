import axios from 'axios';
import { getUsersApiURL, getToken } from './authService';



export const resquestUser = async (method, body=null) => {
  const usersApiURL = getUsersApiURL()
  const token = await getToken();
  const request = {};
  request.method = method;
  console.log(token)
  /*
  if (token === null) {
    return console.error('Token is null:', error);
  }

  request.headers.Authorization = `Bearer ${token}`;
  */

  if (method !== 'GET' && body === null) {return console.error('Body is null');}
  if (method !== 'GET'){request.body = JSON.stringify(body);}

  try {
    let response;

    switch (method) {
      case 'GET':
        response = await axios.get(`${usersApiURL}`, request);
        return response.data.results
        break;
      case 'POST':
        response = await axios.post(`${usersApiURL}`, body, request);
        break;
      case 'PUT':
        response = await axios.put(`${usersApiURL}`, body, request);
        break;
      case 'DELETE':
        const user_id = body.id;
        response = await axios.delete(`${usersApiURL}${user_id}`, request);
        break;
      default:
        return null;
    }
    return response.data;
  }catch (error) {
    console.error('Erro ao fazer o requestUser:', error);
    throw error;
  }
}

export const getUser = async () => {
  const response = await resquestUser('GET')
  return response;

};
