import Card from "./Card";

function Cards() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <Card title="Bolo Simples" cover="/bolo.png" />
      <Card title="Brownie" cover="/brownie.png" />
      <Card title="Pão" cover="/pao.png" />
      <Card title="Cookie" cover="/cookie.png" />
    </div>
  );
}

export default Cards;
