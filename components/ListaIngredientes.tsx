/* eslint-disable react/no-children-prop */
import { collection } from "firebase/firestore";
import { Children } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../lib/firebase";
import AreaBranca from "./AreaBranca";

type Props = {
  recipeId: string;
};
function ListaIngredientes({ recipeId }: Props) {
  const [ingredients, ingredientsLoading, ingredientsError] = useCollection(
    collection(db, "Recipes", recipeId, "Ingredients"),
    {}
  );
  if (ingredientsLoading) {
    return (
      <>
        <Button variant="warning" disabled>
          <Spinner animation={"border"} />
          Loading...
        </Button>
      </>
    );
  }
  const ingredientList = ingredients?.docs.map((ingredient) => {
    const data = ingredient.data();
    return (
      <li key={ingredient.id}>
        {data.quantity} {data.measure} de {data.name}
      </li>
    );
  });
  return (
    <AreaBranca>
      <h3>Ingredientes:</h3>
      <ul>{ingredientList}</ul>
    </AreaBranca>
  );
}
export default ListaIngredientes;
