import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../lib/firebase";
import Card from "./Card";
import SelectableCards from "./SelectableCards";

type Props = {
  dia: string;
};

export default function Weekdays({ dia }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [userId, setUserId] = useState("");
  const [plans, plansLoading] = useCollection(
    query(
      collection(db, "Plans"),
      where("userId", "==", userId),
      where("day", "==", dia)
    )
  );
  const [recipes, recipesLoading] = useCollection(
    query(collection(db, "Recipes"), where("userId", "==", userId))
  );

  useEffect(() => {
    setUserId(localStorage.getItem("userId") as string);
  }, []);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const addCardsToDay = () => {
    selectedCards.forEach((id) => {
      const cardData = {
        day: dia,
        recipeId: id,
        userId: userId,
      };
      addDoc(collection(db, "Plans"), cardData);
      setSelectedCards([]);
    });
  };

  const removeCard = (id: string) => {
    deleteDoc(doc(db, "Plans", id));
  };

  const returnRecipe = (id: string) => {
    window.location.href = `./recipes/${id}`;
  };

  const handleSave = () => {
    addCardsToDay();
    closeModal();
  };

  let cardsList: React.ReactNode[] = [];
  if (!plansLoading && !recipesLoading) {
    if (!plans || !recipes) return <Spinner />;
    plans.docs.forEach((plan) => {
      console.log("loop para o plano", plan.id);
      console.log({ recipes });
      console.log(`procurando receita com o id ${plan.data().recipeId} `);
      const recipe = recipes.docs.find(
        (recipeDoc) => recipeDoc.id === plan.data().recipeId
      );
      console.log(recipe);
      if (!recipe) return;
      cardsList.push(
        <Card
          title={recipe.data().title}
          cover={recipe.data().cover}
          id={recipe.id}
          key={recipe.id}
          onDeleteClick={(e) => {e.stopPropagation(); removeCard(plan.id)}}
          onClick={(e) => {e.stopPropagation(); returnRecipe(recipe.id)}}
        />
      );
    });
  }

  return (
    <div
      style={{
        background: "#fff",
        minHeight: "300px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          height: "100%",
          width: "100px",
          textTransform: "uppercase",
          color: "#98D3DF",
        }}
      >
        {dia}

        <Button
          onClick={openModal}
          style={{
            backgroundColor: "transparent",
            color: "#98D3DF",
            textAlign: "center",
            cursor: "pointer",
            border: "none",
            fontSize: "30px",
          }}
        >
          +
        </Button>

        <Modal
          show={showModal}
          onHide={closeModal}
          size="lg"
          aria-labelledby="contained-modal-title-center"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Comidinhas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="search"
              placeholder="Busque sua comidinha:"
              className="mb-3"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <SelectableCards
              search={searchText}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Fechar
            </Button>
            <Button variant="success" onClick={handleSave}>
              Adicionar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          gap: "20px",
        }}
      >
        {cardsList}
      </div>
    </div>
  );
};
