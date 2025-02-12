// console.log("veikia");
const response = await fetch("https://randomuser.me/api/?results=10");
//{info: {}, data: []}
// const data = await response.json();
const {results: zmoniuMasyvas} = await response.json();//-destruktruravimo vienas is budu
// console.log(data);
//destrukturavimas-norimu elemtu istraukimas is masyvo, objekto, vyksta su {}
//objektu destrukturavimas
// const { results, info } = data; //desineje yrs visas objektas(data), kaireje parametras, kuri norime istraukti

// console.log(results);//[]
// console.log(info);//{}

// // const zmoniuMasyvas = data.results;
// // console.log(zmoniuMasyvas);

// // su : galime pervadinti objektu laukus
// // const { results: rezultatai, info } = data;

// //MASYVU DESTRUKTURAVIMAS

// const masyvas = [1,2,3,4,5];

// const [pirmasElementas, , , ketvirtasElementas] = masyvas;
// console.log(pirmasElementas,ketvirtasElementas);

console.log(zmoniuMasyvas);
const [pirmasZmogus, , ,ketvirtasZmogus] = zmoniuMasyvas;
console.log(pirmasZmogus);
console.log(ketvirtasZmogus);
console.log(pirmasZmogus.dob.date);
pirmasZmogus.location.street = `${pirmasZmogus.location.street.number}${pirmasZmogus.location.street.name}`;
//visiems 
zmoniuMasyvas.forEach((zmogus) => {
    zmogus.location.street = `${zmogus.location.street.number}${zmogus.location.street.name}`;
    zmogus.location.fullAddress = `${zmogus.location.street}, ${zmogus.location.city}, ${zmogus.location.country}`;
});
// //sutrumpinimas
// zmoniuMasyvas.forEach((zmogus) => {
// const { street, city, country } = zmogus.location;
// zmogus.location.street = `${street.name}${street.number}`;
// zmogus.location.fullAddress = `${zmogus.location.street}, ${city}, ${country}`;
// });

//forEach keicia orginalu masyva, o map sugeneruoja nauja

const atfiltruotaZmoniuInformacija = zmoniuMasyvas.map((zmogus)=>{
    const {first, last} = zmogus.name;
    return{
        telefonoNumeris: zmogus.cell,
        email:zmogus.email,
        fullAddress:zmogus.location.fullAddress,
        fullName:`${first} ${last}`

    }
});
console.log(atfiltruotaZmoniuInformacija);
