import { collection, query, where, deleteDoc,
  doc, } from "firebase/firestore";
import { db } from "../lib/firebase";
import Card from "./Card";
import CardNewRecipe from "./CardNewRecipe";
import { useCollection } from "react-firebase-hooks/firestore";
import { Button, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

type Props = {
  search?: string;
  onClick: (e: any, id: string) => void;
};

export default function Cards({ search = "", onClick }: Props) {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(localStorage.getItem("userId") as string);
  }, []);
  
  const [recipes, recipesLoading, recipesError] = useCollection(
    query(collection(db, "Recipes"), where("userId", "==", userId)),
    {}
  );
  if (recipesError) {
    console.error(recipesError);
  }
  const removeCard = (id: string) => {
    deleteDoc(doc(db, "Recipes", id));
  };
  
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
    var visibleRecipes = recipes.docs.filter((recipe) =>
      recipe.data().title.toLowerCase().includes(search.toLowerCase())
    );
    cardList = visibleRecipes.map((doc) => {
      const data = doc.data();
      return (
        <>
        <Card
          title={data.title}
          cover={data.cover}
          id={doc.id}
          key={doc.id}
          onClick={onClick} 
          onDeleteClick={(e) => {e.stopPropagation(); removeCard(doc.id)}}
        />
      </>
      );
    });
  }
  function shouldShowNewRecipeCard() {
    if (!search){
      return true;
    }
    if (visibleRecipes.length === 0){
      return true;
    }
    return false;
  }
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexFlow: "row wrap",
        justifyContent: "center",
      }}
    >
      {shouldShowNewRecipeCard() && <CardNewRecipe />}
      {cardList}
    </div>
  );
};
