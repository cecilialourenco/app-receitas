import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import Aba from "../components/Aba";
import BarraNavegacao from "../components/BarraNavegacao";
import Link from "next/link";

function Login() {
  return (
    <Container>
      <Row>
        <Col>
          <Aba />
          <BarraNavegacao />
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  Nunca iremos compartilhar o seu email.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Lembrar-me" />
              </Form.Group>
              <Button
                className="mb-3"
                style={{ background: "#98D3DF" }}
                type="submit"
              >
                Entrar
              </Button>
            </Form>
            <Link href="/signup">
              <a>Não possui uma conta? Cadastre-se</a>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
