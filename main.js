var num1, num2, num3, numDivisorio, resultado1, resultado2;

num1 = prompt ("Por favor, ingresa un número");
num2 = prompt ("Por favor, ingresa otro número");
num3 = prompt ("Por favor, ingresa otro número");
numDivisorio = 3;

resultado1 = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);

resultado2 = resultado1 / numDivisorio;

alert(resultado2);