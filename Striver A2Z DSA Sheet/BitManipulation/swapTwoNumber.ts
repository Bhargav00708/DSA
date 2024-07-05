let a = 10;
let b = 4;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a,b);