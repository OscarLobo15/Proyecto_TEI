document.addEventListener('DOMContentLoaded', function() {
    const filtroGraficoRetencion = document.getElementById('filtroGraficoRetencion');
    const canvasRetencion = document.getElementById('myChartRetencion');
    let chartInstanceRetencion = null;

    // Datos de retención de clientes
    const datosMensualesRetencion = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        retencion: [80, 75, 85, 78] // Porcentajes de retención mensuales
    };

    const datosTrimestralesRetencion = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        retencion: [70, 80, 75, 85] // Porcentajes de retención trimestrales
    };

    function dibujarGraficoRetencion(data) {
        const ctx = canvasRetencion.getContext('2d');
        ctx.clearRect(0, 0, canvasRetencion.width, canvasRetencion.height);

        if (chartInstanceRetencion) {
            chartInstanceRetencion.destroy();
        }
        
        chartInstanceRetencion = new Chart(ctx, {
            type: 'line', // Puedes cambiar a 'bar' si prefieres un gráfico de barras
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: 'Retención de Clientes (%)',
                        data: data.retencion,
                        borderColor: 'purple', // Color para representar la retención
                        backgroundColor: 'transparent',
                        pointBackgroundColor: 'purple',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });
    }

    filtroGraficoRetencion.addEventListener('change', function() {
        const valorSeleccionado = this.value;
        if (valorSeleccionado === 'mensual') {
            dibujarGraficoRetencion(datosMensualesRetencion);
        } else if (valorSeleccionado === 'trimestral') {
            dibujarGraficoRetencion(datosTrimestralesRetencion);
        }
    });

    dibujarGraficoRetencion(datosMensualesRetencion); // Dibuja el gráfico inicialmente
});
