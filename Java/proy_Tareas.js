// Función para obtener la fecha actual en formato 'YYYY-MM-DD'
function obtenerFechaActual() {
    const fecha = new Date();
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();
    return `${anio}-${mes}-${dia}`;
}

// Función para agregar una nueva tarea a la tabla
function agregarTarea() {
    const nuevaTareaTexto = document.getElementById('nueva-tarea').value;
    if (nuevaTareaTexto.trim() !== '') {
        const tablaTareas = document.getElementById('tabla-tareas').getElementsByTagName('tbody')[0];
        const fila = tablaTareas.insertRow();
        const celdaCompletada = fila.insertCell(0);
        const celdaTarea = fila.insertCell(1);
        const celdaFecha = fila.insertCell(2);

        celdaCompletada.innerHTML = '<input type="checkbox">';
        celdaTarea.innerHTML = nuevaTareaTexto;
        celdaFecha.innerHTML = obtenerFechaActual();

        // Limpiar el input después de agregar la tarea
        document.getElementById('nueva-tarea').value = '';
    }
}
