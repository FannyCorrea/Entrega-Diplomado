// 8. Cuenta regresiva - FOR
for (let i = 10; i >= 1; i--) {
    console.log("Ej8 FOR:", i);
}

// 8. Cuenta regresiva - WHILE
let i = 10;
while (i >= 1) {
    console.log("Ej8 WHILE:", i);
    i--;
}

// 8. Cuenta regresiva - DO WHILE
let i = 10;
do {
    console.log("Ej8 DO WHILE:", i);
    i--;
} while (i >= 1);

// 9. Suma acumulativa - FOR
let n = parseInt(prompt("Ej9 FOR - Número"));
let suma = 0;
for (let i = 1; i <= n; i++) {
    suma += i;
}
alert("Suma : " + suma);

// 9. Suma acumulativa - WHILE
let n = parseInt(prompt("Ej9 WHILE - Número"));
let suma = 0;
let k = 1;
while (k <= n) {
    suma += k;
    k++;
}
alert("Suma : " + suma);

// 9. Suma Acumulativa - DO WHILE
let n = parseInt(prompt("Ej9 DO WHILE - Número"));
let suma = 0;
let i = 1;
do {
    suma += i;
    i++;
} while (i <= n);
alert("Suma : " + suma);

// 10. Multiplos de 5 - FOR
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log("Ej10 FOR:", i);
    }
}

// 10. Multiplos de 5 - WHILE
let m = 1;
while (m <= 50) {
    if (m % 5 === 0) {
        console.log("Ej10 WHILE:", m);
    }
    m++;
}

// 10. Multiplos de 5 - DO WHILE
let n = 1;
do {
    if (n % 5 === 0) {
        console.log("Ej10 DO WHILE:", n);
    }
    n++;
} while (n <= 50);

// 11. Clave maestra - FOR
for (let clave = prompt("Ej11 FOR - Ingresa la contraseña");
    clave !== "SESAMO123";
    clave = prompt("Ej11 FOR - Ingresa la contraseña")) {
}
alert("Acceso permitido ");

// 11. Clave maestra - WHILE
let clave;
while (clave !== "SESAMO123") {
    clave = prompt("Ej11 WHILE - Ingresa la contraseña");
}
alert("Acceso permitido ");

// 11. Clave maestra - DO WHILE
let clave;
do {
    clave = prompt("Ej11 DO WHILE - Ingresa la contraseña");
} while (clave !== "SESAMO123");
alert("Acceso permitido ");

// 12. Tabla de Potencias - FOR
let num = parseInt(prompt("Ej12 FOR - Potencia"));
for (let i = 1; i <= 5; i++) {
    console.log("Ej12 Potencia:", num ** i);
}

// 12. Tabla de Potencias - WHILE
let num = parseInt(prompt("Ej12 WHILE - Potencia"));
let f = 1;
while (f <= 5) {
    console.log("Ej12 Potencia:", num ** f);
    f++;
}

// 12. Tabla de Potencias - DO WHILE
let num = parseInt(prompt("Ej12 DO WHILE - Potencia"));
let p = 1;
do {
    console.log("Ej12 Potencia:", num ** p);
    p++;
} while (p <= 5);

// 13. Números Positivos y Negativos - FOR
for (let numero = parseInt(prompt("Ej13 FOR - Ingresa un número"));
    numero >= 0; numero = parseInt(prompt("Ej13 FOR - Ingresa un número"))) {
    console.log("Ej13 FOR - Numero valido:", numero);
}
alert("Ej13 FOR - Numero invalido");

// 13. Números Positivos y Negativos - WHILE
let numero;
while ((numero = parseInt(prompt("Ej13 WHILE - Ingresa un número"))) >= 0) {
    console.log("Ej13 WHILE - Numero valido:", numero);
}
alert("Ej13 WHILE - Número invalido");

// 13. Números Positivos y Negativos - DO WHILE
do {
    numero = parseInt(prompt("Ej13 DO WHILE - Ingresa un número"));
    if (numero >= 0) {
        console.log("Ej13 DO WHILE - Numero valido:", numero);
    }
} while (numero >= 0);
alert("Ej13 DO WHILE - Numero invalido");