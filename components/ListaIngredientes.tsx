/* eslint-disable react/no-children-prop */
import { Children } from "react";
import AreaBranca from "./AreaBranca";

function ListaIngredientes() {
  return (
    <AreaBranca>
      <h3>Ingredientes:</h3>
      <ul>
        <li>2 xíc. de chá de farinha de trigo</li>
        <li>1 e 1/2 xíc. de chá de açúcar</li>
        <li>1 xíc de chá de leite</li>
        <li>1 xíc. de chá de óleo</li>
        <li>3 ovos</li>
        <li>1 col. de sopa de fermento</li>
        <li>1 col. de chá de essência de baunilha</li>
      </ul>
    </AreaBranca>
  );
}
export default ListaIngredientes;
