type Props = {
  dia: string;
};

const DiaDaSemana = ({ dia }: Props) => {
  return (
    <div
      style={{
        border: "1px solid black",
        height: "300px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          borderRight: "1px solid black",
          height: "100%",
          width: "100px",
          background: "#98D3DF",
          textTransform: "uppercase",
          color: "white",
        }}
      >
        {dia}
      </div>
    </div>
  );
};

export default DiaDaSemana;
