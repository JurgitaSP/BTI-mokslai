let x = 2;
//let - kintancios reiksmes
// const a = statinis tekstas"(nekeicia duomenu tipo)
x =1*2;


if (x < 3){
    console.log("skaicius per mazas");
}
else if (x > 5){
    console.log("skaicius yra per didelis");
}
else {
    console.log("skaicius yra gero dydzio");
}

let piniguKiekis = 10;
let bandelesKaina = 2;
let kiekis = prompt("Kiek jus norite  nusipirkti baneliu?");

let bandeliuKaina = bandelesKaina * kiekis;

if (bandeliuKaina > piniguKiekis){
    console.log("Bandeliu nusipirkti negalite, nepakanka pinigu");
}
else {
    piniguKiekis = piniguKiekis - bandeliuKaina;
    console.log("Stai jusu bandeles. Aciu, kad pirkote");
    console.log(`Naujas balansas: ${piniguKiekis} €`);
}
//perekam bandeles toliau, jei kintamieji jau aprasyti, "let" nebereikia rasyti

kiekis = prompt("Kiek jus norite  nusipirkti baneliu?");
bandelesKaina = 2;
bandeliuKaina = bandelesKaina * kiekis;
if (bandeliuKaina > piniguKiekis){
    console.log("Bandeliu nusipirkti negalite, nepakanka pinigu");
}
else {
    piniguKiekis = piniguKiekis - bandeliuKaina;
    console.log("Stai jusu bandeles. Aciu, kad pirkote");
    console.log(`Naujas balansas: ${piniguKiekis} €`);
}

