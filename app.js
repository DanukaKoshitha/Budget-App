const ctx1 = document.getElementById('pieChart');

new Chart(ctx1, {
  type: 'pie',
  data: {
    labels: ['Groceries','Bils','Helth','Transport','Shopping','Other'],
    datasets: [{
      label: 'LKR',
      data: [12, 19, 3, 5, 2, 3],
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

const ctx2 = document.getElementById('barChart');

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Monthly Spend Rate(%)',
      data: [12, 19, 3, 5, 2, 3],
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