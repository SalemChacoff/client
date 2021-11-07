import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../helpers/routes";
import useAuth from "../auth/useAuth";

const NavSession = () => {
  const { logout } = useAuth();
  return (
    <>
      <Nav.Link as={NavLink} to={routes.account}>
        Mi cuenta
      </Nav.Link>
      <Nav.Link to={routes.account} onClick={logout}>
        Cerrar Sesion
      </Nav.Link>
    </>
  );
};

export default NavSession;
