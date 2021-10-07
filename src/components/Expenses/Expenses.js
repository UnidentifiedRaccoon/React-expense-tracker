import "./Expenses.css";
import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpenseChart from "./ExpenseChart/ExpenseChart";

const Expenses = (props) => {
  let [filteredYear, setFilteredYear] = useState("2020");
  const changeFilterHandler = (data) => {
    setFilteredYear(data);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={changeFilterHandler}
          currentDate={filteredYear}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
