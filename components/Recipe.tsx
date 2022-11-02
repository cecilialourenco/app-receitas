import ListaIngredientes from "./ListaIngredientes";
import ModoPreparo from "./ModoPreparo";
import TituloImagem from "./TituloImagem";

type Props = {
  title: string;
  cover: string;
  id: string;
  instructions: string;
};

function Recipe({ title, cover, id, instructions }: Props) {
  return (
    <div className="col">
      <TituloImagem cover={cover} title={title} />
      <ListaIngredientes recipeId={id} />
      <ModoPreparo instructions={instructions} />
    </div>
  );
}

export default Recipe;
