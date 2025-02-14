// 1. Parašykite f-ją, kuri išvestų nurodyto skaičiaus daugybos lentelę
// Multiplication(3)
// 1 * 3 = 3
// 2 * 3 = 6
// 3 * 3 = 9
// Ir t.t. iki
// 10 * 3 = 30


// function daugyba(skaičiaus)
//     for(n=1; n <= 10; i++){
//                 console.log('${n} * ${skaicius} = ${skaičiaus * n}`);
   

// }
// daugyba(3);

// 2. Išvesti į konsolę skaičiuos nuo 10 iki 100. Visais žinomais ciklais 
// while, // do while, for
// pvz (10, 20, 30,..,..,..,.., 100

// for(i = 10; i <= 100; i+=10){
//     console.log(i);
// }


// let  i = 110;
// while (i <= 100){
//     console.log(i);
//  i +=10;
// }

let n = 10;
do{
console.log(n)
    n +=10;
}
while(n <= 100)


// 3. Perašyti pateikta ciklą for į ciklą while. Gaunamas rezultatas:
// for(let i = 0; i <= 10; i += 2){
//console.log(`Skaicius i = ${i}`);
// }
let i = 0; 
while (i <= 10){
    console.log(`Skaicius i = ${i}`);
    i += 2;
}

// 4. Naudojantis ciklu, sumuokite visus skaičius nuo 1 iki 100 ir išveskite galutinį 
// rezultatą.Uždavinį išspręskit dviem skirtingais būdais while ir for ciklu
let suma = 0;
for(let i=1; i <= 100; i++){
    
    suma += i;
}
console.log(`Galutine suma ${suma}`)


// 5. Parašykite f-ją, kuri išvestų visus skaičius, kurie dalijasi iš 3 intervale 
// nuo 0 iki 100. // Uždavinį išspręskit dviem skirtingais būdais while ir for ciklu


// 6. Parašyti f-ją, kuriai būtų paduodamas bet kokio ilgio skaičius ir suskaičiuoja 
// kiek skaitenų jį sudaro
// Pvz:
// countDigits(458962) => 6
// countDigits(452) => 3
// countDigits(19) => 2

function countDigits(skaicius){
// return Math.abs(skaicius).toString().length; 
let rezult = 0;
while(skaicius > 0){
    skaicius=Math.floor(skaicius/10);
    rezult++;
}
return rezult
}

console.log(countDigits(-12));


// 7. Matematikas, pastebėjęs gobšaus turtuolį pasiūlė tokį sandorį:Pirmą dieną
//  jis turtuoliui duos 1 mln. dolerių, o tas jam už tai sumokės 2 
// centus. Kitą dieną matematikas ir vėl duos turtuoliui 1 mln. dolerių, o tas 
// jam užmokės dvigubai daugiau negu praėjusią dieną, t.y. 4 centus. Ir taip jie 
// darys visą mėnesį (31 dieną, matematikas kasdien duos po milijoną dolerių, o 
// turtuolis mokės dvigubai daugiau negu praėjusią dieną. Parašykite programą 
// kuri suskaičiuotų kiek pinigų duos matematikas . turtuoliui ir kiek turtuolis 
// sumokės matematikui.

// 8. Parašyti programą kuri atspausdintu visus Armstrongo skaičius nuo 100 iki 999 
// intervale. Armstongo skaičiaus pvz ABC = A3 + B3 + C3 (visų
// atskirų skaitmenų pakeltų skaičiaus skaitmenų kiekio laipsniu suma.)
//


