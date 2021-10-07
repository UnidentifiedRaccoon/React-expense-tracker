import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  let [isFormOpened, setIsFormOpened] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const openHandler = () => {
    setIsFormOpened(true);
  };

  const closeHandler = () => {
    setIsFormOpened(false);
  };

  return (
    <div className="new-expense">
      {!isFormOpened && <button onClick={openHandler}>Add New Expense</button>}
      {isFormOpened && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClose={closeHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
