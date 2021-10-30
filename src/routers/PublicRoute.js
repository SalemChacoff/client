import { Redirect, Route } from 'react-router-dom'
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

const PublicRoute = (props) => {
    
    //Se extrae el usuario, y si el usuario es nulo se redirije a login
    const { isLogged } = useAuth();

    if(isLogged()) return <Redirect to={routes.projects} />

    return (
        <div>
            <Route {...props}/>
        </div>
    )
}

export default PublicRoute
