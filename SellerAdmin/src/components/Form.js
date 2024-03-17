import { useState } from "react";
import "./Form.css";
const Form = () => {
  const [formEntries, setFormEntries] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    id: "",
    selectValue: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormEntries([...formEntries, formData]);
    console.log(formData, formEntries, formData.id);
    localStorage.setItem(formData.id, JSON.stringify(formData));
    setFormData({
      name: "",
      price: "",
      id: "",
      selectValue: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeleteClick = (index, id) => {
    const updatedElements = [...formEntries];
    updatedElements.splice(index, 1);
    setFormEntries(updatedElements);
    localStorage.removeItem(id);
  };

  return (
    <>
      <div>
        <h1>
          <b>Seller Admin</b>
        </h1>

        <form onSubmit={handleFormSubmit} className="form">
          <label htmlFor="id">Product Id :</label>
          <input
            type="number"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
          />
          <label htmlFor="name">Product Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label htmlFor="price">Selling Price Rs:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />

          <label htmlFor="Choose a Category">Choose a Category :</label>
          <select
            name="selectValue"
            value={formData.selectValue}
            onChange={handleInputChange}
          >
            <option value="all">All</option>
            <option value="Skincare">Skincare</option>
            <option value="Food">Food</option>
            <option value="Electronics">Electronics</option>
          </select>
          <button type="submit" className="form__btn">
            Add Product
          </button>
        </form>

        <div>
          <div>
            <h1>
              <u>Products :</u>
            </h1>
            <div>
              <h2>Food</h2>
              <ul className="items__all">
                {formEntries.map((entry, index) => (
                  <>
                    {entry.selectValue === "Food" && (
                      <li key={index}>
                        {entry.id}
                        {""} {entry.name} {""}
                        {entry.price}
                        {""} {entry.selectValue}
                        {""}
                        <button
                          onClick={() => handleDeleteClick(index, entry.id)}
                        >
                          Delete
                        </button>{" "}
                      </li>
                    )}
                  </>
                ))}
              </ul>
            </div>
            <div>
              {" "}
              <h2>Skincare</h2>
              <ul className="items__all">
                {formEntries.map((entry, index) => (
                  <>
                    {entry.selectValue === "Skincare" && (
                      <li key={index}>
                        {entry.id}
                        {""} {entry.name} {""}
                        {entry.price}
                        {""} {entry.selectValue}
                        {""}
                        <button
                          onClick={() => handleDeleteClick(index, entry.id)}
                        >
                          Delete
                        </button>{" "}
                      </li>
                    )}
                  </>
                ))}
              </ul>
            </div>
            <div>
              {" "}
              <h2>Electronics</h2>
              <ul className="items__all">
                {formEntries.map((entry, index) => (
                  <>
                    {entry.selectValue === "Electronics" && (
                      <li key={index}>
                        {entry.id}
                        {""} {entry.name} {""}
                        {entry.price}
                        {""} {entry.selectValue}
                        {""}
                        <button
                          onClick={() => handleDeleteClick(index, entry.id)}
                        >
                          Delete
                        </button>{" "}
                      </li>
                    )}
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
