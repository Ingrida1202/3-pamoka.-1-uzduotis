window.onload = function () {
    let x;
    x = parseInt(prompt("Įveskite apskritimo spindulį:"));
    console.log(x);

    let apskritimoPlotas1 = staciakampioPlotas(y);
    alert("Apskritimo plotas yra:" + apskritimoPlotas1);

}

function apskritimoPlotas (r) {
    return Math.PI * Math.pow(r, 2);

}