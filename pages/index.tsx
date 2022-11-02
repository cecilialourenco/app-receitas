import { NextPage } from "next";
import { Col, Container, Row } from "react-bootstrap";
import Aba from "../components/Aba";
import BarraNavegacao from "../components/BarraNavegacao";

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Aba />
          <BarraNavegacao />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
