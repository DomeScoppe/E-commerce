import { Link } from "react-router-dom";

const Item = ({ id, name, stock, cost, description, imgPath }) => {
  return (
    <>
      <div>
        <div className="card w-25 m-5 d-xl-inline-flex">
          <img className="card-img-top" src={imgPath} alt={description} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Precio $ {cost} </p>
          <p className="card-text">Stock: {stock} </p>
          <p className="card-text">Descripcion: {description}</p>
          <Link to={`/item/${id}`} style={{ textDecoration: "none" }}>
            {" "}
            Detalles{" "}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Item;
