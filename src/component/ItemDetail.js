import ItemCount from "./ItemCount";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(0);
  const context = useContext(CartContext);
  const onAdd = (qty) => {
    alert("En el carrito tengo esta cantidad de articulos: " + qty);
    setCount(qty);
    context.addItem(item, qty);
  };

  return (
    <>
      <div className="card w-25 m-5 d-xl-inline-flex">
        <img className="card-img-top" src={item.img} alt={item.description} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">$ {item.cost} </p>
        <p className="card-text">Stock: {item.stock} </p>
        <p className="card-text">Descripcion: {item.description}</p>
      </div>
      {count === 0 ? (
        <ItemCount ini={count} stock={item.stock} onAdd={onAdd} />
      ) : (
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <button type="button" className="btn btn-danger btn-lg">
            Ir al Carro
          </button>
        </Link>
      )}
    </>
  );
};
export default ItemDetail;
