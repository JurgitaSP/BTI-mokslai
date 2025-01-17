// Sukurti f-ją, kuriai būtų perduodamas vienas parametras skaičius, kuris
// padidinamas vienetu ir gražinamas rezultatas

function newNumber(num) {
    num = num + 1;
    return num;
}

console.log(newNumber(6));

// function addOne(num){
// num = num + 1;
// num += 2;}
// num ++; padidina tik vienetu
// num --; mazina tik vienetu

// let n1 = 58;
// addOne(n1);

// Sukurti f-ją, kuriai būtų perduodamas vienas parametras skaičius(valandos)
// ir  konvertuotų valandos į sekundes, bei gražintų rezultatą
function numberH(numh) {
    numh = numh * 3600;
    return numh;
}
console.log(numberH(1));

// Sukurti f-ją, kuri skaičiuotų krepšinio taškus, pirmas perduodamas parametras baudų skaičius,
// antras perduodamas parametras dvitaškių skaičius, trečias perduodamas tritaškių.
// Apskaičiuoti ir gražinti bendrą surinkta komandos taškų skaičių.

function taskai(baudos, dvitaskiai, tritaskiai) {
    let rezult = baudos + dvitaskiai * 2 + tritaskiai * 3;
    return rezult;
}
console.log(taskai(12, 45, 30));

// Parašykite f-ją, kuri apskaičiuotų trikampio plotą.
// Perduodami parametrai trikampio aukštinė (h) ir trikampio pagrindas (b)
// Funkcija gražina trikampio plotą.

function plotas(aukstine, pagrindas) {
    let trPlotas = (aukstine * pagrindas) / 2;
    return trPlotas;
}
console.log("Trikampio plotas " + plotas(6, 4))

// Paraykite f-ją, kuriai būtų paduodami du parametrai (skaičiai), ir f-ja gražintų true  jei dviejų skaičių sumą yra mažiau arba lygų 100 ir false jei daugiau už 100.

function lessThan(a, b) {
    if (a + b <= 100) {
        return true;
    }
    return false;
}
console.log(lessThan(58, 605));

// Sukurkite f-ją, kuri nustatytų ar du paduodami argumentai yra lygūs. 
// Gražiname true arba false

function equal(a, b) {
    if (a == b) {
        return true;
    }
    return false;
}
console.log(equal(4, 6));

// Sukurti f-ją, kuri nustatytų, kuris iš paduodamų parametrų (n1, n2) yra didesnis.
//  Jei n1 didesnis gražintų tekstą "n1 skaičius didesnis", jei "n2 skaičius didesnis", 
// jei skaičiai lygūs gražintų n1 lygus n2.

function whichBiger(n1, n2) {
    if (n1 == n2) {

        return n1 + ` lygu ` + n2;

    } else if (n1 <= n2)
        return n2 + ` skaicius didesnis ` + 1;

    else if (n1 >= n2) {
        return n1 + ` skaicius didesnis ` + 1;
    }

}
console.log(whichBiger(8, 9));



//    Sukurti f-ją, kuri paskaičiuotų bendrą ūkininko gyvulių kojų skaičių. Ūkininkas
// pateikia // tris parametrus Pirmas parametras vištų skaičius, antras karvių skaičius,
//  trečias paršelių skaičius ūkyje. // F-ja gražiną bendrą kojų skaičių  
function kojuSkc(h, y, o) {
    return kojuSkc = (h * 2) + (y * 4) + (o * 4);
}
console.log(kojuSkc(2, 5, 3));


// Sukurk f-ją, kuri gautu du parametrus (a, b). F-ja gražina 10 jei vienas iš 
// skaičiu = 10  arba tų skaičių suma  = 10 (a=10;b=10; arba a+b=10)

function arTiesa(a, b) {
    if (a == 10 || b == 10 || a + b == 10) {
        return true;
    }
    return false;
}
console.log(arTiesa(4, 6));

// Sukurk f-ją, kuri gauna vieną parametrą skaičių (n)
// ir jei skaičius dalinasi iš 100, gražiną true, priešingu atveju false.

function arDalinasi(a) {
    if (a % 100 == 0) {
        return true;
    }
    return false;
}
console.log(arDalinasi(30));

// Sukurk f-ją, kuri patikrintu ar asmuo turi leidimą ir ar asmuo yra 
// vyresnis nei 18 metų abi sąlygos būtinos, kad f-ja gražintų true, priešingu 
// atveju gražina false

function legal(c, d) {
    if (c > 18 && d == true) {
        return true;
    }
    return false;
}
console.log(legal(19, true));

// 1. Parašykite f-ją, kuriai perduodamas vienas parametras, ir ji nustatytų 
// ar skaičius yra lyginis ar ne.Išvedamo atsakymo pvz. => X skaičius yra lyginis
// Arba => X skaičius yra nelyginis

function arLyginis(sk) {
    if (sk % 2 == 0) {
        return "skaicius x yra lyginis";
    }
    return "skaicius x yra nelyginis";
}
console.log(arLyginis(7));

// 2. Parašykite f-ją, kuriai perduodami du parametrai (skaičius ir daliklis), 
// paskaičiuotumėte likutį dalinant.Išvedamo atsakymo pvz. => Dalinant X iš Y, 
// liekana yra Z

