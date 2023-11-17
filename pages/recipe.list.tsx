import { useRouter } from "next/router";
import Cards from "../app/Cards";
import Layout from "../app/Layout";

export default function List() {
  const router = useRouter();
  const { search } = router.query;
  const returnRecipe = (e: any, id: string) => {
    window.location.href = `./recipes/${id}`;
  };
  function shouldShowMessage() {
    if (search){
      return false;
    }
    return true;
  }
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
          {!search && `Cadastre uma nova receita ou clique em uma já existente para visualizá-la.`}
          {shouldShowMessage() && `Sua pesquisa não encontrou resultado.`}
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
