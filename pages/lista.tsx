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
          <h1>Minhas Receitas</h1>
          <Cards />
        </Col>
      </Row>
    </Container>
  );
}

export default Lista;
