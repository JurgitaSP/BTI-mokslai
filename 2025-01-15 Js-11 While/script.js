// 1.Sukurkite funkciją, kuri sukuria atsitiktinių skaičių masyvą iš N elementų. 
// Atsitiktiniai skaičiai nuo M iki O;// pvz: console.log(generuotiAtsitiktinius(4, 100, 105)); 
// atsakymas konsolėje: [101, 101, 100, 105] 
//n- kiek elementu yra masyve
// m- nuo kurios reiksmes imammi elemntai masyvui
// o -reiksme max, iki kurios generuojamas atsitiktinis sk.
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function kurtiAtsitiktiniuSkaiciuMasyva(n, m, o) {
    //1. deklaruoti nauja masyva []
    const masyvas = [];
    //2. naudosime cikla, naudojanti koda daug (n ) kartu
    //while 
    // let index = 0;
    // while (index < 10)
    //{
    //...
    //index++;
    //}
    for (let i = 0; i < n; i++) {// 2.1 generuojamas atsitiktinis skaicius nuo m iki o
        let atsitiktinis = rand(m, o);
        // 2.2. tas atsitiktinis skaicius bus pridedamas i naujai deklaruota masyva
        masyvas.push(atsitiktinis); //masyvas.push(rand(m, o)); galima sutrumpinti
    }
    //3. return masyvas []
    return (masyvas);
}

console.log(kurtiAtsitiktiniuSkaiciuMasyva(100, 1, 9));

//  2. Sukurkite funkciją, kuri console.log’e parašo tik skaičius iš masyvo M, // mažesnius nei
//  N. pvz: tikMazesni([4,5,6,7,2,4], 5);
// atsakymas konsolėje: 4, 2, 4 
//M- skaiciu masyvas, kuris paduodamas f-jai
//N- iki kurios reiksmes konsole logins sk. is  masyvo

function tikMazesni(m, n) {
    for (let i = 0; i < m.length; i++) {
        if ((m[i]) <= n) {
            console.log(m[i]);
        }
    }
}
tikMazesni([4, 1, 2, 3], 4);

// 3. Sukurkite funkciją, countAllThrees(array), kuri suskaičiuotų, kiek kartų 
// pateiktame skaičių masyve yra pasikartojantis skaičius 3;

function countAllThrees(array) {
    let pasikartojimuSkaicius = 0; //isivedame kintamaji, kuris skaiciuos padidejimus
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 3 || array[i] == 6 || array[i] == 4) {
            pasikartojimuSkaicius++; ///pliusuoja kai skaicius atitinka salyga
        }
    }
    return pasikartojimuSkaicius;
}
console.log(countAllThrees(kurtiAtsitiktiniuSkaiciuMasyva(100, 1, 9)));
console.log(countAllThrees([5, 8, 7, 2, 3, 6, 4, 6, 3, 9]));

// 4. Sukurkite funkcijas countAllEven(array) ir countAllOdd(array). Pirmoji funkcija suskaičiuoja, 
// kiek yra lyginių skaičių pateiktame masyve. Kita suskaičiuoja kiek yra nelyginių skaičių;

function countAllEven(array) {
    let pasikartojantis2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            pasikartojantis2++;
        }
    }
    return pasikartojantis2;
}
function countAllOdd(array) {
    let pasikartojantis2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            pasikartojantis2++;
        }
    }
    return pasikartojantis2;
}
console.log(countAllEven([2, 7, 8, 5, 6]));
console.log(countAllOdd(kurtiAtsitiktiniuSkaiciuMasyva(100, 1, 9)));

// 5.Sukurkite funkciją countAllEvenUnderSix(array), kuri suskaičiuoja, kiek yra lyginių skaičių, 
// kurių reikšmė yra  6 arba mažesnė  pateiktame masyve.
function countAllEvenUnderSix(array) {
    let kiekPasikartoja = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 && array[i] <= 6) {
            kiekPasikartoja++;
        }
    }
    return kiekPasikartoja;
}
console.log(countAllEvenUnderSix([12, 36, 8, 1, 3, 5, 8, 4, 2, 6, 4, 2]));

// 6. Sukurkite funkciją throwCoin(), kuri imituoja monetos metimą. funkcijos gražinama reikšmė: 
// “H” - Herbas arba “S” - Skaičius;

function throwCoin() {
    if (rand(0, 1) == 1) return "H";
    return "S";
}
console.log(throwCoin());

// 7. Sukurkite funkciją, kuri imituoja monetos metimą 20 kartų, suskaičiuokite kiek kartų iškrito 
// skaičius, kiek kartų iškrito herbas. Paskaičiuokite procentaliai, kokiu dažnumu krito skaičius, 
// kokiu dažnumu krito herbas; (pasiūlymas patobulinimui mini-game - > pridėti puslapyje mygtuką, 
//     leisiantį pasirinkti kokios pusės monetos tikitės, ir pridėti mesti monetą mygtukus, tada 
//     atitinkamai atvaizduoti, buvo laimėta - ar pralaimėta)

function throwCoin2(n = 20) {
    let kiekKartuSkaicius = 0;
    let kiekKartuHerbas = 0;

    for (let i = 0; i < n; i++) {
        //ivyksta metimas
        let iskritusiReiksme = throwCoin();
        //metimo ivertinimas
        if (iskritusiReiksme == "H") {
            kiekKartuHerbas++;
        }
        else {
            kiekKartuSkaicius++;
        }
    }

    let procentaliaiKritoSk = (kiekKartuSkaicius / n) * 100;
    let procentaliaiKritoHrb = (kiekKartuHerbas / n) * 100;

    console.log(`Herbas iskrito ${kiekKartuHerbas} kartu`);
    console.log(`Skaicius iskrito ${kiekKartuSkaicius} kartu`);
    console.log(`Skaicius procentaliai krito ${procentaliaiKritoSk} % atveju, Herbas procentaliai krito ${procentaliaiKritoHrb} % atveju`);
        
}
throwCoin2(56);

// 8.Sukurkite funkciją sumAll(masyvas), kuri susumuoja visus masyvo elementus, bei gražina šią sumą
// kaip rezultatą;
function sumAll(masyvas){
    let suma = 0;
    for(let i = 0; i < masyvas.length; i++)suma += masyvas[i];
         
    return suma;
}
console.log(sumAll([1, 5, 9, 8, 7, 3]));

// 9.Sukurkite funkciją average(arr), kuri atranda visų masyve pateiktų skaičių vidurkį; PVZ:
// average([1,2,3,4,5])//3

function average(masyvas){
    // let suma = 0;
    // for(let i = 0; i < masyvas.length; i++)suma += masyvas[i];
    let suma = sumAll(masyvas)
 return suma / masyvas.length;
}
console.log(average([1, 5, 9, 8, 7, 3, 4, 8]));

// 10.Sukurkite funkciją findAllUniqueNumbers(masyvas), kuri atranda masyve esančius unikalius 
// skaičius.gražina juos masyvo pavidalu: pvz: findAllUniqueNumbers([1,1,2,8,8,1, 4, 6]) // 
// [1,2,8,4,6];

function findAllUniqueNumbers(masyvas){
    const unikalusSkaicius = [];
    for(let i = 0; i < masyvas.length; i++){
        if(!unikalusSkaicius.includes(masyvas[i])){
            unikalusSkaicius.push(masyvas[i]);
        }
    }
    return unikalusSkaicius
}
console.log(findAllUniqueNumbers([1, 1, 2, 8, 8, 1, 4, 6]));
