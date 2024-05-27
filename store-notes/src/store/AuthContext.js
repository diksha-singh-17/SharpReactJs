import React, { useState, useContext } from "react";

const AuthContext = React.createContext({
  notes: [],
  addNote: (item) => {},
  deleteNote: () => {},
  numbers: 0,
});
export const AuthContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const authcntxt = useContext(AuthContext);
  const addNotesHandler = (item) => {
    setItems([...items, item]);
    console.log("inside add notes function", items);
  };
  const deleteItemsHandler = (id) => {
    console.log(id, items);
    setItems(items.filter((x) => x.id !== id));
  };
  const lengthOfItems = items.length();
  const notesContext = {
    notes: items,
    addNote: addNotesHandler,
    deleteNote: deleteItemsHandler,
    numbers: lengthOfItems,
  };
  {
    console.log(authcntxt);
  }
  return (
    <AuthContext.Provider value={notesContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
