/* eslint-disable react/no-children-prop */
import { Ingredient } from "../lib/types";
import WhiteArea from "./WhiteArea";

type Props = {
  ingredients: Ingredient[];
};

export default function IngredientsList({ ingredients }: Props) {
  const ingredientList = ingredients.map((ingredient, index) => {
    return (
      <li key={index}>
        {ingredient.quantity} {ingredient.measure} de {ingredient.name}
      </li>
    );
  });
  return (
    <WhiteArea>
      <h3>Ingredientes:</h3>
      <ul>{ingredientList}</ul>
    </WhiteArea>
  );
};

