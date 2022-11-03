import Link from "next/link";
import { FormEvent, useState, useContext } from "react";
import { Button, Form, Toast } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import Aba from "../components/Aba";
import BarraNavegacao from "../components/BarraNavegacao";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [Loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    // if (name === "" || email === "" || password === "") {
    //   Toast.error("PREENCHA TODOS OS CAMPOS!");
    //   return;
    // }
    setLoading(true);

    let data = {
      name,
      email,
      password,
    };

    // await signUp(data);

    setLoading(false);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Aba />
          <BarraNavegacao />
          <h1 style={{ color: "#67A438" }}>Crie sua conta</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="text" placeholder="Digite o seu nome" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite o seu email" />
              <Form.Text className="text-muted">
                Nunca iremos compartilhar o seu email.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Form>
          <Button type="submit" style={{ background: "#98D3DF" }}>
            Cadastrar
          </Button>
          {"  "}
          <Link href="/login">
            <a>Já possui uma conta? Faça o login!</a>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
