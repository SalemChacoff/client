import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

const userCredentials = {};

const LoginPage = () => {
  const location = useLocation();
  console.log(location);
  const { login } = useAuth();

  const loginIn = (e) => {
    e.preventDefault();
    login(userCredentials, location.state?.from);
  };

  return (
    <>
      <h1 xs={12} className="text-center mt-3">
        LoginPage
      </h1>
      <Container fluid className="mt-5" style={{ width: "50%" }}>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Correo Electronico" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Contraseña
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Contraseña" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onClick={loginIn}>
                Sign in
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default LoginPage;
