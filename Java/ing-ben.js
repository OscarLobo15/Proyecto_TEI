document.addEventListener('DOMContentLoaded', function() {
    const filtroGrafico = document.getElementById('filtroGrafico');
    const canvas = document.getElementById('myChart');
    let chartInstance = null;

    const datosSemanal = {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        ingresos: [8000, 9500, 9000, 11000], // Ingresos semanales
        costos: [4000, 5000, 6000, 5500]    // Costos semanales
    };

    const datosMensual = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        ingresos: [30000, 35000, 28000, 32000], // Ingresos mensuales
        costos: [15000, 18000, 16000, 17000]    // Costos mensuales
    };

    const datosAnual = {
        labels: ['2021', '2022', '2023'],
        ingresos: [150000, 180000, 200000], // Ingresos anuales
        costos: [75000, 90000, 100000]     // Costos anuales
    };

    function dibujarGrafico(data) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (chartInstance) {
            chartInstance.destroy();
        }
        
        chartInstance = new Chart(ctx, {
            type: 'line',
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
                        label: 'Beneficios Netos',
                        data: data.ingresos.map((ingreso, index) => ingreso - data.costos[index]),
                        borderColor: 'green',
                        backgroundColor: 'transparent',
                        pointBackgroundColor: 'green',
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

    filtroGrafico.addEventListener('change', function() {
        const valorSeleccionado = this.value;
        if (valorSeleccionado === 'semanal') {
            dibujarGrafico(datosSemanal);
        } else if (valorSeleccionado === 'mensual') {
            dibujarGrafico(datosMensual);
        } else if (valorSeleccionado === 'anual') {
            dibujarGrafico(datosAnual);
        }
    });

    dibujarGrafico(datosSemanal);
});
