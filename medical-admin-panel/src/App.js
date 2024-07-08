import { useContext } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import CartContext from "./store/CartContext";
import Browse from "./components/Browse";
import Products from "./components/Products";

function App() {
  const { isCartVisible } = useContext(CartContext);

  return (
    <div className="App">
      <Header />
      <div className="flex items-center justify-center">
        {isCartVisible && <Cart />}
      </div>
      <Browse />
      <Products />
    </div>
  );
}

export default App;
