let transactions = [];
let userId = "";

function initUser() {
  const name = document.getElementById("username").value;

  if (!name) return alert("Enter your name");

  userId = "user_" + name.toLowerCase();

  document.querySelector(".user-box").style.display = "none";
  document.getElementById("app").style.display = "block";

  document.getElementById("welcome").innerText = `Welcome ${name} 👋`;

  loadData();
}

const form = document.getElementById("form");
const list = document.getElementById("list");

const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");

form.addEventListener("submit", e => {
  e.preventDefault();

  const category = document.getElementById("category").value;
  const amount = +document.getElementById("amount").value;
  const type = document.getElementById("type").value;

  transactions.push({
    id: Date.now(),
    category,
    amount,
    type
  });

  saveData();
  render();
  form.reset();
});

function render() {
  list.innerHTML = "";

  let income = 0;
  let expense = 0;

  transactions.forEach(t => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${t.category} ₹${t.amount}
      <button onclick="deleteTransaction(${t.id})">X</button>
    `;

    li.classList.add(t.type);
    list.appendChild(li);

    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  balanceEl.innerText = income - expense;
  incomeEl.innerText = income;
  expenseEl.innerText = expense;

  updateChart(income, expense);
}

function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  saveData();
  render();
}

function saveData() {
  localStorage.setItem(userId, JSON.stringify(transactions));
}

function loadData() {
  transactions = JSON.parse(localStorage.getItem(userId)) || [];
  render();
}

let chart;

function updateChart(income, expense) {
  const ctx = document.getElementById("chart").getContext("2d");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Income", "Expense"],
      datasets: [{
        data: [income, expense]
      }]
    }
  });
}
