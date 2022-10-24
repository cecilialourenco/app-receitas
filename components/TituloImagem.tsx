import { Image } from "react-bootstrap";
import AreaBranca from "./AreaBranca";

function TituloImagem() {
  return (
    <>
      <AreaBranca className="text-center">
        <h2>Bolo Simples</h2>
        <Image src="/bolo.png" alt="bolo" width={400} height={300} />
      </AreaBranca>
    </>
  );
}
export default TituloImagem;
