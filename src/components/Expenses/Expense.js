import React, { useState } from "react";

import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
import "./Expense.css";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangedYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const getFilteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedYear}
        />
        <ExpenseChart expenses={getFilteredExpenses} />
        <ExpensesList items={getFilteredExpenses} />
      </Card>
    </li>
  );
};

export default Expense;
