import "./App.css";
import { useContext, useState } from "react";
import Button from "./components/UI/Button";
import classes from "./components/UI/Button.module.css";
import ListItem from "./components/Layout/ListItem";
import ListForm from "./components/Layout/ListForm";
import CartContext from "./store/CartContext";
function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const itemsInModal = useContext(CartContext);

  const lengthModal = itemsInModal.items.length;
  const showHandler = () => {
    setIsCartShown(true);
  };
  const hideHandler = () => {
    setIsCartShown(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student manager</h1>
        <p>All Students:{lengthModal || 0}</p>
        <Button type="submit" className={classes.btn} onClick={showHandler}>
          AddNewUser
        </Button>
        <main>
          {isCartShown && <ListForm onCloseCart={hideHandler} />}

          <ListItem onCloseCart={showHandler} />
        </main>
      </header>
    </div>
  );
}

export default App;
