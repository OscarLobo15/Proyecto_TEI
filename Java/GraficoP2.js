// Datos de ejemplo (reemplaza con tus datos reales)
const profitMarginData = [
    ['Producto', 'Costo', 'Ingreso'],
    ['Producto A', 200, 500],
    ['Producto B', 150, 400],
    ['Producto C', 180, 600],
    // Agrega más productos con sus costos e ingresos
  ];

  // Función para calcular el margen de beneficio por producto
  function calculateProfitMargins(data) {
    const calculatedData = data.map(product => {
      const cost = product[1];
      const income = product[2];
      const profitMargin = ((income - cost) / income) * 100;
      return [product[0], profitMargin];
    });
    return [['Producto', 'Margen de Beneficio']].concat(calculatedData);
  }

  // Función para dibujar el gráfico de margen de beneficio por producto
  function drawProfitMarginChart() {
    const data = google.visualization.arrayToDataTable(calculateProfitMargins(profitMarginData));
    const options = {
      title: 'Margen de Beneficio por Producto',
      legend: 'none'
    };
    const chart = new google.visualization.ColumnChart(document.getElementById('profitMarginChart'));
    chart.draw(data, options);
  }

  // Función para dibujar la tabla de margen de beneficio por producto
  function drawProfitMarginTable() {
    const data = google.visualization.arrayToDataTable(calculateProfitMargins(profitMarginData));
    const table = new google.visualization.Table(document.getElementById('profitMarginTable'));
    table.draw(data, { showRowNumber: true });
  }

  // Cargar Google Charts y dibujar el gráfico y la tabla
  google.charts.load('current', { packages: ['corechart', 'table'] });
  google.charts.setOnLoadCallback(() => {
    drawProfitMarginChart();
    drawProfitMarginTable();
  });