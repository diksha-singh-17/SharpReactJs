import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_ITEM = [
    {
      id: "p1",
      price: 6,
      description: "A nice book",
      name: "Book1",
      quantity: 1,
    },
    {
      id: "p2",
      price: 16,
      description: "A nice small book",
      name: "Book2",
      quantity: 2,
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEM.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
