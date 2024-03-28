import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <h3>ReactMeals</h3>
        <div>
          <button className="btn">
            🛒 Your Cart <button>0</button>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
