import "./Card.css";

const Card = (props) => {
  const classes = "box " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default Card;
