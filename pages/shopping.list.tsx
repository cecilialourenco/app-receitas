import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { useForm, useFieldArray } from "react-hook-form";
import { FaRegTrashAlt } from "react-icons/fa";
import Layout from "../app/Layout";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Ingredient = {
  id?: string;
  name: string;
  quantity?: number;
};
type FormData = {
ingredients: Ingredient[]
instructions: string;
};

export default function ShoppingList() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { register, control, handleSubmit } = useForm<FormData>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });
  if (fields.length === 0) {
    append({
      name: "",
      quantity: undefined,
    });
  }
  async function handleFormSubmit(recipeData: FormData) {
      const userId = localStorage.getItem("userId");
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
              Monte sua lista de compras
            </h1>
            <Form className="g-3" ref={formRef}>
              <p style={{ fontWeight: "bold" }}>Itens</p>
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
                        placeholder="Digite o nome do item"
                        defaultValue={ingredient.name}
                        className="me-5 p-2 w-75"
                        {...register(`ingredients.${index}.name` as const)}
                      />
                      
                        <Form.Control
                          placeholder="Quantidade"
                          defaultValue={ingredient.quantity}
                          className="text-center"
                          {...register(
                            `ingredients.${index}.quantity` as const
                          )}
                        />
                

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
                    append({ quantity: undefined, name: "" })
                  }
                >
                  Adicionar
                </a>
              </fieldset>
              <p style={{ fontWeight: "bold" }}>Notas</p>
              <Form.Group className="mb-3" controlId="instructions">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Observações, dicas..."
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
