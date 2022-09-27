import NavBar from "./component/NavBar";
import ItemListContainer from "./component/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer";
import Cart from "./component/Cart";
import CartContextProvider  from "./component/CartContext";
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return( 
  <> 
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  </>
  )
}
export default App;