function dalyba(skc, dlkls) {
    let skcDalyba = skc % dlkls;
    return "Dalinant " + skc + " is " + dlkls + ", liekana yra " + skcDalyba;
}
console.log(dalyba(12, 5));

// 3. Parašykite f-ją, kuriai perduodami du parametrai, paskaičiuotų dviejų 
// skaičių vidurkį Išvedamo atsakymo pvz. => Skaičių X ir Y vidurkis Z

function vidurkis(x, y) {
    let skcVidurkis = (x + y) / 2;
    return "Skaiciu " + x + " ir " + y + " vidurkis " + skcVidurkis;
}
console.log(vidurkis(14, 19));

// 4. Laikrodis rodo laiką h, m, s. Parašykite programą, kuri apskaičiuotų 
// kiek sekundžių prabėgo po vidurnakčio. (perduodami trys parametrai)
// Išvedamo atsakymo pvz. => Po vidurnakčio prabėgo XXX sekundžių

function laikas(h, m, s) {
    let sekundesPo = (h * 3600) + (m * 60) + s;
    return "Po vidurnakcio prabego " + sekundesPo + " sekundziu ";
}
console.log(laikas(0, 1, 45));

// 5. Parašykite programą kuri patikrintų ar skaičius dalinasi iš 3, 5 ar iš 
// abiejų tai yra ir iš 3 ir iš 5. 
// Jei dalinasi iš 3 be liekanos atspausdinam „Labas“, 
// jei dalinasi iš 5 be liekanos atspausdinam „Rytas“, 
// jei dalinasi ir iš 3 ir iš 5 atspausdinam „Labas rytas“
// jei nesidalina nei iš 3 nei iš 5 išvedam paprasčiausiai skaičių.
// Išvedamo atsakymo pvz. 3 => „Labas“
// Arba 5 => „Rytas“
// Arba 15 => „Labas Rytas“
// Arba 7 => 7

function arDalinasi(x) {
    if (x % 3 == 0 && x % 5 == 0)
        return "Labas rytas";
    if (x % 3 == 0)
        return "Labas";
    if (x % 5 == 0)
        return "Rytas";
    else return x;
}
console.log(arDalinasi(7));

// 6. Jonas ir Petras dalyvavo šaškių turnyre. Jonas surinko n taškų o Petras 
// m. Nustatykite kuris iš dalyvių surinko daugiau taškų turnyre. 
// Išvedamo atsakymo pvz. => „Laimėtojo vardas : xxxxx“

function taskai(n, m) {
    if (n > m){
        return "Laimetojo vardas: Jonas";
    }
    else if (n < m){
                return "Laimetojo vardas: Petras";
    }
     return "Lygiosios";
   
}
console.log(taskai(9, 8));

// 7. Žinomi kambario matmenys ilgis ir plotis. Reikia apskaičiuoti, kokią 
// pinigų sumą reiks mokėti už plyteles, skirtas kambario grindims kloti, jei 
// plytelių vieno kvadrato kaina yra 23 eurai. Plytelių reikia pirkti 5 proc. 
// daugiau galimiems nuostoliams padengti. Plytelės supakuotos po 1.5m2 ir 
// parduotuvės darbuotojai nesutinka ardyti pakuočių. Galima pirkti tik pilnas pakuotes. 
// Išvedamo atsakymo pvz. => „Kambario dydis X ir Y, reikės Z pakuočių 
// plytelių. Reikalinga pinigų suma E“

function kiekis(ilgis, plotis, kaina, pakuote, paklaida)
 {
    let kambarioPlotis = ilgis * plotis;
       let plyteliuKiekis = Math.ceil((((kambarioPlotis * paklaida)/100)+ kambarioPlotis) / pakuote);
    
    return `Kambario dydis ${ilgis} ir ${plotis}, reikes ${plyteliuKiekis}
    pakuociu plyteliu. Reikalinga pinigu suma ${plyteliuKiekis * pakuote * kaina}`;
}
console.log(kiekis(4, 3, 23, 1.5, 5));



// 8. Pirmos lietuviškos litų monetos išėjo 1925 metais. Tai buvo 5, 2 ir 1 
// lito vertės sidabrinės monetos. Duotą pinigų sumą n litais pakeiskite nurodytomis 
// monetomis, panaudojant kuo mažiau monetų. 
// Atsakymo galimas pvz: „Norint gauti n sumą litais, mums reikės n1 monetų po 5 lt, 
// n2 monetų po 2 litus ir n3 monetų po 1 litą. Viso monetų N skaičius“



 function monetos (n){
   let n1 = (n - (n % 5))/5;
   let n2 = (n - n1 * 5 - ((n - n1) % 2))/2;
   let n3 = n - n1 * 5 - n2 * 2;
   let monetuSk = n1 + n2 + n3;
   return "Norint gauti " + n + " suma litais, mums reikes " + n1 + " monetu po 5 lt, " +
        n2 + " monetu po 2 litus ir " + n3 + " monetu po 1 lita. Viso monetu " + (monetuSk) + " skaicius. "

 }
 console.log(monetos(126));