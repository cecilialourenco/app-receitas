import { Container, Row, Col } from "react-bootstrap";
import Aba from "./Aba";
import BarraNavegacao from "./BarraNavegacao";
import Footer from "./Footer";

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
      <Footer />
    </>
  );
}

export default Layout;
