type Props = {
  id: string;
  onClick: (e: any) => void;
};

export default function Card({ onClick }: Props) {
  return (
    <div className="d-flex">
      <div
        style={{
          width: "250px",
          height: "100%",
          border: "1px solid lightgray",
          position: "relative",
          cursor: "pointer",
        }}
        onClick={(e) => onClick(e)}
      >
        
        <img
          style={{ objectFit: "cover", width: "100%", height: "250px" }}
          src="/nova-receita.png"
          alt="logo"
        />
        <h5
          style={{
            color: "#EC9131",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          Cadastrar nova receita
        </h5>
      </div>
    </div>
  );
};
