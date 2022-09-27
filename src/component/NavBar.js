import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-xxl navbar-light bg-primary d-flex">
          <div className="container-fluid d-flex">
            <Link to={"/"}>
              {" "}
              <p className="navbar-brand">$HOP</p>
            </Link>

            <CartWidget />
            <div
              className="collapse navbar-collapse d-flex justify-content-center"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav d-flex justify-content-evenly">
                <Link to={"/category/1"}>
                  {" "}
                  <p className="navbar-brand">Alcohol</p>
                </Link>
                <Link to={"/category/2"}>
                  {" "}
                  <p className="navbar-brand">Bebidas</p>
                </Link>
                <Link to={"/category/3"}>
                  {" "}
                  <p className="navbar-brand">Licores</p>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
