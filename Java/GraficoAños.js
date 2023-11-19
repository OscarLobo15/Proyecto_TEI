document.addEventListener('DOMContentLoaded', function () {
    // Datos para el gráfico
    const data = {
      categories: ['2020', '2021', '2022'],
      values: [11888.53, 16993.34, 2100.11]
    };
  
    // Configuración del gráfico
    const chartOptions = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      xAxis: {
        type: 'category',
        data: data.categories
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'Industry',
        data: data.values,
        type: 'bar'
      }]
    };
  
    // Obtener el contenedor del gráfico
    const chartContainer = document.getElementById('chartContainer');
  
    // Crear instancia del gráfico
    const chart = echarts.init(chartContainer);
  
    // Configurar opciones y renderizar el gráfico
    chart.setOption(chartOptions);
  });