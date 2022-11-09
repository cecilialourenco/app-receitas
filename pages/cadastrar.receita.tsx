/* eslint-disable jsx-a11y/alt-text */
import { useRef } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm, useFieldArray } from "react-hook-form";
import Aba from "../components/Aba";
import BarraNavegacao from "../components/BarraNavegacao";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { useDropzone } from "react-dropzone";

function CadastrarReceita() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { register, control } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });
  if (fields.length === 0) {
    append({
      name: "",
      quantity: "",
      measure: "",
    });
  }

  function DropzoneWithoutDrag(_props: any) {
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
      noDrag: true,
    });
    if (acceptedFiles.length > 0) {
      const url = URL.createObjectURL(acceptedFiles[0]);
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={url}
          style={{
            height: "400px",
          }}
        />
      );
    }

    return (
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <span>
            <FiUpload
              style={{
                fontSize: "30",
                color: "#FFF",
                width: "100%",
                height: "150px",
                marginBottom: "1rem",
                borderRadius: "0.3rem",
                display: "flex",
                justifyContent: "Center",
                alignItems: "center",
                cursor: "pointer",
              }}
            />
          </span>
          <p>Escolha uma foto para a sua receita</p>
        </div>
      </section>
    );
  }

  function handleFormSubmit() {
    if (!formRef.current) {
      return false;
    }
    const formData = Object.fromEntries(
      new FormData(formRef.current).entries()
    );
    console.log(formData);
  }
  return (
    <Container>
      <Row>
        <Col>
          <Aba />
          <BarraNavegacao />
          <div>
            <main>
              <Form className="g-3" ref={formRef}>
                <Form.Group className="mb-3">
                  <FormControl
                    type="text"
                    placeholder="Digite o título da receita"
                    name="title"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Digite a categoria (Exemplos: dieta, final de semana, lanche, sobremesa...)"
                    name="category"
                  />
                </Form.Group>
                <div className="mb-3 p-2 text-center">
                  <DropzoneWithoutDrag />
                </div>

                <fieldset className="border border-success mb-3 p-2 ">
                  {fields.map((ingredient, index) => {
                    return (
                      <div
                        className="d-flex mb-3 justify-content-around"
                        key={ingredient.id}
                      >
                        <Form.Control
                          placeholder="Digite o nome do ingrediente"
                          defaultValue={ingredient.name}
                          className="me-5 p-2 w-75"
                          {...register(`ingredients.${index}.name`)}
                        />
                        <InputGroup>
                          <Form.Control
                            placeholder="quantidade"
                            defaultValue={ingredient.quantity}
                            className="text-center"
                            {...register(`ingredients.${index}.quantity`)}
                          />
                          <Form.Select
                            aria-label="Default select example"
                            defaultValue={ingredient.measure}
                            {...register(`ingredients.${index}.measure`)}
                          >
                            <option selected>Escolha a medida</option>
                            <option value={"xícara"}>xícara de chá</option>
                            <option value={"colher de sopa"}>
                              colher de sopa
                            </option>
                            <option value={"colher de sobremesa"}>
                              colher de sopa
                            </option>
                            <option value={"colher de chá"}>
                              colher de chá
                            </option>
                            <option value={"colher de café"}>
                              colher de café
                            </option>
                            <option value={"ml"}>mililitros</option>
                            <option value={"g"}>gramas</option>
                            <option value={"unidade(s)"}>unidade(s)</option>
                          </Form.Select>
                        </InputGroup>

                        <a onClick={() => remove(index)}>
                          <FaRegTrashAlt
                            fontSize="1.5rem"
                            className="ms-2"
                            style={{
                              color: "Tomato",
                            }}
                          />
                        </a>
                      </div>
                    );
                  })}

                  <Button
                    style={{ background: "#98D3DF" }}
                    className="mb-3"
                    onClick={() =>
                      append({ quantity: null, name: null, measure: null })
                    }
                  >
                    Adicionar ingrediente
                  </Button>
                </fieldset>

                <Form.Group className="mb-3" controlId="instructions">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Modo de preparo"
                    name="instructions"
                  />
                </Form.Group>

                <Button
                  style={{ background: "#98D3DF" }}
                  onClick={handleFormSubmit}
                >
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
