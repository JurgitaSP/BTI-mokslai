// console.log("veikia");
const response = await fetch("https://randomuser.me/api/?results=10");
//{info: {}, data: []}
const data = await response.json();
// const {results} = await response.json();-destruktruravimo vienas is budu
// console.log(data);
//destrukturavimas-norimu elemtu istraukimas is masyvo, objekto, vyksta su {}
//objektu destrukturavimas
const { results, info } = data; //desineje yrs visas objektas(data), kaireje parametras, kuri norime istraukti

console.log(results);//[]
console.log(info);//{}

// const zmoniuMasyvas = data.results;
// console.log(zmoniuMasyvas);

// su : galime pervadinti objektu laukus
// const { results: rezultatai, info } = data;

//MASYVU DESTRUKTURAVIMAS

const masyvas = [1,2,3,4,5];

const [pirmasElementas, , , ketvirtasElementas] = masyvas;
console.log(pirmasElementas,ketvirtasElementas);

