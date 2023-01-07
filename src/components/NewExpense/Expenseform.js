import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ onFormSubmit, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPerson, setEnteredPerson] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = function (e) {
    setEnteredTitle(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
  };
  const amountChangeHandler = function (e) {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
  };
  const dateChangeHandler = function (e) {
    setEnteredDate(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
  };
  const personChangeHandler = function (e) {
    setEnteredPerson(e.target.value.replace(/[0-9,!$%^&*%]/, ""));
  };

  const formHandler = function (e) {
    e.preventDefault();

    onFormSubmit({
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      person: enteredPerson,
    });
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    setEnteredPerson("");
    onCancel();
  };

  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
            placeholder="Expense Name"
          />
        </div>
        <div className="new-expense__control">
          <label>Person</label>
          <input
            required
            type="text"
            onChange={personChangeHandler}
            value={enteredPerson}
            placeholder="Person Name"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required
            type="number"
            min="1"
            step="1"
            onChange={amountChangeHandler}
            value={enteredAmount}
            placeholder="Amount"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            min="2019-01-01"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="buttons">
        <button onClick={onCancel} type="button">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
