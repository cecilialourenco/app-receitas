import { Container, Row, Col } from "react-bootstrap";
import Aba from "./Aba";
import BarraNavegacao from "./BarraNavegacao";

type Props = {
  children: JSX.Element[];
};

function Layout({ children }: Props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Aba />
            {children}
          </Col>
        </Row>
      </Container>
      <BarraNavegacao />
    </>
  );
}

export default Layout;
