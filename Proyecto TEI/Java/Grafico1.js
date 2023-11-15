google.charts.load('current', { packages: ['corechart', 'table'] });
google.charts.setOnLoadCallback(function() {
    drawChart();
    drawProductChart();
    drawInventorySoldChart();
    drawSalesComparisonChart();
    drawProfitChart();
});

function drawChart() {
    let data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2014', 1000, 400],
        ['2015', 1170, 460],
        ['2016', 660, 1120],
        ['2017', 1030, 540]
    ]);

    let options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    let chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function updateTable() {
    // Obtener datos del gráfico y convertirlos a tabla
    let data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2014', 1000, 400],
        ['2015', 1170, 460],
        ['2016', 660, 1120],
        ['2017', 1030, 540]
    ]);

    let table = new google.visualization.Table(document.getElementById('table_div'));
    table.draw(data, { showRowNumber: true });
}

function drawProductChart() {
    let data = google.visualization.arrayToDataTable([
        ['Product', 'Sales'],
        ['Product A', 50],
        ['Product B', 30],
        ['Product C', 70]
    ]);

    let options = {
        title: 'Product Sales',
        legend: { position: 'none' }
    };

    let chart = new google.visualization.BarChart(document.getElementById('product_chart_div'));
    chart.draw(data, options);
}

function drawInventorySoldChart() {
    let data = google.visualization.arrayToDataTable([
        ['Product', 'Inventory', 'Sold'],
        ['Product A', 100, 50],
        ['Product B', 80, 70],
        ['Product C', 120, 60]
    ]);

    let options = {
        title: 'Inventory and Sales',
        isStacked: true
    };

    let chart = new google.visualization.ColumnChart(document.getElementById('inventory_sold_chart_div'));
    chart.draw(data, options);
}

function drawSalesComparisonChart() {
    let data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Previous Sales'],
        ['Jan', 150, 120],
        ['Feb', 200, 180],
        ['Mar', 180, 160]
    ]);

    let options = {
        title: 'Sales Comparison',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    let chart = new google.visualization.LineChart(document.getElementById('sales_comparison_chart_div'));
    chart.draw(data, options);
}

function drawProfitChart() {
    let data = google.visualization.arrayToDataTable([
        ['Product', 'Profit'],
        ['Product A', 500],
        ['Product B', 300],
        ['Product C', 700]
    ]);

    let options = {
        title: 'Total Daily Profits',
        legend: { position: 'none' }
    };

    let chart = new google.visualization.BarChart(document.getElementById('profit_chart_div'));
    chart.draw(data, options);
}

// Función para mostrar la tabla al hacer clic en el botón
function showTable() {
    updateTable();
}