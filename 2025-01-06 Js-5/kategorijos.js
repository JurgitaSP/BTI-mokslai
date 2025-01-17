function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let sk = rand(1, 99);
console.log(sk);
// Kategorija 1: 0 - 10 - pakelti skaičių kvadratu ir atspausdinti

if (sk <= 10) {
    sk = sk * sk;
    console.log('Skaiciaus kategorija I');
    console.log(sk);
}
// sk *= sk;  skaicius kvadratu; sk **= 3; pakelimas kubu

// Kategorija 2: 11 - 19  - atspausdinti skaičių tokį koks jis yra;
else if (sk <= 19) {
    console.log('Skaiciaus kategorija II');
    console.log(sk);
}
// Kategorija 3: 20 - 49  ir skaičius yra lyginis: Skaičiaus dešimtis 
// atimti iš paties skaičiaus ir atspausdinti
else if (sk <= 49 && sk % 2 == 0) {
    console.log('Skaiciaus kategorija III');
    // 34-3=31
    sk -= (sk - (sk % 10)) / 10;
    console.log(sk);
}
//  Kategorija 4: 20 - 49  ir skaičius yra nelyginis: Skaičiaus vienetus 
// pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;

else if (sk <= 49 && sk % 2 != 0) {
    // (37+7) / 2
    sk = (sk + (sk % 10)) / 2;
    console.log('Skaiciaus kategorija IV');
    console.log(sk);
}
//  Kategorija 5:  50 arba didesnis ir skaičius dalinasi iš 3 be liekanos: 
// Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite
else if (sk >= 50 && sk % 3 == 0) {
    console.log('Skaiciaus kategorija V');
    let sugeneruotasTekstas = String.fromCharCode(rand(65, 90)) + 
    String.fromCharCode(rand(65, 90)) + 
    String.fromCharCode(rand(65, 90)) + 
    String.fromCharCode(rand(65, 90));
    console.log(sugeneruotasTekstas);
}
// Visais kitais, nepaminėtais atvejais išvesti: skaičius netinkamas 
// nei vienai kategorijai;

else console.log ("Sugeneruotas skaicius nepapuola nei i viena kategorija")


// Math.floor ()pavalina sk i mazaja puse
// Math.ceil ()apvalina i didziaja puse
// Math.round ()apvalina iprastai
