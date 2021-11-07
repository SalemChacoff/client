import { useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "../helpers/routes";
import NavAdmin from "./NavAdmin";
import NavPublic from "./NavPublic";
import NavSession from "./NavSession";

const Navigation = () => {
  const { user } = useAuth();

  console.log(user);
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Navbar.Brand as={NavLink} to={routes.home} className="ms-3">
        Menu de navegacion
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="ms-3">
        <Nav className="me-auto">{}</Nav>
        <Nav>
          {user === null ? (
            <NavPublic />
          ) : user.role === "admin" ? (
            <>
              <NavAdmin />
              <NavSession />
            </>
          ) : (
            <NavSession />
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
