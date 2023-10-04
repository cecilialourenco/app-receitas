import { collection, query, where } from "firebase/firestore";
import { db } from "../lib/firebase";
import Card from "./Card";
import { useCollection } from "react-firebase-hooks/firestore";
import { Button, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

type Props = {
  search?: string;
  setSelectedCards: (arg0: string[]) => void;
  selectedCards: string[];
};

export default function SelectableCards({
  search = "",
  selectedCards,
  setSelectedCards,
}: Props) {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(localStorage.getItem("userId") as string);
  }, []);

  const [recipes, recipesLoading, recipesError] = useCollection(
    query(collection(db, "Recipes"), where("userId", "==", userId)),
    {}
  );

  const toggleCard = (cardId: string) => {
    if (selectedCards.includes(cardId)) {
      setSelectedCards(selectedCards.filter((c) => c != cardId));
    } else {
      setSelectedCards(selectedCards.concat(cardId));
    }
  };

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
    const visibleRecipes = recipes.docs.filter((recipe) =>
      recipe.data().title.toLowerCase().includes(search.toLowerCase())
    );
    cardList = visibleRecipes.map((doc) => {
      const data = doc.data();
      return (
        <Card
          title={data.title}
          cover={data.cover}
          id={doc.id}
          key={doc.id}
          onClick={() => toggleCard(doc.id)}
          isSelected={selectedCards.includes(doc.id)}
        />
      );
    });
  }

  return <div className="row row-cols-1 row-cols-md-3 g-4">{cardList}</div>;
};


