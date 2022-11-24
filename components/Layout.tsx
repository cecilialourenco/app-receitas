import { Container, Row, Col } from "react-bootstrap";
import Aba from "./Aba";
import BarraNavegacao from "./BarraNavegacao";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <BarraNavegacao />
      <Container>
        <Row>
          <Col>
            <Aba />
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
