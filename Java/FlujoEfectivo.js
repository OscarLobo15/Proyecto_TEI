document.addEventListener('DOMContentLoaded', function() {
    const filtroGrafico3 = document.getElementById('filtroGrafico3');
    const canvas3 = document.getElementById('myChart3');
    let chartInstance3 = null;

    const datosSemanal = {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        ingresos: [8000, 9500, 9000, 11000], // Ingresos semanales
        egresos: [3000, 4000, 3500, 5000]    // Egresos semanales
    };

    const datosMensualFlujo = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        ingresos: [30000, 35000, 28000, 32000], // Ingresos mensuales
        egresos: [12000, 15000, 14000, 16000]   // Egresos mensuales
    };

    const datosTrimestralFlujo = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        ingresos: [90000, 95000, 87000, 92000], // Ingresos trimestrales
        egresos: [35000, 38000, 36000, 40000]  // Egresos trimestrales
    };

    function dibujarTercerGrafico(data) {
        const ctx = canvas3.getContext('2d');
        ctx.clearRect(0, 0, canvas3.width, canvas3.height);

        if (chartInstance3) {
            chartInstance3.destroy();
        }
        
        chartInstance3 = new Chart(ctx, {
            type: 'line', // Cambia a 'bar' si prefieres un gráfico de barras
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: 'Ingresos',
                        data: data.ingresos,
                        borderColor: 'blue',
                        backgroundColor: 'transparent',
                        pointBackgroundColor: 'blue',
                        borderWidth: 2
                    },
                    {
                        label: 'Egresos',
                        data: data.egresos,
                        borderColor: 'red',
                        backgroundColor: 'transparent',
                        pointBackgroundColor: 'red',
                        borderWidth: 2
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

    filtroGrafico3.addEventListener('change', function() {
        const valorSeleccionado = this.value;
        if (valorSeleccionado === 'semanal') {
            dibujarTercerGrafico(datosSemanal);
        } else if (valorSeleccionado === 'mensual') {
            dibujarTercerGrafico(datosMensualFlujo);
        } else if (valorSeleccionado === 'trimestral') {
            dibujarTercerGrafico(datosTrimestralFlujo);
        }
    });

    dibujarTercerGrafico(datosSemanal); // Dibuja el tercer gráfico inicialmente
});
