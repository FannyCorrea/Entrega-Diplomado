// ===============================
// EJERCICIOS PARA LA CASA - JS
// ===============================

// -------- NIVEL 1 --------

// 1. Validador de Edad
let edad = prompt("Ej1 - Ingresa tu edad");
if (isNaN(edad)) {
  alert("Por favor ingresa un número válido");
} else if (edad < 18) {
  alert("Acceso denegado");
} else {
  alert("Bienvenido");
}

// 2. Calculadora de Helados
let topping = prompt("Ej2 - Elige topping: Oreo, KitKat o Brownie");
let precio = 5;
switch (topping) {
  case "Oreo": precio += 2; break;
  case "KitKat": precio += 3; break;
  case "Brownie": precio += 4; break;
  default: alert("Topping no válido");
}
alert("Precio final: $" + precio);

// 3. Par o Impar
let num = parseInt(prompt("Ej3 - Ingresa un número"));
if (num % 2 === 0) {
  alert("Es par");
} else {
  alert("Es impar");
}

// 4. Día de la Semana
let dia = parseInt(prompt("Ej4 - Ingresa número del 1 al 7"));
switch (dia) {
  case 1: alert("Lunes"); break;
  case 2: alert("Martes"); break;
  case 3: alert("Miércoles"); break;
  case 4: alert("Jueves"); break;
  case 5: alert("Viernes"); break;
  case 6: alert("Sábado"); break;
  case 7: alert("Domingo"); break;
  default: alert("Número inválido");
}

// 5. Calculadora Básica
let a = parseFloat(prompt("Ej5 - Número 1"));
let b = parseFloat(prompt("Número 2"));
let op = prompt("Operación: suma, resta, mult, div");
switch (op) {
  case "suma": alert(a + b); break;
  case "resta": alert(a - b); break;
  case "mult": alert(a * b); break;
  case "div": alert(a / b); break;
  default: alert("Operación inválida");
}

// 6. Aprobado o Reprobado
let n1 = parseFloat(prompt("Ej6 - Nota 1"));
let n2 = parseFloat(prompt("Nota 2"));
let n3 = parseFloat(prompt("Nota 3"));
let promedio = (n1 + n2 + n3) / 3;
if (promedio >= 6) {
  alert("Aprobado");
} else {
  alert("Reprobado");
}

// 7. Conversor de Moneda
let dolares = parseFloat(prompt("Ej7 - Cantidad en dólares"));
let moneda = prompt("Convertir a: euros, pesos, soles");
let resultado;
switch (moneda) {
  case "euros": resultado = dolares * 0.9; break;
  case "pesos": resultado = dolares * 4000; break;
  case "soles": resultado = dolares * 3.7; break;
  default: alert("Moneda no válida");
}
alert("Resultado: " + resultado);

// -------- NIVEL 2 --------

// 8. Cuenta Regresiva
for (let i = 10; i >= 1; i--) {
  console.log("Ej8:", i);
}

// 9. Suma Acumulativa
let n = parseInt(prompt("Ej9 - Número"));
let suma = 0;
for (let i = 1; i <= n; i++) {
  suma += i;
}
alert("Suma: " + suma);

// 10. Múltiplos de 5
for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log("Ej10:", i);
  }
}

// 11. Clave Maestra
let clave;
while (clave !== "SESAMO123") {
  clave = prompt("Ej11 - Ingresa la contraseña");
}
alert("Acceso permitido");

// 12. Tabla de Potencias
let numPot = parseInt(prompt("Ej12 - Número"));
for (let i = 1; i <= 5; i++) {
  console.log("Ej12:", numPot ** i);
}

// 13. Filtro de Positivos
let numero;
do {
  numero = parseInt(prompt("Ej13 - Ingresa un número"));
} while (numero >= 0);

// -------- NIVEL 3 --------

// 14. Array de Compras
let productos = [];
for (let i = 0; i < 5; i++) {
  let p = prompt("Ej14 - Producto:");
  productos.push(p);
}
console.log("Ej14:", productos);

// 15. Buscador de Nombres
let nombres = ["Ana", "Luis", "Pedro", "Marta", "Sofía"];
let buscar = prompt("Ej15 - Nombre a buscar");
if (nombres.includes(buscar)) {
  alert("Existe");
} else {
  alert("No existe");
}

// 16. Objeto Auto
let auto = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2020
};
auto.anio = prompt("Ej16 - Nuevo año");
console.log("Ej16:", auto);

// 17. Lista de Estudiantes
let estudiantes = [];
for (let i = 0; i < 3; i++) {
  let nombre = prompt("Ej17 - Nombre:");
  let nota = prompt("Nota:");
  estudiantes.push({ nombre: nombre, nota: nota });
}
console.log("Ej17:", estudiantes);

// 18. Carrito con Descuento
let total = 0;
let precioItem;
while ((precioItem = parseFloat(prompt("Ej18 - Precio (0 para salir)"))) !== 0) {
  total += precioItem;
}
if (total > 100) {
  total *= 0.9;
}
alert("Total: " + total);

// 19. Menú Infinito
let opcion;
do {
  opcion = prompt("Ej19 - 1.Saludar 2.Despedirse 3.Salir");
  switch (opcion) {
    case "1": alert("Hola!"); break;
    case "2": alert("Adiós!"); break;
  }
} while (opcion !== "3");

// 20. Reemplazo en Array
let arr = [1, 2, 3, 4, 5];
let valor = prompt("Ej20 - Nuevo valor");
let pos = parseInt(prompt("Posición (0-4)"));
arr[pos] = valor;
console.log("Ej20:", arr);