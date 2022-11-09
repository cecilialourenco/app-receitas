import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Calendar from "react-calendar";
import Aba from "../components/Aba";
import BarraNavegacao from "../components/BarraNavegacao";

function PlanejamentoSemanal() {
  const [value, onChange] = useState(new Date());

  return (
    <Container>
      <Row>
        <Col>
          <Aba />
          <BarraNavegacao />
          <div>
            <Calendar onChange={onChange} value={value} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PlanejamentoSemanal;
