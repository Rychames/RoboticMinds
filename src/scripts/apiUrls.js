
//MainURL
export const getApiURL = () => {
    return "https://roboticminds.pythonanywhere.com"
}

//UsersAPI
export const getUsersApiURL = () => {
    return getApiURL() + "/api/users/"
}
export const getTokenApiURL = () => {
    return  getUsersApiURL() + "token/"
}
export const getFilterUsersApiURL = () => {
    return  getUsersApiURL() + "filter/"
}

//CertificateAPI
export const getCertificateApiURL = () => {
    return  getApiURL() + "/api/certificate/"
}
export const getUserCertificateApiURL = () => {
    return  getApiURL() + "/api/user_certificate/"
}
export const getCertificateValidateApiURL = () => {
    return  getApiURL() + "/api/certificate/validate/"
}
