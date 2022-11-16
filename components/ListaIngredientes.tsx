/* eslint-disable react/no-children-prop */
import { Ingredient } from "../lib/types";
import AreaBranca from "./AreaBranca";

type Props = {
  ingredients: Ingredient[];
};

function ListaIngredientes({ ingredients }: Props) {
  const ingredientList = ingredients.map((ingredient, index) => {
    return (
      <li key={index}>
        {ingredient.quantity} {ingredient.measure} de {ingredient.name}
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
