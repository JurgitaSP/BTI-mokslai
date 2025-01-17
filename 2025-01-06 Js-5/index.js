function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// generuojam 3 atsitiktinius sk

let sk1 = rand(1, 10);
let sk2 = rand(1, 10);
let sk3 = rand(1, 10);
console.log("Pirmasis skaicius yra " + sk1);
console.log("Antrasis skaicius yra " + sk2);
console.log("Treciasis skaicius yra " + sk3);

// console.log’inkite patį didžiausią iš šių trijų skaičių;
if (sk1 > sk2 && sk1 > sk3){
    console.log ('Pats didziausias is visu yra ' + sk1);
}
else if (sk2 > sk1 && sk2 > sk3){
    console.log ('Pats didziausias is visu yra ' + sk2);
}
else if ( sk3 > sk1 && sk3 > sk2){
    console.log ('Pats didziausias is visu yra ' + sk3);
}
// console.log’inkite patį mažiausią iš šių trijų skaičių;

else if (sk1 < sk2 && sk1 < sk3){
    console.log ('Pats maziausias is visu yra ' + sk1);
}
 else if (sk2 < sk1 && sk2 < sk3){
    console.log ('Pats maziausias is visu yra ' + sk2);
}
else if( sk3 < sk1 && sk3 < sk2){
    console.log ('Pats maziausias is visu yra ' + sk3);
}
// Jei pirmų dviejų sk. suma yra didesnė nei paskutinių dviejų sk. suma, 
// dalinkite visų trijų sumą iš 3 ir apvalinkite į didžiąją pusę. 
// Rezultatą console.logi’inkite;
if (sk1 + sk2 > sk2 + sk3){
    sk = Math.ceil((sk1 + sk2 + sk3) / 3);
    console.log(sk);
}
// Jei pirmų dviejų sk. suma yra mažesnė nei paskutinių dviejų sk. suma, 
// dalinkite visų trijų sumą iš 5 ir apvalinkite į mažąją pusę. 
// Rezultatą console.logi’inkite;
else if (sk1 + sk2 < sk2 + sk3){
    sk = Math.floor((sk1 + sk2 + sk3) / 5);
    console.log(sk);
}
// Jei pirmas skaičius didesnis už antrąjį tačiau mažesnis už trečiąjį - 
// konsolėje parašykite - “Pirmas - vidurinis”;
if (sk1 > sk2 && sk1 < sk3) console.log("Pirmas-vidurinis");

// Jei antras skaičius didesnis už abu - konsolėje parašykite “Antras didžiausias”;
if (sk2 > sk1 && sk2 > sk3) console.log("Antras didziausias");

// Jei trečias skaičius mažesnis už abu - konsolėje parašykite “Trečias mažiausias”
if (sk3 < sk1 && sk3 < sk2) console.log("Trecias maziausias");

// Jei pirmasis skaičius yra 3, 5 arba 7 - konsolėje parašykite to 
// skaičiaus pakėlimo 4-tuoju laipsniu rezultatą.
if (sk1 == 3 || sk1 == 5 || sk1 ==7){
    sk = sk1**= 4;
    console.log(sk);
}

// Jei pirmasis skaičius yra 4 arba 9 - konsolėje parašykite to skaičiaus
//  šaknies rezultatą 
if (sk1 == 4 || sk1 == 9){
    sk = sk1 ** (1/2)
    console.log(sk);
}

