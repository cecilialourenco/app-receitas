export default function CardNewRecipe() {
  return (
    <div className="d-flex">
      <a
        style={{
          width: "250px",
          height: "100%",
          border: "1px solid lightgray",
          position: "relative",
          cursor: "pointer",
          textDecoration: "none"
        }}
        href='/register.recipe'
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
      </a>
    </div>
  );
};
