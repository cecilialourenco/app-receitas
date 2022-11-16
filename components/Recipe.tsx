import { Ingredient } from "../lib/types";
import ListaIngredientes from "./ListaIngredientes";
import ModoPreparo from "./ModoPreparo";
import TituloImagem from "./TituloImagem";

type Props = {
  title: string;
  cover: string;
  id: string;
  instructions: string;
  ingredients: Ingredient[];
};

function Recipe({ title, cover, instructions, ingredients }: Props) {
  return (
    <div className="col">
      <TituloImagem cover={cover} title={title} />
      <ListaIngredientes ingredients={ingredients} />
      <ModoPreparo instructions={instructions} />
    </div>
  );
}

export default Recipe;
