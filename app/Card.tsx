
import CloseButton from "react-bootstrap/CloseButton";

type Props = {
  title: string;
  cover: string;
  id: string;
  onClick: (e: any, id: string) => void;
  isSelected?: boolean;
  onDeleteClick?: (e: any) => void;
};

export default function Card({ title, cover, id, onClick, isSelected, onDeleteClick }: Props) {
  
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
        className={`h-100 ${isSelected ? "selected" : ""}`}
        onClick={(e) => onClick(e, id)}
      >
        <CloseButton
          style={{
            position: "absolute",
            top: "2px",
            right: "2px",
            backgroundColor: "#fff",
          }}
          onClick={onDeleteClick}
  
        />

        <img
          style={{ objectFit: "cover", width: "100%", height: "250px" }}
          src={cover}
          className="card-img-top"
          alt=""
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
          {title}
        </h5>
      </div>
    </div>
  );
};
