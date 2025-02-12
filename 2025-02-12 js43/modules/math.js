//export default gali buti tik vienas faile
export default function instruktions(){
    console.log(`F-ja suma(masyvas) - susumuoja kiekviena masyvo elementa`);
    console.log(`F-ja vidurkis(masyvas) - apskaiciuoja viso masyvo vidurki`);
    
}

// let masyvas = [1,2,3,4,5]
export function suma(masyvas){
let suma = 0;
masyvas.forEach(element => {
    suma += element;
});
return suma;
}
// console.log(sum[1,2,3,4,5]);

export function vidurkis(masyvas){
    const sum = suma(masyvas);
    return sum / masyvas.length;
};
// // console.log(vidurkis(masyvas));


// importuojama gali buti ir konstantos
//importuojami turi buti deklaruoti kaip kinatmieji
export const PI = 3.14

// const PI = 3.14
// export PI   negalimas variantas

// const localPI = 3.14
// export const PI = localPI; GALIMAS VARIANTAS
//KUR VYKDOMAS EXPORTAS, TURI BUTI DEKLARUOTAS KINTAMASIS IR JO REIKSME

export let einamasisSkaicius = 0;

export function printEinamasisSkaicius(){
    console.log(einamasisSkaicius);
    
}
export function setEinamasisSkaicius(kitasSkaicius){
    einamasisSkaicius = kitasSkaicius;
}
export function apskritimoPlotas(spindulys){
 return PI * 2 * spindulys **2;
}
