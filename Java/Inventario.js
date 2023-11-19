document.addEventListener('DOMContentLoaded', function() {
    const canvasInventario = document.getElementById('myChartInventario');
    let chartInstanceInventario = null;

    // Datos del inventario
    const datosMensualesInventario = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        entradas: [150, 180, 200, 170], // Entradas mensuales
        salidas: [100, 120, 130, 110] // Salidas mensuales
    };

    const datosTrimestralesInventario = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        entradas: [800, 920, 900, 980], // Entradas trimestrales
        salidas: [500, 480, 520, 490] // Salidas trimestrales
    };

    function dibujarGraficoInventario(data) {
        const ctx = canvasInventario.getContext('2d');
        ctx.clearRect(0, 0, canvasInventario.width, canvasInventario.height);

        if (chartInstanceInventario) {
            chartInstanceInventario.destroy();
        }
        
        chartInstanceInventario = new Chart(ctx, {
            type: 'bar', // Gráfico de barras
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: 'Entradas',
                        data: data.entradas,
                        backgroundColor: 'blue' // Color para representar las entradas
                    },
                    {
                        label: 'Salidas',
                        data: data.salidas,
                        backgroundColor: 'orange' // Color para representar las salidas
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Puedes llamar a la función con los datos que desees
    dibujarGraficoInventario(datosMensualesInventario); // Dibuja el gráfico inicialmente
});
