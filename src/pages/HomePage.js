import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../helpers/routes";
import taskmanager from "../img/task-manager.svg"

const HomePage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={{span: 12}} md={{span: 6}} className="mb-5">
          <h2>Bienvenido</h2>
          <p>Aquí podras gestionar tus tareas</p>
          <div>
            <Link to={routes.login}>Ingresa</Link> o{" "}
            <Button as={Link} to={routes.register}
            className="ml-1">
              Crea una cuenta
            </Button>
 
          </div>
        </Col>
        <Col>
            <img 
                className="img-fluid"
                src={taskmanager} 
                alt="task-manager"
            />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
