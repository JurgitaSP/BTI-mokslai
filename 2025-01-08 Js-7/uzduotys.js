// Darbas su tekstu
// 1. Sukurti funkciją, kuri atiduoda pirmą pateikto teksto simbolį;
// f-ja tures priimti viena parametra -teksta

function pirmasSimbolis(tekstas){
    return tekstas[0];
}
// let rezultatas = pirmasSimbolis("Sauleja");
// console.log(rezultatas);
console.log(pirmasSimbolis("Jurgita"));


// 2. Sukurti funkciją, kuri atiduoda paskutinį pateikto teksto simbolį;
function paskutinisS(tekstas){
return tekstas.charAt(tekstas.length -1);
}
console.log(paskutinisS("alio"));


// 3. Sukurti funkciją, kuri pakeičia visas tekste pateiktas o raides į 0 (nulius)

function swap(tekstas){
    return tekstas.replaceAll("o", "0");
}
    console.log(swap("kosmosas"));


// 4. Sukurti funkciją, kuri atiduoda tekstą be paskutinio simbolio
function bePaskutinio(tekstas){
    return tekstas.slice(-1);
}
let rezultas4 = bePaskutinio("kakava");
console.log(rezultas4);


// 5. Sukurti funkciją, kuri priimanti tekstą pakeičia pirmąsias dvi raides vietomis
function keiciasi(tekstas){
   return tekstas.replace(tekstas[1], tekstas[0]).replace(tekstas[0],tekstas[1]);
}
// let rezultatas5 = keiciasi('namas');
console.log(keiciasi("koja"));


// 6. Sukurti funkciją, kuri gavusi datą formatu "2024-01-01" atiduoda metus "2024"
function data(tekstas){
    return tekstas.slice(0, 4);
}
let rezultatas6 = data("2025-01-02");
console.log(rezultatas6);


// 7. Sukurti funkciją, kuri gavusi datą tekstiniu formatu "2024-01-01" atiduoda  mėnesį 
// pagal jo pavadinimą: "Sausis"
function menuo(tekstas){
    if(tekstas.slice(5, 7) == "01"){
        return "Sausis";
    }
    else if(tekstas.slice(5, 7) == "02"){
        return "Vasaris";
    }
    else if(tekstas.slice(5, 7) == "03" ){
        return "Kovas";
    }
    else if(tekstas.slice(5, 7) == "04"){
        return "balandis";
    }
    else if (tekstas.slice(5, 7) == "05"){
        return "Geguze";
    }
    else if(tekstas.slice(5, 7) == "06"){
        return "Birzelis";
    }
    else if(tekstas.slice(5, 7) == "07"){
        return "Liepa";
    }
    else if(tekstas.slice(5, 7) == "08"){
        return "Rugpjutis";
            }
            else if(tekstas.slice(5, 7) == "09"){
                return "Rugsejis";
            }
            else if(tekstas.slice(5, 7) == "10"){
                return "Spalis";
            }
            else if(tekstas.slice(5, 7) == "11"){
                return "Lapkritis";
            }
            else if(tekstas.slice(5, 7) == "12"){
                return "Gruodis";
            }
           
}

console.log(menuo("2024-12-01"));


// 8. Sukurti funkciją, kuri priimant parametrą savaitėsDiena (skaičius), 
// atitinkamai gražina savaitės dienos pavadinimą lietuvių kalboje. pvz 
// savaitesDiena(1) -> “Pirmadienis”;

function savaitesDiena(tekstas){
    if(tekstas == 1){
        return "Pirmadienis";
    }
    else if(tekstas == 2){
        return "Antradienis";
    }
    else if(tekstas == 3){
        return "Treciadienis";
    }
    else if(tekstas == "4"){
        return "Ketvirtadienis";
    }
    else if (tekstas == 5){
        return "Penktadienis";
    }
    else if(tekstas == 6){
        return "Sestadienis";
    }
    else if (tekstas ==7){
        return "Sekmadienis";
    }
    else {
        return "tokios savaites dienos nera"
    }
}
console.log(savaitesDiena("4"));

//raidiu apkeitimas vietomis
function keitimas(tekstas){
    let pirmoji = tekstas[0];
    let antroji = tekstas[1];
    let rezultatasx = antroji + pirmoji + tekstas.slice(2);
    return rezultatasx;
}
console.log(keitimas("rytoj"));

// 9. Sukurti funkciją, kuri priima parametrą saliesKodas. saliesKodas gali 
// būti pateikiamas iš 3 raidžių (pvz: LTU) arba 2 raidžių (pvz.: LT). 
// Pateikite pilną šalies pavadinimą pagal pateiktą šalies trumpinį.
// LVA arba LV - Latvija
// LTU arba LT - Lietuva
// POL arba PL - Lenkija
// SWE arba SE - Švedija
// GER arba DE - Vokietija
// Visi kiti šalių kodai - Nežinoma šalis

function saliesKodas(tekstas){
    if (tekstas == "LVA" || tekstas == "LV"){
        return "Latvija";
    }
    else if(tekstas == "LTU" || tekstas == "LT"){
        return "Lietuva";
    }
    else if(tekstas == "POL" || tekstas == "PL"){
        return "Lenkija";
    }
    else if(tekstas == "SWE" || tekstas == "SE"){
        return "Svedija";
    }
    else if(tekstas == "GER" || tekstas == "DE"){
        return "Vokietija";
    }
    else {
        return "Salis nezinoma"
    }
}
let rezultatas9 = saliesKodas("LT");
console.log(rezultatas9);