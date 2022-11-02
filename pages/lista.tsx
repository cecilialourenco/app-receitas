import { Col, Container, Row } from "react-bootstrap";
import Aba from "../components/Aba";
import BarraNavegacao from "../components/BarraNavegacao";
import Cards from "../components/Cards";

function Lista() {
  return (
    <Container>
      <Row>
        <Col>
          <Aba />
          <BarraNavegacao />
          <Cards />
        </Col>
      </Row>
    </Container>
  );
}

export default Lista;
