import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../helpers/routes";

const NavPublic = () => {
  return (
    <>
      <Nav.Link as={NavLink} to={routes.login}>
        Login
      </Nav.Link>
      <Nav.Link as={NavLink} to={routes.register}>
        Registrarse
      </Nav.Link>
    </>
  );
};

export default NavPublic;
