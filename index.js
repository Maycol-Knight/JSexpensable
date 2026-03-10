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
renderExpenses(expenses);
function createExpensesEl(expense) {
  //Create elements
  const li = document.createElement("li");
  const expenseDetail = document.createElement("div");
  const container = document.createElement("div");
  const category = document.createElement("p");
  const description = document.createElement("p");
  const amount = document.createElement("p");
  const actions = document.createElement("div");
  const deleteLink = document.createElement("a");
  //Properties of the elements (class,content)
  li.classList.add("expense");
  expenseDetail.classList.add("expense__detail");
  category.className = "heading--xs bold";
  category.textContent = expense.category;
  description.className = "conten-sm gray-300";
  description.textContent = expense.description;
  amount.className = "content-xl bold";
  amount.textContent = `$${expense.amount}`;
  actions.classList.add("expense__actions");
  deleteLink.textContent = "Delete";
  //Build template
  container.append(category, description);
  actions.append(deleteLink);
  expenseDetail.append(container, amount);
  li.append(expenseDetail, actions);
  //Add Event Listeners
  deleteLink.addEventListener("click", (event) => {
    event.preventDefault();
    deleteExpense(expense);
    renderExpenses(expenses);
  });
  return li;
}
function deleteExpense(expense) {
  const index = expenses.indexOf(expense);
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function renderExpenses(expenses) {
  const expenseList = document.querySelector(".js-expenses");
  expenseList.innerHTML = "";
  expenses.forEach((expense) => {
    const expenseEl = createExpensesEl(expense);
    expenseList.append(expenseEl);
  });
}

