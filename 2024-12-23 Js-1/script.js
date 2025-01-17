// alert('aliio')
var dabartiniaiMetai = 2024;
var vardas = "Laura";
var pavarde = 'Koris';
var amzius = 32;

var gimimoMetai = dabartiniaiMetai - amzius;

// norint sujungti tekstine informacija i viena kintamaji naudojame operatoriu +
var rezultatas = "mano vardas yra " +
    vardas +
    ", o pavarde " +
    pavarde +
    ", as esu gimusi " +
    gimimoMetai +
    " metais";


console.log(rezultatas);

var rezultatas2 = `Mano vardas yra ${vardas}, o pavarde yra ${pavarde}, as esu gimes ${gimimoMetai} metais`;
console.log(rezultatas2);

// operacijos su tekstu
// didziosiomis raidemis tekstinems eilutems
console.log(rezultatas.toUpperCase());
// mazosios raides
console.log(rezultatas.toLocaleLowerCase());
// teksto ilgis
console.log(rezultatas.length);
// norint guti tam tikra raide tekste
console.log(rezultatas.charAt(0));
console.log(rezultatas.charAt(1));
console.log(rezultatas.charAt(2));
// iskerpa dali zenklu (tarp 7 ir 15)
console.log(rezultatas.slice(7, 15));

// naudojantis promt nustatyti prekes pavadonima, kieki ir kaina
// galutiniame rezultate turi matytis tekstas:
// "Prekes X buvo nupirkta Y vnt. po ZEur kaina. Galutine kaina: Z1Eur"

var pavadinimas = prompt("Koks yra jusu prekes pavadinimas?");
var kiekis = prompt("koks yra jusu prekes kiekis?");
var kaina = prompt("kokia yra jusu prekes kaina?");

var pirkimoRezultatas = `Prekes ${pavadinimas} buvo nupirkta ${kiekis} vnt. po ${kaina} Eur kaina. Kaina be PVM: ${kiekis*kaina} Eur, galutine kaina: ${kiekis*kaina*1.21}`;

 console.log(pirkimoRezultatas);//

 /* 
 multiline
 komentras
 */