window.onload = function () {
let rezultatas = trigubaSuma(3, 5);
console.log(rezultatas);

rezultatas = trigubaSuma(-2, 11);
console.log(rezultatas);

let sk1 = 50;
let sk2 = 20;
let rezultatas2 = trigubaSuma(sk1, sk2);
console.log(rezultatas2);



}

function trigubaSuma(a, b) {
    return 3 * (a + b);


}