//Data store
const initialExpenses = [
  {
    category: "Shopping",
    description: "Nintendo Switch!!",
    amount: "500",
  },
  {
    category: "Education",
    description: "DevTalles",
    amount: "300",
  },
];

const expensesFromStorage = JSON.parse(localStorage.getItem("expenses"));
const expenses = expensesFromStorage || initialExpenses;

function deleteExpense(expense) {
  const index = expenses.indexOf(expense);
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
}
function createExpense(expense){
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
}