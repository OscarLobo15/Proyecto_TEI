// Datos de ejemplo (reemplaza con tus propios datos)
const products = [
    {
      productName: 'Producto 1',
      price: '$50',
      category: 'Categoría A',
      tags: 'tag1',
      vendor: 'Vendedor A',
      publishedOn: '2023-11-16'
    },
    {
      productName: 'Producto 2',
      price: '$30',
      category: 'Categoría B',
      tags: 'tag3',
      vendor: 'Vendedor B',
      publishedOn: '2023-11-15'
    },
    // Agrega más objetos con los datos de tus productos aquí
    ...Array.from({ length: 15 }, (_, index) => ({
      Nombre_Producto: `Producto ${index + 3}`,
      Precio: `$${Math.floor(Math.random() * 200)}`,
      Categoriae: Math.random() < 0.5 ? 'Categoria A' : 'Categoria B',
      Etiqueta: Math.random() < 0.5 ? 'Tag 1' : 'Tag 2',
      Vendedor: Math.random() < 0.5 ? ' Vendedor A' : 'Vendedor B',
      Fecha: `2023-11-${Math.floor(Math.random() * 30) + 1}`
    }))
  ];
  
  // Función para crear la tabla
  function createTable() {
    const tableBody = document.getElementById('tableBody');
    let tableContent = '';
  
    products.forEach(product => {
      tableContent += `
        <tr>
          <td>${product.productName}</td>
          <td>${product.price}</td>
          <td>${product.category}</td>
          <td>${product.tags}</td>
          <td>${product.vendor}</td>
          <td>${product.publishedOn}</td>
        </tr>
      `;
    });
  
    tableBody.innerHTML = tableContent;
  }
  
  // Llamar a la función para crear la tabla al cargar la página
  window.onload = createTable;
  