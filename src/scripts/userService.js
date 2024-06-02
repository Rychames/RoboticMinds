import axios from 'axios';
import { getUsersApiURL, getToken, getFilterUsersApiURL } from './apiUrls';


export const paginate = (requestURL, page=null, page_size=null) => {
  if(page && page_size){
    requestURL = `${requestURL}?page=${page}&page_size=${page_size}`;
  }
  else{
    if (page){
      requestURL = `${requestURL}?page=${page}`;
    }
    if (page_size){
      requestURL = `${requestURL}?page_size=${page_size}`;
    }
  }
  return requestURL;
}

export const filterUser = async (filters, page=null, page_size=null) => {
  const usersApiURL = getFilterUsersApiURL();
  let requestURL = paginate(usersApiURL, page, page_size);

  const method = "POST";

  const request = {
    method,
    url: requestURL,
    data: filters,
    headers: {
      //'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  };
  try {
    const response = await axios(request);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer o FilterUser:', error);
    throw error;
  }

}


export const requestUser = async (method, body = null, page = null, page_size = null) => {
  const usersApiURL = getUsersApiURL();
  let requestURL = paginate(usersApiURL, page, page_size);
  
  //const token = getToken();
  
  //console.log("API URL aqui: " +  usersApiURL);
  //console.log("Token aqui: " +  token);

  //if (token == null) {
    // NÃO CONCLUIA A REQUISIÇÃO PORQUE O USUARIO NÃO ESTAVA LOGADO
    //console.error('Token is null');
    //return null;
  //}

  
  const request = {
    method,
    url: requestURL,
    headers: {
      //'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  };

  if (method !== 'GET' && !body) {
    console.error('Body is null for method:', method);
    return null;
  }

  if (body) {
    request.data = body;
  }

  try {
    const response = await axios(request);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer o requestUser:', error);
    throw error;
  }
};


export const getUser = async (page=null, page_size=null) => {
  return await requestUser('GET', null, page, page_size);
};


export const updateUser = async (user) => {
  return await requestUser('PUT', user);
};

export const getStudents = async (page=null, page_size=null) => {
  const filter = {
    level_access: "student"
  }
  return await filterUser(filter, page, page_size);
};

