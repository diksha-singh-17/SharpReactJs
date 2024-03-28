import classes from "./MealSummary.module.css";

const MealSummary = () => {
  return (
    <section className={classes.section}>
      <h3>Delicious Food, delivered to you!</h3>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealSummary;
