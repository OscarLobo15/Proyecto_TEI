document.addEventListener('DOMContentLoaded', function() {
    const filtroGrafico = document.getElementById('filtroGrafico');
    const canvas = document.getElementById('myChart');
    let chartInstance = null;

    // Aquí puedes definir tus datos para clientes y ventas
    const datosDiarios = {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
        clientes: [20, 25, 30, 22, 27], // Clientes diarios
        ventas: [150, 180, 200, 170, 190] // Ventas diarias
    };

    const datosSemanal = {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        clientes: [120, 150, 140, 160], // Clientes semanales
        ventas: [850, 920, 900, 980] // Ventas semanales
    };

    const datosMensual = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        clientes: [500, 580, 550, 600], // Clientes mensuales
        ventas: [3200, 3500, 3300, 3600] // Ventas mensuales
    };

    const datosTrimestral = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        clientes: [1800, 1900, 1850, 1950], // Clientes trimestrales
        ventas: [11000, 11500, 11200, 11800] // Ventas trimestrales
    };

    function dibujarGrafico(data) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (chartInstance) {
            chartInstance.destroy();
        }
        
        chartInstance = new Chart(ctx, {
            type: 'bar', // Puedes cambiar a 'line' si prefieres un gráfico de líneas
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: 'Clientes',
                        data: data.clientes,
                        backgroundColor: 'blue' // Color para representar los clientes
                    },
                    {
                        label: 'Ventas',
                        data: data.ventas,
                        backgroundColor: 'green' // Color para representar las ventas
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
        if (valorSeleccionado === 'diario') {
            dibujarGrafico(datosDiarios);
        } else if (valorSeleccionado === 'semanal') {
            dibujarGrafico(datosSemanal);
        } else if (valorSeleccionado === 'mensual') {
            dibujarGrafico(datosMensual);
        } else if (valorSeleccionado === 'trimestral') {
            dibujarGrafico(datosTrimestral);
        }
    });

    dibujarGrafico(datosDiarios); // Dibuja el gráfico inicialmente
});
