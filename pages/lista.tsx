/* eslint-disable react/no-children-prop */
import Cards from "../components/Cards";
import Layout from "../components/Layout";

function Lista() {
  return (
    <>
      <Layout>
        <h1
          style={{
            color: "#67A438",
            textAlign: "center",
          }}
        >
          Minhas Receitas
        </h1>
        <p style={{ textAlign: "center", color: "#aaa" }}>
          Clique em uma imagem e visualize a receita completa
        </p>
        <Cards search={""} />
      </Layout>
    </>
  );
}

export default Lista;
