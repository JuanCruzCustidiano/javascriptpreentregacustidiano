function calcularInteres() {
    // Obtener los valores ingresados por el usuario
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
  
    // Calcular el interés compuesto
    var interest = principal * Math.pow(1 + (rate / 100), years) - principal;
  
    // Mostrar el resultado
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = 'El interés total es: ' + interest.toFixed(2) + ' unidades monetarias.';
  }
  
  // Calcular el interés al cargar la página con valores predeterminados
  calcularInteres();
  // Función para calcular el interés compuesto
function calcularInteresCompuesto(principal, tasa, tiempo) {
  return principal * Math.pow(1 + tasa / 100, tiempo) - principal;
}

// Capturar entradas mediante prompt
var principal = prompt("Ingrese el monto principal:");
var tasa = prompt("Ingrese la tasa de interés anual (%):");
var tiempo = prompt("Ingrese el número de años:");

// Convertir las entradas a números
principal = parseFloat(principal);
tasa = parseFloat(tasa);
tiempo = parseFloat(tiempo);

// Validar las entradas
if (isNaN(principal) || isNaN(tasa) || isNaN(tiempo) || principal <= 0 || tasa <= 0 || tiempo <= 0) {
  alert("Por favor, ingrese valores válidos y positivos en todos los campos.");
} else {
  // Calcular el interés compuesto utilizando la función
  var interesTotal = calcularInteresCompuesto(principal, tasa, tiempo);

  // Mostrar el resultado usando console.log
  console.log("El interés total es: " + interesTotal.toFixed(2) + " unidades monetarias.");
  // También podrías mostrar el resultado utilizando alert
  // alert("El interés total es: " + interesTotal.toFixed(2) + " unidades monetarias.");
}
// Array para almacenar productos
var productos = [];
// Función para agregar un producto
function agregarProducto() {
  var nombre = prompt("Ingrese el nombre del producto:");
  var precio = prompt("Ingrese el precio del producto:");

  // Validar las entradas
  if (nombre && precio && !isNaN(parseFloat(precio)) && parseFloat(precio) > 0) {
      // Crear objeto de producto
      var nuevoProducto = {
          nombre: nombre,
          precio: parseFloat(precio)
      };

      // Agregar producto al array
      productos.push(nuevoProducto);

      // Actualizar la lista de productos
      mostrarProductos();
  } else {
      alert("Ingrese información válida para el producto.");
  }
}

// Función para eliminar un producto
function eliminarProducto() {
  var nombreEliminar = prompt("Ingrese el nombre del producto a eliminar:");

  // Filtrar el array para excluir el producto a eliminar
  productos = productos.filter(function(producto) {
      return producto.nombre.toLowerCase() !== nombreEliminar.toLowerCase();
  });

  // Actualizar la lista de productos
  mostrarProductos();
}

// Función para mostrar la lista de productos
function mostrarProductos() {
  var listaProductosElement = document.getElementById('listaProductos');
  listaProductosElement.innerHTML = ''; // Limpiar la lista

  // Iterar sobre los productos y agregar elementos a la lista
  productos.forEach(function(producto) {
      var li = document.createElement('li');
      li.textContent = producto.nombre + ' - $' + producto.precio.toFixed(2);
      listaProductosElement.appendChild(li);
  });
}

// Función para buscar un producto por nombre
function buscarProducto() {
  var nombreBusqueda = document.getElementById('busquedaInput').value.toLowerCase();

  // Filtrar el array por nombre
  var productosEncontrados = productos.filter(function(producto) {
      return producto.nombre.toLowerCase().includes(nombreBusqueda);
  });

  // Mostrar los productos encontrados
  mostrarProductosEncontrados(productosEncontrados);
}

// Función para mostrar productos encontrados
function mostrarProductosEncontrados(productosEncontrados) {
  var listaProductosElement = document.getElementById('listaProductos');
  listaProductosElement.innerHTML = ''; // Limpiar la lista

  // Iterar sobre los productos encontrados y agregar elementos a la lista
  productosEncontrados.forEach(function(producto) {
      var li = document.createElement('li');
      li.textContent = producto.nombre + ' - $' + producto.precio.toFixed(2);
      listaProductosElement.appendChild(li);
  });
}

// Función para filtrar productos por precio
function filtrarPorPrecio() {
  var precioMinimo = prompt("Ingrese el precio mínimo:");
  var precioMaximo = prompt("Ingrese el precio máximo:");

  // Filtrar el array por rango de precios
  var productosFiltrados = productos.filter(function(producto) {
      return producto.precio >= parseFloat(precioMinimo) && producto.precio <= parseFloat(precioMaximo);
  });

  // Mostrar los productos filtrados
  mostrarProductosEncontrados(productosFiltrados);
}
