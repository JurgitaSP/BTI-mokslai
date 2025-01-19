
// f-ja neprivalo buti iskvieciama mygtuku is html, gali buti iskviecima paciame JS
// ir atiduoti tarpiniu apskaicimu rezultatus

// function padaugintiIsDvieju(){} - tuscioji f-ja, jos kintamieji/parametrai 
// skliaustuose ir // naudojimi tik tos f-jos ribose

// function padaugintiIsDvieju(skaicius){
// \} - bloga f-ja(gera, bet rezultato neisves)
// console.log(skaicius); console uz f-jos ribu, todel nerodo
// Return raktazodis turi dvi paskirtis:1. pabaigti f-ja; 2. atiduoti rezultat;
// po return jau nereikia rasyti f-ju, nes neveiks

function padaugintiIsDvieju(skaicius){
    let skaiciukas = 7;
    return skaiciukas;
}
// tiesioginis f-jos rezultato prodymas i console
console.log(padaugintiIsDvieju(7));
// galima deklaruoti ir kintamasis reultata
// const rez = padaugintiIsDvieju(); isaugotas rezultatas kintamuosiuose 
// ir galima naudoti toliau

function padaugintiIsDvieju(skaicius){
    let rezultatas = skaicius * 2;
    return rezultatas;
   }
const rez = padaugintiIsDvieju(9);
console.log(rez);

// parametru ivertinimui/patikrinimui if(typeof skaicius === "number")

function padaugintiIsDvieju(skaicius){
    if(typeof skaicius != "number"){
        // console.error skirta atvaizduoti musu paciu klaidai
        console.error("funkcija padaugintiIsDvieju() priima tik skaicius");
        return;
    }
    let rezultatas = skaicius * 2;
    return rezultatas;
   }
const rez1 = padaugintiIsDvieju("tekstas");
console.log(rez1);

// pirmos f-jos panudojimas kitoje f-joje
function padaugintiIsKeturiu(skaicius){
let rezultatas = padaugintiIsDvieju(skaicius) * 2;
return rezultatas;
}
console.log(padaugintiIsKeturiu(8));

// tekstiniai metodai

let  tekstas = "Hello {name}";
console.log(tekstas);

// 1. teksto ilgis vienas is parametru-lenght -atiduoda skaiciu, 
// kiek yra simboliu tekste (skaiciams negalioja)
console.log (tekstas.length);

// tekstas.charAt()- atiduoda ta simboli, kurio numeris parasomas skliaustuose
console.log(tekstas.charAt(4));
// dar galimas varinats su [] - console.log(tekstas[...]));
// simboliai skaiciuojami nuo 0, pirmoji raide bus 0
console.log(tekstas.charAt(4) + tekstas.charAt(5) + tekstas.charAt(1));
// isprintinimas paskutinis simbolis
console.log(tekstas.charAt(tekstas.length - 1));

// replace -pakeicia tam tikras raides, sekas
// pakeicia tik pirmaji raktazodi

// tekstas.replace("{name}", "Lola" - rodys orginalu teksta, truksta =
tekstas = (tekstas.replace("{name}", "Lola"));
console.log(tekstas);

// replaceAll -pakeicia visus raktazodzius
// tekstas = (tekstas.replaceAll("{name}", "Lola"));
// console.log(tekstas);

// teksto karpymo metodai
// slice
// orginalus tekstas
let tekstas2 = "obuoliu pyragas";
// teksto dalis iskirpta, nurodzius tik viena paratmetra, nukirpta 
// bus pradzia iki sito parametro
let tekstoDalis = tekstas2.slice(3, 6);//iskerpama nuo 3 iki 6, 3reiksme iseina, 6 jau ne
console.log(tekstoDalis);

let tekstas8 = "obuolys, bananas, kivi";
let part = tekstas8.slice(7);
console.log(part);//lieka bananas, kivi

// pateikus pirmaji parametra kaip negatyvu nukerpami simboliai nuo galo
//(-4) rezultatas keturi paskutiniai simboliai
// dvi neigiamos reiksmes iskerpa dali teksto nuo galo
let tekstas3 = "sausainis, sokoladas";
let tekstoDalis2 = tekstas3.slice(-7, -3);//kola //-3 neieina
console.log(tekstoDalis2);

// raidziu padidinimas/mazinimas
let tekstasDidziosiomis = tekstas3.toUpperCase();
let tekstasMazosiomis = tekstas2.toLowerCase();

console.log(tekstasDidziosiomis);
console.log(tekstasMazosiomis);

// capitalize("tekstas") - Tekstas
// replace
function capitalize(tekst){
   return tekst.replace(tekst[0], tekst[0].toUpperCase());
}
console.log(capitalize("viena karta"));

//teksto paieskos metodai:
//indexOf() -ieskoti teksto indexo tekste
//lastIndexOf()-iesko nuo teksto galo
//includes() -iesko teksto tekste, bet grzina true arba false
// startWith()-ar prasideda su(...)
// endsWith()-ar pasibaigia su (...)

let tekstas10 = "viena karta girioje...";
console.log(tekstas10);
//indexOf() -ieskoti teksto indexo tekste
let pozicija = tekstas10.indexOf("karta");//iesko visame tekste, neradus atiduoda -1, 
// radus- to simbolio pozicija
console.log(pozicija);
if(tekstas10.indexOf("karta") != -1){
    console.log("Tekstas 'karta' buvo atrastas");
    }
    else {
        console.log('Tekstas "karta" nebuvo atrastas');
    }

    let tekstas7 = "Musu salis yra Lietuva";
    if (tekstas7.includes("Lietuva")){
        console.log("Mes esam lietuviai");
    }
    else if (tekstas7.includes("Lenkija")){
        console.log("Mes esam lenkai");
    }
    else {
        console.log("Mes nezinome, kas mes esame")
    }

    let arLietuviai = tekstas7.includes('Lietuva');//true/false
if (arLietuviai){
    console.log("Mes esam lietuviai");
}
else {
    console.log("Mes ne esame lieuviai");
}
console.log(arLietuviai);

// startsWith()-ar prasideda su(...)
// endsWith()-ar pasibaigia su (...)


if(tekstas7.startsWith("jusu")){
    console.log("Mes esam lietuviai");
}
else {
    console.log("Jus esate lietuviai");
}

console.log(arLietuviai);
