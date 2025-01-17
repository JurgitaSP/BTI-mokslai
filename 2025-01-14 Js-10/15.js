//Reikia sukurti funkciją, kuriai padavus skaičių masyvą, 
//reiktų atlikti filtraciją ir palikti tik lyginius skaičius masyve
// ir jį atiduoti iš funkcijos.


// function filtruotiNelyginius(masyvas) {
    // let index = 0;
    //eiti per masyvo skaicius
    // while (index < masyvas.length)//kol indeksas yra mazesnis uz masyvo ilgi, tol vykdome komanda
    // {
// if (masyvas[index] % 2 >0  || typeof masyvas[index] !== "number"){
    // masyvas.splice(index, 1);
// }
// else index ++;
    // }
// return masyvas;
// }

// const masyvas = [1, 2, 3, 4, package, 20, b];

// for(let index = 0; index < masyvas.length; index ++){
    // if (masyvas[index] % 2 >0  || typeof masyvas[index] !== "number"){
        // masyvas.splice(index, 1);
        // index--;
// }

// return masyvas;
// }
// console.log(filtruotiNelyginius(masyvas));
// const masyvas = [1, 2, 3, 4, tekstas, 20, b];
// function atrinktiTekstus(masyvas){
//  for(let index = 0; index < masyvas.length; index++){
    // if (typeof masyvas[index]!== "string"){
        // masyvas.splice(index, 1);
        // index --;
    // }
//  }
//  return masyvas;
// }
// console.log(atrinktiTekstus(masyvas));

masyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getEverySecond(masyvas){
    for(let i = 1; i < masyvas.length; i++){
masyvas.splice(i, 1);
    }
return masyvas;
}
console.log(getEverySecond(masyvas));

function generuotiHtmlSarasa(masyvas){

}