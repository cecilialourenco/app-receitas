/* eslint-disable react/no-children-prop */
import { useRouter } from "next/router";
import Cards from "../components/Cards";
import Layout from "../components/Layout";

function Lista() {
  const router = useRouter();
  const { search } = router.query;
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
        <Cards search={search as string} />
      </Layout>
    </>
  );
}

export default Lista;
