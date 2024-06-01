import axios from 'axios';


export const getApiURL = () => {
  return "https://roboticminds.pythonanywhere.com/"
}
export const getUsersApiURL = () => {
  return getApiURL() + "api/users/"
}
export const getTokenApiURL = () => {
  return  getUsersApiURL() + "/token/"
}

export const getCertificateApiURL = () => {
  return  getApiURL() + "api/certificate/"
}
export const getUserCertificateApiURL = () => {
  return  getUsersApiURL() + "api/user_certificate/"
}

export const getCertificateValidateApiURL = () => {
  return  getUsersApiURL() + "api/certificate/validate/"
}


export const getToken = () => {
  try {
    let token = localStorage.getItem('token');
    console.log(token);
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

export const registerUser = async (formData, navigate) => {
  const registerApiURL = getUsersApiURL();
 try {
    const response = await axios.post(registerApiURL, formData);

    navigate('/');
    return response.data;
  } catch (error) {
    console.error('Erro ao registrar:', error);
    throw error;
  }
};
