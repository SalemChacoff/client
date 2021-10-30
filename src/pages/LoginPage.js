import { useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth"

const userCredentials = {};

const LoginPage = () => {
    
    const location = useLocation();
    console.log(location);
    const { login } = useAuth()

    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={() => login(userCredentials, location.state?.from)}>Iniciar sesion</button>
        </div>
    )
}

export default LoginPage
