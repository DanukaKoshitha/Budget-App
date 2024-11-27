const ctx1 = document.getElementById('pieChart');

  new Chart(ctx1, {
    type: 'pie',
    data: {
      labels:  ['Groceries', 'Utilities', 'Entertainment', 'Rent', 'Miscellaneous'],
      datasets: [{
        label: '5 of Votes',
        data: [200, 150, 100, 800, 50],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

const ctx2 = document.getElementById('lineChart');

  new Chart(ctx2, {
    type: 'line',
    data: {
      labels:   ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Agu','Sep','Oct','Nov','Dec'],
      datasets: [{
        label: 'Monthly Spending',
        data: [500, 600, 550, 700, 800, 650, 720,750,690,780,840,950],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });