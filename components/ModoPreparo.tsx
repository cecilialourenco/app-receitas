import AreaBranca from "./AreaBranca";

type Props = {
  instructions: string;
};
function ModoPreparo({ instructions }: Props) {
  return (
    <AreaBranca>
      <h3>Modo de Preparo:</h3>
      <p>{instructions}</p>
    </AreaBranca>
  );
}
export default ModoPreparo;
