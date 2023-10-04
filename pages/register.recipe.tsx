import { useEffect, useRef, useState } from "react";
import { Image, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm, useFieldArray } from "react-hook-form";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { useDropzone } from "react-dropzone";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../lib/firebase";
import Layout from "../app/Layout";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CloseButton from "react-bootstrap/CloseButton";

type Ingredient = {
  id?: string;
  name: string;
  quantity?: number;
  measure: string;
};
type FormData = {
  title: string;
  category: string;
  ingredients: Ingredient[];
  instructions: string;
};

export default function RegisterRecipe() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { register, control, handleSubmit, setFocus } = useForm<FormData>();
  const [cover, setCover] = useState<any>([]);
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);
  
  if (fields.length === 0) {
    append({
      name: "",
      quantity: undefined,
      measure: "",
    });
  }

  const convertBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function DropzoneWithoutDrag(_props: any) {
    const { getRootProps, getInputProps } = useDropzone({
      noDrag: true,
      multiple: false,
      onDrop: (file) => setCover(file),
    });
    if (cover.length > 0) {
      const url = URL.createObjectURL(cover[0]);
      return (
        <div style={{ position: "relative" }}>
          <CloseButton
            style={{
              position: "absolute",
              top: "2px",
              right: "2px",
              backgroundColor: "#fff",
            }}
            onClick={() => setCover(false)}
          />
          <Image
            src={url}
            style={{ objectFit: "cover", width: "100%", height: "450px" }}
            className="card-img-top"
            alt=""
          />
        </div>
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
                color: "#dcdcdc",
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
          <p style={{ fontWeight: "bold" }}>
            Escolha uma foto para a sua receita
          </p>
        </div>
      </section>
    );
  }

  async function handleFormSubmit(recipeData: FormData) {
    const userId = localStorage.getItem("userId");
    const imageData = await convertBase64(cover[0]);
    const newRecipe = { ...recipeData, cover: imageData, userId };
    console.log(newRecipe);
    addDoc(collection(db, "Recipes"), newRecipe).then(() => {
      window.location.reload();
    });
  }
  return (
    <>
      <Layout>
        <div>
          <main>
            <h1
              style={{
                color: "#67A438",
                textAlign: "center",
              }}
            >
              Cadastre sua receita
            </h1>
            <p style={{ textAlign: "center", color: "#aaa" }}>
              E a utilize para montar seu cardápio semanal
            </p>
            <Form className="g-3" ref={formRef}>
              <p style={{ fontWeight: "bold" }}>Título</p>
              <Form.Group className="mb-3">
                <input
                  autoFocus
                  className="form-control"
                  type="text"
                  placeholder="Digite o título da receita"
                  {...register(`title` as const)}
                />
              </Form.Group>
              <p style={{ fontWeight: "bold" }}>Categoria</p>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Digite a categoria (Exemplos: dieta, final de semana, lanche, sobremesa...)"
                  {...register(`category` as const)}
                />
              </Form.Group>
              <div className="mb-3 p-2 text-center">
                <DropzoneWithoutDrag />
              </div>
              <p style={{ fontWeight: "bold" }}>Ingredientes</p>
              <fieldset
                className="border bg-white mb-3 p-2 "
                style={{ borderRadius: "5px" }}
              >
                {fields.map((ingredient, index) => {
                  return (
                    <div
                      className="d-flex mb-3 justify-content-around"
                      key={ingredient.id}
                    >
                      <Form.Control
                        autoFocus={false}
                        placeholder="Digite o nome do ingrediente"
                        defaultValue={ingredient.name}
                        className="me-5 p-2 w-75"
                        {...register(`ingredients.${index}.name` as const)}
                      />
                      <InputGroup>
                        <Form.Control
                          placeholder="Quantidade"
                          defaultValue={ingredient.quantity}
                          className="text-center"
                          {...register(
                            `ingredients.${index}.quantity` as const
                          )}
                        />
                        <Form.Select
                          aria-label="Default select example"
                          defaultValue={ingredient.measure}
                          {...register(`ingredients.${index}.measure` as const)}
                        >
                          <option value="">Escolha a medida</option>
                          <option value={"xícara"}>xícara de chá</option>
                          <option value={"colher de sopa"}>
                            colher de sopa
                          </option>
                          <option value={"colher de sobremesa"}>
                            colher de sobremesa
                          </option>
                          <option value={"colher de chá"}>colher de chá</option>
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

                <a
                  className="button mb-3"
                  onClick={() =>
                    append({ quantity: undefined, name: "", measure: "" })
                  }
                >
                  Adicionar
                </a>
              </fieldset>
              <p style={{ fontWeight: "bold" }}>Modo de preparo</p>
              <Form.Group className="mb-3" controlId="instructions">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Digite aqui as instruções de preparo"
                  {...register(`instructions` as const)}
                />
              </Form.Group>

              <button
                className="button"
                onClick={handleSubmit(handleFormSubmit)}
              >
                Cadastrar
              </button>
              <ToastContainer />
            </Form>
          </main>
        </div>
      </Layout>
    </>
  );
};
