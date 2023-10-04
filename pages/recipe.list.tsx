/* eslint-disable react/no-children-prop */
import { useRouter } from "next/router";
import Cards from "../app/Cards";
import Layout from "../app/Layout";

export default function List() {
  const router = useRouter();
  const { search } = router.query;
  const returnRecipe = (e: any, id: string) => {
    window.location.href = `./receitas/${id}`;
  };
  
  return (
    <>
      <Layout> 
        <h1
          style={{
            color: "#67A438",
            textAlign: "center",
          }}
        >
          Minhas Receitas {search && `com "${search}"`}
        </h1>
        <p style={{ textAlign: "center", color: "#aaa" }}>
          Clique em uma imagem e visualize a receita completa
        </p>
        <div 
          style={{
            display: "flex",
            gap: "20px",
            flexFlow: "row wrap",
            justifyContent: "center"}}
        >
          <Cards search={search as string} onClick={returnRecipe} />
        </div>
      </Layout>
    </>
  );
};