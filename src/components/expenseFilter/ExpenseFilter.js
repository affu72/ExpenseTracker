import "./ExpensesFilter.css";

const ExpenseFilter = (props) => {
  const dropDwonChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  const year = [...props.year].sort((a, b) => b - a);
  // const presentYear = Math.max(...year);

  return (
    <div className="expenses-filter">
      <label>Filter by year</label>
      <select onChange={dropDwonChangeHandler}>
        {<option value={"select year"}>select year</option>}
        {year.map((optionYear) => (
          <option key={optionYear} value={optionYear}>
            {optionYear}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
