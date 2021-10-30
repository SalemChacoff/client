import { Redirect, Route, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

const PrivateRoute = ({hasRole: role, ...rest}) => {
    
    const location = useLocation()
    //console.log(location)

    //Se extrae el usuario, y si el usuario es nulo se redirije a login
    const { hasRole, isLogged } = useAuth();

    if(role && !hasRole(role)) return <Redirect to={routes.home} />
    
    if(!isLogged()) return <Redirect to={{pathname: routes.login, state: { from: location}}} />

    return <Route {...rest}/>
}

export default PrivateRoute
