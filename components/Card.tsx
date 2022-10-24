/* eslint-disable @next/next/no-img-element */
function Card({ title, cover }) {
  return (
    <div className="col">
      <a href="#">
        <div className="card h-100">
          <img
            src={cover}
            className="card-img-top"
            alt=""
            width={400}
            height={300}
          />
          <div className="card-body">
            <h5 className="card-title text-center">{title}</h5>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
