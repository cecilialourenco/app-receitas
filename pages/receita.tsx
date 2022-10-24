import { NextPage } from "next";
import { Col, Container, Row } from "react-bootstrap";
import Aba from "../components/Aba";
import BarraNavegacao from "../components/BarraNavegacao";
import ListaIngredientes from "../components/ListaIngredientes";
import ModoPreparo from "../components/ModoPreparo";
import TituloImagem from "../components/TituloImagem";

const Receita: NextPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Aba />
          <BarraNavegacao />
          <TituloImagem />
          <ListaIngredientes />
          <ModoPreparo />
        </Col>
      </Row>
    </Container>
  );
};

export default Receita;
