let label = document.getElementById("category").value;
let amount = Number(document.getElementById("amount").value);

const ctx1 = document.getElementById("pieChart");

const labelArrayX = [
  "Groceries",
  "Utilities",
  "Entertainment",
  "Rent",
  "Miscellaneous",
];
const labelArrayY = [200, 150, 100, 800, 50];

document.getElementById("btn").addEventListener("click", addItem);
document.getElementById("btnUndo").addEventListener("click", undoItem);

function undoItem() {
  labelArrayX.pop(label);
  labelArrayY.pop(amount);
  console.log(labelArrayX);
  console.log(labelArrayY);
}

function addItem() {
  labelArrayX.push(label);
  labelArrayY.push(amount);
  console.log(labelArrayX);
  console.log(labelArrayY);
}

new Chart(ctx1, {
  type: "pie",
  data: {
    labels: labelArrayX,
    datasets: [
      {
        label: "5 of Votes",
        data: labelArrayY,
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx2 = document.getElementById("lineChart");

new Chart(ctx2, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Spending",
        data: [500, 600, 550, 700, 800, 650, 720, 750, 690, 780, 840, 950],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
