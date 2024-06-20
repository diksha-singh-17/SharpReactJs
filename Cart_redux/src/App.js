import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import React from "react";
import Notification from "./components/UI/Notifications";
import { useEffect } from "react";
import { showNotification } from "./store/uiSlice";

let isInitial = true;
function App() {
  const isVisible = useSelector((state) => state.ui.cartVisible);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        showNotification({
          title: "Loading...",
          status: "pending",
          message: "Sending cart data!",
        })
      );
      const response = await fetch(
        "https://nice-theater-338718-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending data failed");
      }

      dispatch(
        showNotification({
          title: "Success",
          status: "success..",
          message: "Sent cart data successfully!",
        })
      );
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((error) => {
      showNotification({
        title: "Error",
        status: "error",
        message: "Sending cart data failed!",
      });
    });
  }, [cart, dispatch]);
  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
