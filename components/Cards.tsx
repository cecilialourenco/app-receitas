import { collection } from "firebase/firestore";
import { db } from "../lib/firebase";
import Card from "./Card";
import { useCollection } from "react-firebase-hooks/firestore";
import { Button, Spinner } from "react-bootstrap";

function Cards() {
  const [recipes, recipesLoading, recipesError] = useCollection(
    collection(db, "Recipes"),
    {}
  );
  if (recipesError) {
    console.error(recipesError);
  }
  let cardList;
  if (recipesLoading) {
    return (
      <>
        <Button variant="warning" disabled>
          <Spinner animation={"border"} />
          Loading...
        </Button>
      </>
    );
  }
  if (recipes) {
    console.log(recipes);
    cardList = recipes.docs.map((doc) => {
      const data = doc.data();
      return (
        <Card title={data.title} cover={data.cover} id={doc.id} key={doc.id} />
      );
    });
  }

  return <div className="row row-cols-1 row-cols-md-3 g-4">{cardList}</div>;
}

export default Cards;
