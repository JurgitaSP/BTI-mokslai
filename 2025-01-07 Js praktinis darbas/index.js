// 1 Parašykite f-ją, kuri patikrintų ar galima sudaryti trikampį iš 3 duotų 
// kraštinių ilgių (a,b,c). Atsakymo pvz: „kraštinės a, b, c sudaro trikampį“
// „kraštinės a, b, c nesudaro trikampį“
function arTrikampis(a, b, c) {
    if ((a + b) > c && (b + c) > a && (c + a) > b) {
        return `krastines ${a}, ${b}, ${c} sudaro trikampi`
    }
    else {
        return `krastines ${a}, ${b}, ${c} nesudaro trikampi`
    }
}
console.log(arTrikampis(5, 6, 12));

// 2. Kavos puodelių skaičiuotuvas. 6 nusiperki, 7 nemokamas. Sukurti f-ją, 
// kuri apskaičiuotų kiek kavos puodelių iš viso pirkėjas gaus.
// Pavyzdys: 
// totalCups(6) ➞ 7
// totalCups(12) ➞ 14
// totalCups(213) ➞ 248

function totalCups(sk) {
    if (sk % 6 == 0) {
        return sk = sk + (sk / 6)
    }
}
console.log(totalCups(12))



// 3. Parašykite funkciją, kuri apskaičiuos nuolaidos dydį priklausomai nuo
// to, kiek pinigų pirkėjas išleido. Skaičiavimai atlikti pagal šias
// taisykles:
// Iki 50 € – nuolaida nėra taikoma (0%).
// Nuo 50 € iki 100 € – taikoma 10% nuolaida.
// Nuo 100 € iki 200 € – taikoma 15% nuolaida.
// Daugiau nei 200 € – taikoma 20% nuolaida.
// Išvedimo pvz: Pirkėjas pirko prekių už X sumą, kam buvo
// pritaikyta nuolaida Y, Pirkėjas sumokėjo Z sumą pinigų.
function Nuolaidos(suma) {
    if (suma < 50) {
        return `Pirkėjas pirko prekių už ${suma} sumą, kam buvo pritaikyta nuolaida 0, Pirkėjas sumokėjo ${suma} sumą pinigų.`;
    }
    else if (suma >= 50 && suma < 100) {
        return `Pirkėjas pirko prekių už ${suma} sumą, kam buvo pritaikyta nuolaida 10%, Pirkėjas sumokėjo ${suma * 0.9} sumą pinigų.`;
    }
    else if (suma >= 100 && suma < 200) {
        return `Pirkėjas pirko prekių už ${suma} sumą, kam buvo pritaikyta nuolaida 15%, Pirkėjas sumokėjo ${suma * 0.85} sumą pinigų.`;
    }
    else (suma >= 200)
    {
        return `Pirkėjas pirko prekių už ${suma} sumą, kam buvo pritaikyta nuolaida 20%, Pirkėjas sumokėjo ${suma * 0.8} sumą pinigų.`;
    }

}
console.log(Nuolaidos(40));
console.log(Nuolaidos(70));
console.log(Nuolaidos(120));
console.log(Nuolaidos(205));



// 4. Sukurkite funkciją, kuri patikrins, ar skaičius yra tam tikrame
// intervale. Funkcija turėtų priimti tris parametrus: skaičių ir du
// intervalus (minimalų ir maksimalų), grąžinti true,
// jei skaičius yra intervale, ir false, jei ne

function arPatenka(z, min, max) {
    if (min < max) {
        if (z >= min && z <= max)
            return true;
        else return false;
    } else {
        if (z <= min && z >= max) return true;
        else return false;
    }
}
console.log(arPatenka(2, 0, 6));
console.log(arPatenka(8, 0, 6));
console.log(arPatenka(12, 13, 26));