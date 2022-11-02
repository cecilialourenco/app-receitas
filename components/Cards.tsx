import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import Card from "./Card";
import { useCollection } from "react-firebase-hooks/firestore";
import { Button, Spinner } from "react-bootstrap";

function Cards() {
  const [recipes, recipesLoading, recipesError] = useCollection(
    collection(db, "Recipes"),
    {}
  );
  let cardList;
  if (recipesLoading) {
    return (
      <>
        <Button variant="warning" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="lg"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </>
    );
  }
  if (recipes) {
    cardList = recipes.docs.map((doc) => {
      const data = doc.data();
      return <Card title={data.title} cover={data.cover} key={doc.id} />;
    });
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {cardList}
      <Card title="Brownie" cover="/brownie.png" />
      <Card title="Pão" cover="/pao.png" />
      <Card title="Cookie" cover="/cookie.png" />
    </div>
  );
}

export default Cards;
