import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";

const Cart = () => {
  const ctx = useContext(CartContext);
  let costTotal = ctx.costTotal();
  let cantidadItem = ctx.qtysItems();

  if (cantidadItem === 0)
    return <Link to="/">Carrito vacìo... Ir a Comprar</Link>;
  return (
    <>
      <h1 classNameName="d-flex justify-content-center m-5">You cart</h1>

      <section style={{ textAlign: "center" }}>
        {ctx.cartList.map((item) => (
          <CartDetail
            key={item.id}
            id={item.id}
            name={item.name}
            qty={item.qty}
            description={item.description}
            imgPath={item.img}
          />
        ))}
        {console.log("Costo " + costTotal + " Cantidad " + cantidadItem)}
        <h5>Costo Tolta: ${costTotal} </h5>
        <h5>Cantidad de articulos: {cantidadItem} </h5>
        <section>
          <button type="button" className="btn btn-outline-success btn-lg">
            Comprar
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-lg"
            onClick={ctx.clear}
          >
            Borrar Carrito
          </button>
        </section>
      </section>
    </>
  );
};
export default Cart;
