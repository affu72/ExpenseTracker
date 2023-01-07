import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../expenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("select year");

  const filterChangehandler = function (selectedValue) {
    setSelectedYear(selectedValue);
  };

  let filteredExpense = props.items;

  filteredExpense =
    selectedYear !== "select year"
      ? (filteredExpense = props.items.filter(
          (item) => +selectedYear === new Date(item.date).getFullYear()
        ))
      : filteredExpense;

  return (
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={filterChangehandler} year={props.year} />
      {/* {filteredExpense.length === 0 && <p>No Item Found</p>}
      {filteredExpense.length > 0 &&
        filteredExpense.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              person={expense.person}
              date={expense.date}
              amount={expense.amount}
              key={expense.id}
            />
          );
        })} */}
      <ExpensesChart dataPoints={filteredExpense} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
}
export default Expenses;
