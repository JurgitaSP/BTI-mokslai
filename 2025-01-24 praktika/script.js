// 1. Sugeneruokit atsitiktinių reikšmių masyvą, masyvo elementų skaičius 30, 
// Masyvo elementų reikšmės nuo 1 iki 10. Tai yra klasės mokinių vidurkiai. 
// Rasti geriausiai besimokantį ir blogiausiai.
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function kurtiAtsitiktiniuSkaiciuMasyva(n, m, o) {
    const masyvas = [];
    // const geriausiaiBesimokantys = Math.max(...pazymiuMasyvas);
    // const blogiausiaiBesimokantys = Math.min(...pazymiuMasyvas);

    for (let i = 0; i < n; i++) {
        let atsitiktinis = rand(m, o);
        masyvas.push(atsitiktinis);
    }
    return (masyvas);
}
console.log(kurtiAtsitiktiniuSkaiciuMasyva(30, 1, 10));

// function vidurkis() {
//     for (let i = 1; i < pazymiuMasyvas.length; i++) {
//       return geriausiaiBesimokantys, blogiausiaiBesimokantys;
//     }
//   }
//   console.log(`Saunuoliai ${geriausiaiBesimokantys}`);
//   console.log(`Nevidonai ${blogiausiaiBesimokantys}`);


// 2. Studento trimestro disciplinų skaičius yra 7, kiekvienoje disciplinoj min 
// 3 pažymiai. Rasti studento semestro vidurkį. Paprastesnis variantas susikuriam 
// masyvą rankiniu būdu Sudėtingesnis variantas susigeneruojam masyvą iš random 
// pažymių nuo 1 iki 10, pažymių kiekis irgi random nuo 3 iki 6

function pazymiuVidurkis(masyvas) {
    let suma = 0;
    for (let i = 0; i < masyvas.length; i++) {
        suma += masyvas[i];
    }

    return suma / masyvas.length;
}
console.log(pazymiuVidurkis([1, 5, 9, 8, 7, 3, 10, 6, 5, 8, 9, 7,]));




// function pazymiuVidurkis(x, y, z) {
//     const masyvas = [];
//     for(let i = 0; i < x; i++){
//         let atsitiktinis = rand(y, z);
//         let kiekPazymiu = rand(3, 6);
//         masyvas.push(atsitiktinis);
//     }
//     return masyvas / masyvas.length;

// }




// 3. Mokytojų atlyginimai suvesti į masyvą. Rasti kiek žmonių gauna < nei 600
// Eurų., < nei 800Eurų. ir < nei 1100 eurų. Iš tų trijų grupių surasti, kurių
// yra daugiausia?
// Paprastesnis variantas susikuriam masyvą rankiniu būdu su minimum 10 elementų
// Sudėtingesnis variantas susigeneruojam masyvą iš random skaičių nuo 500 iki
// 1100, elementų gali būti 100

function darboUzmokestis(masyvas) {
    let sumaMin = 0;
    let sumaMid = 0;
    let sumaMax = 0;
    let atsitiktinis = rand(500, 1100);
    for (let i = 0; i < masyvas.length; i++) {
        if (masyvas[i] < 600) {
            return sumaMin++;
        }
        else if (masyvas[i] < 800) {
            return sumaMid++;
        }
        else if (masyvas[i] <= 1100) {
            return sumaMax++;
        }
        if (sumaMin > sumaMid && sumaMin > sumaMax) {
            return `Atlyginima maziau nei 600 euru gauna ${sumaMin} mokytoja ir tai yra didziausia grupe`;
        }
        else if (sumaMid > sumaMin && sumaMid > sumaMax) {
           return `Atlyginima 800 euru gauna ${sumaMid} mokytojai ir tai yra didziausia grupe`;
        }
        else if (sumaMax > sumaMin && sumaMax > sumaMid) {
            return `Atlyginima 1100 gauna ${sumaMax} mokytoju ir tai yra didziausia grupe`;
        }
        else if (sumaMin = sumaMid && sumaMin == sumaMax) {
            return `Atlyginima 600 eur, 800 eur, 1100 gauna vienodas skaicius ${sumaMin} mokytoju`
        }
    }

}
// console.log(darboUzmokestis(sumaMin));



// 4. Parašyti f-ją kuri sudvigubintu masyvą @example
// ['Ace', 10, true] => ['Ace', 10, true, 'Ace', 10, true]
// [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]


function dvigubai(masyvas) {
    
return naujasMasyvas = ((masyvas.toString() + "," + masyvas.toString()).split(" , "));
      
}
console.log(dvigubai(['Ace', 10, true]));


// 5. Parašyti funkciją, kuri stringų masyvo elementus transformuoja į didžiasias
// raides. @example
// [ 'internship', 'glutinous-shriek', 'elevation' ] => [ 'INTERNSHIP',
// 'GLUTINOUS-SHRIEK', 'ELEVATION' ],
// [ 'a', 'b', 'c', 'd', 'e' ] => [ 'A', 'B', 'C', 'D', 'E' ]

function didziosios(masyvas){
    return masyvas.toUpperCase();
}

console.log(didziosios("'a', 'b', 'c', 'd', 'e'"));
console.log(didziosios("'internship', 'glutinous-shriek', 'elevation'"));



// 6. Parašyti f-ją, kuri, gražintų masyvą su kito masyvo string ilgiais
// @example [ '', 'a', 'bc', 'def', 'ghij' ] => [ 0, 1, 2, 3, 4 ]
// [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]


// function ilgiai(masyvas) {
//       const naujasMasyvas = [];
//     for (let i = 0; i < masyvas.length; i++) {
//            naujasMasyvas.push(masyvas[i].length);
       
//     }
//     return naujasMasyvas
// }
// console.log(ilgiai());


const stringas = ["", "a", "bc", "def", "ghij"];
function stringoIlgis(stringas) {
  return stringas.map((str) => str.length);
}
console.log(stringoIlgis(stringas));
 
const stringass = ["angular", "react", "ember"];
function stringoIlgiss(stringass) {
  return stringass.map((str) => str.length);
}
console.log(stringoIlgiss(stringass));
 