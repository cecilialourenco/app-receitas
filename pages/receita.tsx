/* eslint-disable react/jsx-key */
import { doc } from "firebase/firestore";
import { Col, Container, Row } from "react-bootstrap";
import { useDocument } from "react-firebase-hooks/firestore";
import Aba from "../components/Aba";
import BarraNavegacao from "../components/BarraNavegacao";
import Recipe from "../components/Recipe";
import { db } from "../lib/firebase";

function Receita() {
  const [recipe, recipeLoading, recipeError] = useDocument(
    doc(db, "Recipes", "yEKKCQ91T9AG3V8mpI9f"),
    {}
  );

  if (recipe) {
    var data = recipe.data();
    console.log(data);
  }
  return (
    <Container>
      <Row>
        <Col>
          <Aba />
          <BarraNavegacao />
          {data && recipe && (
            <Recipe
              title={data.title}
              cover={data.cover}
              id={recipe.id}
              instructions={data.instructions}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Receita;
