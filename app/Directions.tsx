import WhiteArea from "./WhiteArea";

type Props = {
  instructions: string;
};
export default function Directions({ instructions }: Props) {
  return (
    <WhiteArea>
      <h3>Modo de Preparo:</h3>
      <p>{instructions}</p>
    </WhiteArea>
  );
};
