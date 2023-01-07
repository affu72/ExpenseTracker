import "./Card.css";
function Card(props) {
  const cardClass = props.className + " card";
  return <div className={cardClass}>{props.children}</div>;
}
export default Card;
