import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className={"expense-item"}>
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>
            {`${props.title.toUpperCase()} by `}
            <span>
              {props.person
                ?.split()
                .map((char, i) => (i === 0 ? char.toUpperCase() : char))
                .join() || ""}
            </span>
          </h2>
          <div className="expense-item__price">&#8377; {props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
