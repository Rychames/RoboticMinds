import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Hook personalizado para lidar com o login do usuário
const LoginRequest = () => {
    const navigate = useNavigate();

    const LoginRequest = async (user) => {
        console.log(user);
        try {
            const response = await axios.post('https://roboticminds.onrender.com/token/', user);
            const data = response.data;

            if (data.access && data.refresh) {
                localStorage.setItem('authToken', data.access);
                console.log("Foi");
                navigate('/'); // Redirecionando o usuário após o login bem-sucedido
            } else {
                throw new Error('Tokens de autenticação não encontrados na resposta');
            }

        } catch (error) {
            alert('erro ao fazer login');
            console.error('Erro ao fazer login:', error);
            if (error.response) {
                console.error('Detalhes do erro:', error.response.data);
            }
        }
    };

    return LoginRequest;
};

export default LoginRequest;
