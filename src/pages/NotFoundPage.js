import { Container, Row, Col} from "react-bootstrap"
import { Link } from "react-router-dom"
import routes from "../helpers/routes";
import error404 from "../img/404-not-found.svg"

const NotFoundPage = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col md={{ span: 6, offset: 3}} className="text-center">
                    <img 
                    style={{width: "100%"}}
                    src={error404} alt="error-404"/>
                <h2>¿Te has perdido?</h2>
                <p>Vuelve al <Link to={routes.home}>Inicio</Link></p>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFoundPage