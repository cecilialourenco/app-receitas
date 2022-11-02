import AreaBranca from "./AreaBranca";

type Props = {
  cover: string;
  title: string;
};
function TituloImagem({ title, cover }: Props) {
  return (
    <AreaBranca className="text-center">
      <h2>{title}</h2>
      <img src={cover} width={400} height={300} />
    </AreaBranca>
  );
}
export default TituloImagem;
