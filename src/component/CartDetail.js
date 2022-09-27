import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartDetail = ({ id, name, qty, description, imgPath }) => {
  const ctx = useContext(CartContext);
  return (
    <div className="flex-item">
      <img className="cart2" src={imgPath} alt={description} />
      <div className="name2">
        <h5>Producto : {name}</h5>
        <h5>Cantidad: {qty} </h5>
        <h5 className="precio3">Precio: ${ctx.costXItem(id)} </h5>
        <button
          type="button"
          className="btn btn-outline-primary btn-lg"
          onClick={() => ctx.removeItem(id)}
        >
          X
        </button>
      </div>
    </div>
  );
};
export default CartDetail;
