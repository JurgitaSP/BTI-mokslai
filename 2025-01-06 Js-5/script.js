
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generuoja du random skaicius
let sk1 = rand(1, 10);
let sk2 = rand(1, 10);
console.log("Pirmasis skaicius yra " + sk1);
console.log("Antrasis skaicius yra " + sk2);

// jei sk1 yra didesnis nei sk2 -parasyti "pirmieji laimi"
// jei sk1 maziau uz sk2 - antrieji laimi
// jei abu lygus - lygiosios
// jei sk1 yra 7 arba 9, ji paverciam i 4
if (sk1 == 7 || sk1 == 9) {
        sk1 = 4;
    console.log('sk1 buvo paverstas i 4');
}
// jei sk2 yra 7 arba 9, ji paverciam i 4
if (sk2 == 7 || sk2 == 9) {
    sk2 = 4;
    console.log('sk2 buvo paverstas i 4');
}

if (sk1 > sk2) {
    if(sk1 % 2 == 0) console.log("Pirmieji laimi lyginiai");
        else console.log('Pirmieji laimi nelyginiai');
}
else if (sk1 < sk2) {
    if(sk2 % 2 == 0) console.log("Antrieji laimi lyginiai");
        else console.log('Antrieji laimi nelyginiai');
}
else {
    console.log("Lygiosios");
}
// nelygu operatorius !=
// operatorius ir &&
// operTORIUS ARBA ||
// if (sk1 > sk2 && % 2 == 0) ar sk1 didesnis uz sk2 ir lyginis
// if (sk1 > sk2 && % 2 != 0)















