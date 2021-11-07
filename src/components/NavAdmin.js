import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../helpers/routes";

const NavAdmin = () => {
  return (
    <>
      <Nav.Link as={NavLink} to={routes.projects}>
        Proyectos
      </Nav.Link>
      <NavDropdown title="Admin">
        <NavDropdown.Item as={NavLink} to={routes.admin.users}>
          Usuarios
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default NavAdmin;
