import WhiteArea from "./WhiteArea";

type Props = {
  cover: string;
  title: string;
};

export default function TitleImage({ title, cover }: Props) {
  return (
    <WhiteArea className="text-center">
      <h2>{title}</h2>
      <img
        style={{ objectFit: "cover" }}
        src={cover} alt="Logo"
        width={400}
        height={300}
      />    
    </WhiteArea>
  );
};
