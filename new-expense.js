console.log("New Expense JS loaded");
const form = document.querySelector(".js-expense-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted");
  const {category, amount, description} = event.target.elements;
  const newExpense = {
    category: category.value,
    description: description.value,
    amount: amount.value
  }
  createExpense(newExpense);
  location.assign("/");

});

function createExpense(expense){
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
}