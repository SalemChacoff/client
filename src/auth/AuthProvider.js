import { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import roles from '../helpers/roles';

export const AuthContext = createContext();

//El auth provider es el que envia la informacion, de authenticacion del usuario
const AuthProvider = ({ children }) => {
    
    const history = useHistory()
    const [user, setUser] = useState(null);


    const login = (userCredentials, fromLocation) => {
        setUser({id: 1, name:"Anonimo", email:"anonimo@gmail.com", role: roles.admin});
        if(fromLocation){
            history.push(fromLocation);
        }
    }
    const logout = () => setUser(null);
    const updateUser = (data) => {
        setUser({
            ...user,
            ...data
        })
    }
    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role;

    const contextValue = {
        user,
        updateUser,
        isLogged,
        hasRole,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={contextValue}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider
