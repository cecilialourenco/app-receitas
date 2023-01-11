import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Card from "./Card";
import Cards from "./Cards";

type Props = {
  dia: string;
};

function DiaDaSemana({ dia }: Props) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  const [searchText, setSearchText] = useState("");
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
          flexDirection: "column",
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

        <Button
          onClick={openModal}
          style={{
            backgroundColor: "transparent",
            color: "white",
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
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Receitas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="search"
              placeholder="Digite o que você procura:"
              className="mb-3"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Cards search={searchText} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Fechar
            </Button>
            <Button variant="primary" onClick={closeModal}>
              Adicionar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div
        style={{
          width: "20%",
          height: "100%",
          display: "flex",
        }}
      ></div>
    </div>
  );
}

export default DiaDaSemana;
