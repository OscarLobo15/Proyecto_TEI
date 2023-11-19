document.addEventListener('DOMContentLoaded', function() {
    const filtroGraficoCACCLV = document.getElementById('filtroGraficoCACCLV');
    const canvasCACCLV = document.getElementById('myChartCACCLV');
    let chartInstanceCACCLV = null;

    // Datos del CAC y CLV
    const datosMensualesCAC = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        cac: [200, 180, 210, 190] // Costo de Adquisición de Clientes mensual
    };

    const datosTrimestralesCAC = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        cac: [500, 480, 520, 490] // Costo de Adquisición de Clientes trimestral
    };

    const datosTrimestralesCLV = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        clv: [800, 850, 820, 870] // Valor de Vida del Cliente trimestral
    };

    const datosSemestralesCLV = {
        labels: ['S1', 'S2'],
        clv: [1550, 1670] // Valor de Vida del Cliente semestral
    };

    function dibujarGraficoCACCLV(data) {
        const ctx = canvasCACCLV.getContext('2d');
        ctx.clearRect(0, 0, canvasCACCLV.width, canvasCACCLV.height);

        if (chartInstanceCACCLV) {
            chartInstanceCACCLV.destroy();
        }
        
        chartInstanceCACCLV = new Chart(ctx, {
            type: 'line', // Puedes cambiar a 'bar' si prefieres un gráfico de barras
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: 'CAC',
                        data: data.cac,
                        borderColor: 'orange', // Color para representar el CAC
                        backgroundColor: 'transparent',
                        pointBackgroundColor: 'orange',
                        borderWidth: 2
                    },
                    {
                        label: 'CLV',
                        data: data.clv || [], // Si no hay datos, los pones como un array vacío
                        borderColor: 'blue', // Color para representar el CLV
                        backgroundColor: 'transparent',
                        pointBackgroundColor: 'blue',
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

    filtroGraficoCACCLV.addEventListener('change', function() {
        const valorSeleccionado = this.value;
        if (valorSeleccionado === 'mensual') {
            dibujarGraficoCACCLV(datosMensualesCAC);
        } else if (valorSeleccionado === 'trimestralCAC') {
            dibujarGraficoCACCLV(datosTrimestralesCAC);
        } else if (valorSeleccionado === 'trimestralCLV') {
            dibujarGraficoCACCLV(datosTrimestralesCLV);
        } else if (valorSeleccionado === 'semestralCLV') {
            dibujarGraficoCACCLV(datosSemestralesCLV);
        }
    });

    dibujarGraficoCACCLV(datosMensualesCAC); // Dibuja el gráfico inicialmente
});
