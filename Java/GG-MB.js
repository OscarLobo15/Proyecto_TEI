document.addEventListener('DOMContentLoaded', function() {
    const filtroGrafico2 = document.getElementById('filtroGrafico');
    const canvas = document.getElementById('myChart2');
    let chartInstance = null;

    const datosMensual = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        gastos: [12000, 9500, 11000, 8000], // Gastos mensuales
        margenBeneficio: [18000, 23000, 20000, 25000] // Margen de beneficio mensual
    };

    const datosTrimestral = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        gastos: [30000, 28000, 32000, 27000], // Gastos trimestrales
        margenBeneficio: [50000, 53000, 48000, 52000] // Margen de beneficio trimestral
    };

    function dibujarGrafico(data) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (chartInstance) {
            chartInstance.destroy();
        }
        
        chartInstance = new Chart(ctx, {
            type: 'bar', // Cambia a 'line' si prefieres un gráfico de áreas
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: 'Gastos',
                        data: data.gastos,
                        backgroundColor: 'red', // Color para representar los gastos
                    },
                    {
                        label: 'Margen de Beneficio',
                        data: data.margenBeneficio,
                        backgroundColor: 'green', // Color para representar el margen de beneficio
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

    filtroGrafico2.addEventListener('change', function() {
        const valorSeleccionado = this.value;
        if (valorSeleccionado === 'mensual') {
            dibujarGrafico(datosMensual);
        } else if (valorSeleccionado === 'trimestral') {
            dibujarGrafico(datosTrimestral);
        }
    });

    dibujarGrafico(datosMensual);
});
