import { Button, Col, Container, Form, Row } from "react-bootstrap";

const RegisterPage = () => {
  return (
    <>
      <h1 xs={12} className="text-center mt-3">
        Registrate
      </h1>
      <Container fluid className="mt-5" style={{ width: "50%" }}>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
            <Form.Label column sm={2}>
              Nombre
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Nombre de usuario" />
            </Col>
          </Form.Group>
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
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2} className="pb-10">
              Confirmar Contraseña
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Repetir Contraseña" />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Rol
              </Form.Label>
              <Col sm={10}>
                <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                  <option value="0">Elejir</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default RegisterPage;
