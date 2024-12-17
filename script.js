const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener('click', () => {
    navLinks.classList.toggle("mobile-menu");
});

// Structure JSON
const chartData = {
    "chart": {
      "title": "Early stage",
      "x_axis": { "label": "TIME", "unit": "units" },
      "y_axis": { "label": "TRADING VOLUME", "unit": "units" },
      "data_points": [
        { "time": 0, "volume": 0, "highlight": true, "label": "01 Early stage" },
        { "time": 1, "volume": 1, "highlight": true },
        { "time": 2, "volume": 2, "highlight": false },
        { "time": 3, "volume": 4, "highlight": false },
        { "time": 4, "volume": 6, "highlight": false },
        { "time": 5, "volume": 9, "highlight": false },
        { "time": 6, "volume": 12, "highlight": false }
      ],
      "line_properties": { "color": "rgba(255, 102, 196, 1)", "width": 2 }
    }
  };

  // Extraire les données JSON
  const labels = chartData.chart.data_points.map(point => point.time);
  const data = chartData.chart.data_points.map(point => point.volume);

  // Initialiser Chart.js
  const ctx = document.getElementById('graphique-tradingVolume').getContext('2d');
  const tradingChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels, // Axe X : Temps
      datasets: [{
        label: chartData.chart.title,
        data: data, // Axe Y : Volumes
        borderColor: chartData.chart.line_properties.color,
        borderWidth: chartData.chart.line_properties.width,
        pointBackgroundColor: chartData.chart.data_points.map(point =>
          point.highlight ? 'rgba(255, 102, 196, 1)' : 'rgba(142, 138, 255, 1)'
        ),
        pointRadius: chartData.chart.data_points.map(point => point.highlight ? 6 : 4),
        fill: false,
        tension: 0.4
      }]
    },
    options: {
      /*responsive: true,
      scales: {
        x: {
          title: { display: true, text: chartData.chart.x_axis.label }
        },
        y: {
          title: { display: true, text: chartData.chart.y_axis.label }
        }
      },*/
      plugins: {
        legend: { display: true, position: 'top' }
      }
    }
  });