document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendario');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'Reunión de Proyecto X',
                start: '2023-11-16T10:00:00',
                end: '2023-11-16T12:00:00'
            }
            // Agrega más eventos aquí para representar tareas, reuniones, etc.
        ]
    });

    calendar.render();
});
