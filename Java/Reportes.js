const usuarios = ['Usuario1', 'Usuario2', 'Usuario3', 'Usuario4', 'Usuario5'];
const reportesProductos = [
    'El Producto A ha experimentado un aumento en las ventas.',
    'El Producto B tiene una baja en su demanda.',
    'Necesitamos promocionar más el Producto C para aumentar su venta.',
    'Se ha recibido una queja sobre el Producto D.',
    'El Producto E ha alcanzado un récord de ventas.'
];

const reportesVentas = [
    'Las ventas han aumentado en un 15% este mes.',
    'Necesitamos revisar la estrategia de ventas para el próximo trimestre.',
    'La campaña de marketing ha impactado positivamente en las ventas.',
    'Se ha detectado un error en el registro de ventas.',
    'Las ventas han alcanzado un mínimo histórico.'
];

function generarReporteProducto() {
    const nombreUsuario = usuarios[Math.floor(Math.random() * usuarios.length)];
    const textoProducto = reportesProductos[Math.floor(Math.random() * reportesProductos.length)];
    return { nombreUsuario, texto: textoProducto };
}

function generarReporteVenta() {
    const nombreUsuario = usuarios[Math.floor(Math.random() * usuarios.length)];
    const textoVenta = reportesVentas[Math.floor(Math.random() * reportesVentas.length)];
    return { nombreUsuario, texto: textoVenta };
}

function agregarReporteALaPagina(reporte) {
    const reporteHTML = document.createElement('div');
    reporteHTML.classList.add('reporte');
    reporteHTML.innerHTML = `<strong>${reporte.nombreUsuario}:</strong> ${reporte.texto}`;
    const reportesContainer = document.getElementById('reportes-container');
    reportesContainer.appendChild(reporteHTML);
}

function generarReportesAutomaticamente() {
    setInterval(function() {
        const esReporteProducto = Math.random() < 0.5; // Genera aleatoriamente entre reporte de producto y venta
        let nuevoReporte;
        if (esReporteProducto) {
            nuevoReporte = generarReporteProducto();
        } else {
            nuevoReporte = generarReporteVenta();
        }
        agregarReporteALaPagina(nuevoReporte);
    }, 30000); // 30 segundos
}

generarReportesAutomaticamente();