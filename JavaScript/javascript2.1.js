window.onload = function () {
let x;
x = parseInt(prompt("Įveskite vieną stačiakampio kraštinę"));
console.log(x);

let y;
y = parseInt(prompt("Įveskite antrą stačiakampio kraštinę"));
console.log(y);

let stačiakampioPerimetras1 = staciakampioPerimetras(x, y);
alert("Stačiakampio perimetras yra:" + stačiakampioPerimetras1);


}

function staciakampioPerimetras (a, b) {
    return 2 * (a + b);

}