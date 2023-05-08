window.onload = function (){
    let x;
    x = parseInt(prompt("Įveskite stačiakampio ilgį"));
    console.log(x);

    let y;
    y = parseInt(prompt("Įveskite stačiakampio plotį"));
    console.log(y);

    let z;
    z = parseInt(prompt("Įveskite stačiakampio aukštį"));
    console.log(z); 

    let stačiakampioPavirsiausPlotas = staciakampioGretasienioPavirsiausPlotas(x, y, z);
    alert("Stačiakampio gretasienio paviršiaus plotas yra:" + stačiakampioPavirsiausPlotas); 
}
function staciakampioGretasienioPavirsiausPlotas (a, b, c) {
    return 2 * (a * b + a * c + b * c)
}