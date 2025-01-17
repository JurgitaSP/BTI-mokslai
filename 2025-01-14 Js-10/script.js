//CIKILAI
//ciklas 
//const produktuKainos = [];//masyvas

//const produktoKaina1 = prompt("Kokia 1 produkto kaina?");
//const produktoKaina2 = prompt("Kokia 2 produkto kaina?");
// const produktoKaina3 = prompt("Kokia 3 produkto kaina?");
// const produktoKaina4 = prompt("Kokia 4 produkto kaina?");
// const produktoKaina5 = prompt("Kokia 5 produkto kaina?");
// const produktoKaina6 = prompt("Kokia 6 produkto kaina?");

// produktuKainos.push(produktoKaina1);
// produktuKainos.push(produktoKaina2);
// produktuKainos.push(produktoKaina3);
// produktuKainos.push(produktoKaina4);
// produktuKainos.push(produktoKaina5);
// produktuKainos.push(produktoKaina6);

// paklaustiProduktoKainos(1);
// paklaustiProduktoKainos(2);
// paklaustiProduktoKainos(3);
// paklaustiProduktoKainos(4);
// paklaustiProduktoKainos(5);
// paklaustiProduktoKainos(6);

// let index = 1;
// while (index < 3){
    // console.log(`ciklo iteracija: ${index}`);
    // paklaustiProduktoKainos(index);
        // index ++;
// }
// console.log(produktuKainos);
//iteracija paties bloko vienas prasisukimo "ratas"


// sukurti f-ja, kuri paklausia produkto kainos, toliau kelintas produktas
// function paklaustiProduktoKainos(kelintasProduktas)
// {
    // const produktoKaina = prompt(`Kokia ${kelintasProduktas} produkto kaina?`);
    // produktuKainos.push(produktoKaina);
// }

//index = 1;
//while (index <= 100){
   // console.log(`Atsiprasau ${index}`);
    //index ++;
//}
//1 misisipe
//2 misisipe
//...
//100 misisipe
//  index = 1;
//  while (index <= 100){
    // console.log(`Misisipe ${index}`);
    // index ++;
//  }

 const produktuKainos = [4, 12.5, 6.2, 4.80, 4, 10];
 let suma = 0;
 let index = 0;
 while(index < produktuKainos.length)
    {
        suma += Math.ceil(produktuKainos[index]);
     index++;
 }
console.log(suma/produktuKainos.length);

 const skaiciai = [];
 index = 0;
 while (index <= 100)
{
 skaiciai.push(index);
 index += 2;
 }
console.log(skaiciai);



function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const atsitiktiniai = [];

index = 1;
while (index <= 10)
    {
    const atsitiktinisSk = rand(1, 100);
atsitiktiniai.push(atsitiktinisSk);
index ++;  
}
console.log(atsitiktiniai);



//Sukurti funkciją, kuri susumuoja visus skaičius masyve ir
//atiduoda bendrą sumą 13:31

suma = sum(atsitiktiniai); //Atsitiktiniu skaičiu suma
console.log(suma);

function sum(masyvas){
    let suma = 0;
    let index = 0;
    while(index < masyvas.lenght){
        suma += masyvas[index];
        index++;
    }
    return suma;
}

// const didziausias = [1, 4, 8, 2, 3];

function didziausias(masyvas){
    let didziausiasSk = 0;
    let index = 0;
    while(index < masyvas.lenght){
        if (masyvas[index] > didziausiasSk){
            didziausiasSk = masyvas[index];
        }
        index ++;
    }
}
