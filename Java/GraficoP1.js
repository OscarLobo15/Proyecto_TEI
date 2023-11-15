// Datos de ejemplo (reemplaza con tus datos reales)
const salesData = [
    ['Producto', 'Cantidad Vendida'],
    ['Producto A', 150],
    ['Producto B', 200],
    ['Producto C', 120],
    // Agrega más productos y sus cantidades vendidas
  ];

  const incomeData = [
    ['Producto', 'Ingreso'],
    ['Producto A', 5000],
    ['Producto B', 7000],
    ['Producto C', 4000],
    // Agrega más productos y sus ingresos
  ];

  // Función para dibujar los gráficos de Google Charts
  function drawCharts() {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(() => {
      drawSalesChart();
      drawIncomeChart();
    });
  }

  // Función para dibujar el gráfico de ventas por producto
  function drawSalesChart() {
    const data = google.visualization.arrayToDataTable(salesData);
    const options = {
      title: 'Cantidad Vendida por Producto',
      legend: 'none'
    };
    const chart = new google.visualization.ColumnChart(document.getElementById('salesChart'));
    chart.draw(data, options);
  }

  // Función para dibujar el gráfico de ingresos por producto
  function drawIncomeChart() {
    const data = google.visualization.arrayToDataTable(incomeData);
    const options = {
      title: 'Ingresos por Producto',
      legend: 'none'
    };
    const chart = new google.visualization.ColumnChart(document.getElementById('incomeChart'));
    chart.draw(data, options);
  }

  // Cargar Google Charts y dibujar los gráficos
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawCharts);