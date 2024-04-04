import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const showHandler = () => {
    setIsCartShown(true);
  };
  const hideHandler = () => {
    setIsCartShown(false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onCloseCart={hideHandler} />}
      <Header onCartShow={showHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
