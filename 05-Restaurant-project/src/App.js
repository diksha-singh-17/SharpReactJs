import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const showHandler = () => {
    setIsCartShown(true);
  };
  const hideHandler = () => {
    setIsCartShown(false);
  };

  return (
    <>
      {isCartShown && <Cart onCloseCart={hideHandler} />}
      <Header onCartShow={showHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
