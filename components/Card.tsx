/* eslint-disable @next/next/no-img-element */
type Props = {
  title: string;
  cover: string;
};

function Card({ title, cover }: Props) {
  return (
    <div className="col">
      <a href="#" style={{ textDecoration: "none" }}>
        <div className="card h-100">
          <img
            src={cover}
            className="card-img-top"
            alt=""
            width={100}
            height={250}
          />
          <div className="card-body">
            <h5 className="card-title text-center" style={{ color: "#EC9131" }}>
              {title}
            </h5>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
