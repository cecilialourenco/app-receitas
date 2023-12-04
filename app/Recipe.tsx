import { Ingredient } from "../lib/types";
import IngredientsList from "./IngredientsList";
import Directions from "./Directions";
import TitleImage from "./TitleImage";

type Props = {
  title: string;
  cover?: string;
  id: string;
  instructions: string;
  ingredients: Ingredient[];
};

export default function Recipe({ title, cover, instructions, ingredients }: Props) {
  return (
    <div className="col">
      <TitleImage cover={cover} title={title} />
      <IngredientsList ingredients={ingredients} />
      <Directions instructions={instructions} />
      <button
        className="button"
      >
        Editar receita
      </button>
    </div>
    
  );
};
