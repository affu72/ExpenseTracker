import { useState } from "react";
import ExpenseForm from "./Expenseform";
import "./NewExpense.css";
const NewExpense = ({ onGettingData }) => {
  const [addNewExpense, setNewExpense] = useState(false);

  const inputHandler = function (formData) {
    const data = {
      ...formData,
      id: Date.now(),
    };
    onGettingData(data);
  };

  const newExpenseClickHandler = function () {
    setNewExpense(true);
  };

  const cancelButtonhandler = function () {
    setNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!addNewExpense && (
        <button onClick={newExpenseClickHandler}>Add New Expense</button>
      )}
      {addNewExpense && (
        <ExpenseForm
          onFormSubmit={inputHandler}
          onCancel={cancelButtonhandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
