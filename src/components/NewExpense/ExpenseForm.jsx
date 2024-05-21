import "./ExpenseFrom.css";

const ExpenseForm = ({handleSubmit}) => {

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const expenseData = {
      title: formData.get('title'),
      amount: parseFloat(formData.get('amount')),
      date: new Date(formData.get('date')),
    };

    handleSubmit(expenseData);

    event.target.reset(); // Reset the form fields

  }

  return (
    <form onSubmit={onSubmit}> 
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input name="title" type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" name='amount' min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <input type="date" min="2019-01-01" max="2099-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
