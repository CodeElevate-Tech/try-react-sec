import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card";
import PropTypes from "prop-types";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

Expenses.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
};

export default Expenses;
