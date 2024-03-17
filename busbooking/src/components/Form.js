import { useState } from "react";
import "./Form.css";
const Form = () => {
  const [formEntries, setFormEntries] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    selectValue: "",
  });

  const [previousName, setPreviousName] = useState("");
  const [previousEmail, setPreviousEmail] = useState("");
  const [previousPhone, setPreviousPhone] = useState("");
  const [previousOption, setPreviousOption] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormEntries([...formEntries, formData]);
    console.log(formData, formEntries);

    setFormData({
      name: "",
      email: "",
      tel: "",
      selectValue: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = () => {
    setFormData({
      name: previousName,
      email: previousEmail,
      tel: previousPhone,
      selectValue: previousOption,
    });
    setPreviousName(formData.name);
    setPreviousEmail(formData.email);
    setPreviousPhone(formData.tel);
  };

  const handleDeleteClick = (index) => {
    const updatedElements = [...formEntries];
    updatedElements.splice(index, 1);
    setFormEntries(updatedElements);
  };

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilterValue(value);
    if (value === "") {
      setFormEntries(formEntries);
    } else {
      const filtered = formEntries.filter((item) => item.selectValue === value);
      setFormEntries(filtered);
    }
  };
  return (
    <>
      <div>
        <h3>Bus BOOking</h3>
        <select
          name="selectValue"
          value={formData.selectValue}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="bus1">Bus1</option>
          <option value="bus2">Bus2</option>
          <option value="bus3">Bus3</option>
        </select>
        <form onSubmit={handleFormSubmit} className="form">
          <label htmlFor="name">User Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <label htmlFor="tel">Phone :</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={formData.tel}
            onChange={handleInputChange}
          />
          <select
            name="selectValue"
            value={formData.selectValue}
            onChange={handleInputChange}
          >
            <option value="all">All</option>
            <option value="bus1">Bus1</option>
            <option value="bus2">Bus2</option>
            <option value="bus3">Bus3</option>
          </select>
          <button type="submit" className="form__btn">
            Book
          </button>
        </form>

        <div>
          <ul className="items__all">
            {formEntries.map((entry, index) => (
              <li key={index}>
                {entry.name}
                {""} {entry.email} {""}
                {entry.tel}
                {""} {entry.selectValue}
                {""}
                <button onClick={handleEditClick}>Edit</button>{" "}
                <button onClick={() => handleDeleteClick(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Form;
