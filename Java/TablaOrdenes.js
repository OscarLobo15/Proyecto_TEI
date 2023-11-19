// Datos de ejemplo y generación aleatoria de más órdenes
const orders = [
  {
    Orden: '#001',
    Monto: '$120',
    Cliente: 'Cliente A',
    E_Pago: 'Pagado',
    Status: 'En Proceso',
    Tipo_E: 'Envío Estándar',
    Fecha: '2023-11-10'
  },
  {
    Orden: '#002',
    Monto: '$90',
    Cliente: 'Cliente B',
    E_Pago: 'Pendiente',
    Status: 'En Espera',
    Tipo_E: 'Recogida en Tienda',
    Fecha: '2023-11-12'
  },
  // Más órdenes generadas aleatoriamente
  ...Array.from({ length: 15 }, (_, index) => ({
    Orden: `#${index + 3}`,
    Monto: `$${Math.floor(Math.random() * 200)}`,
    Cliente: `Cliente ${String.fromCharCode(65 + index)}`,
    E_Pago: Math.random() < 0.5 ? 'Pagado' : 'Pendiente',
    Status: Math.random() < 0.5 ? 'En Proceso' : 'En Espera',
    Tipo_E: Math.random() < 0.5 ? 'Envío Estándar' : 'Recogida en Tienda',
    Fecha: `2023-11-${Math.floor(Math.random() * 30) + 1}`
  }))
];

// Función para crear la tabla de órdenes
function createOrderTable() {
  const orderTableBody = document.getElementById('orderTableBody');
  let orderTableContent = '';

  orders.forEach(order => {
    orderTableContent += `
      <tr>
        <td>${order.Orden}</td>
        <td>${order.Monto}</td>
        <td>${order.Cliente}</td>
        <td>${order.E_Pago}</td>
        <td>${order.Status}</td>
        <td>${order.Tipo_E}</td>
        <td>${order.Fecha}</td>
      </tr>
    `;
  });

  orderTableBody.innerHTML = orderTableContent;
}

// Llamar a la función para crear la tabla de órdenes al cargar la página
window.onload = createOrderTable;