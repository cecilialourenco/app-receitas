import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Aba from "../components/Aba";
import BarraNavegacao from "../components/BarraNavegacao";

function CadastrarReceita() {
  return (
    <Container>
      <Row>
        <Col>
          <Aba />
          <BarraNavegacao />
          <div>
            <main>
              <Form className="g-3">
                <Form.Group className="mb-3" controlId="title">
                  <FormControl
                    type="text"
                    placeholder="Digite o título da receita"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    type="text"
                    placeholder="Digite a categoria (Exemplos: dieta, final de semana, lanche, sobremesa...)"
                  />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control type="file" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Control placeholder="Digite o nome do ingrediente" />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Control
                      type="number"
                      aria-label="Text input with dropdown button"
                      placeholder="Quantidade"
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Select aria-label="Default select example">
                      <option>Escolha a medida</option>
                      <option value="1">xícara de chá</option>
                      <option value="2">colher de sopa</option>
                      <option value="3">colher de chá</option>
                      <option value="4">colher de café</option>
                      <option value="5">mililitros</option>
                      <option value="6">gramas</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Button
                  style={{ background: "#98D3DF" }}
                  type="submit"
                  className="mb-3"
                >
                  Adicionar
                </Button>

                <Form.Group className="mb-3" controlId="instructions">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Modo de preparo"
                  />
                </Form.Group>

                <Button style={{ background: "#98D3DF" }} type="submit">
                  Cadastrar
                </Button>
              </Form>
            </main>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CadastrarReceita;
