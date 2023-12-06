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
  