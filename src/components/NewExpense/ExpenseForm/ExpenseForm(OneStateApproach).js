import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInputs, setUserInputs] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInputs((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInputs((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInputs((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };

  return (
    <form action="post">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title-field">Title</label>
          <input
            type="text"
            id="title-field"
            placeholder="Title"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount-field">Amount</label>
          <input
            type="number"
            id="amount-field"
            placeholder="Amount"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date-field">Date</label>
          <input
            type="date"
            id="date-field"
            placeholder="Date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Apply</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
