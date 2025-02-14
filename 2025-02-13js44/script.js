//obejktinis programavimas
const objektas1 = {};

//reiksmeA ir reiksmeB - objekto parametrai
// 1 ir Labas - objekto parametro reiksme
const objektas2 = { reiksmeA: 1, reiksmeB: "Labas" };

//objektas gali laikyti ir kompleksiskas reiksmes (klases, f-jos, masyvai, objektai)
//Objekto funkcijos - Metodai
const objektas3 = {
    name: "Arturas",
    age: 29,
    children: ["Ugne", "Jonas"],
    zmona: { name: "Asta", age: 27 },
    pasakytiLabas() { ///cia yra funkcija objekte
        console.log(`${this.zmona.name}: 'Labas!'`); //f-jos gali naudotis to paties objekto
        //parametrais, pridedant zodeli ""this""
    },
    svestiGimtadieni() {
        this.zmona.age++;
        console.log(`Sveikinu !`);
    },
};

//o objekto metodus (f-ja) galime iskviesti 
objektas3.pasakytiLabas();
objektas3.svestiGimtadieni();
console.log(objektas3.zmona.age);

//objektinis programavimas, sablonu kurimas objektams
//Objekto sablonai kurimai klasiu pagalba
//klases pavadinimas is Didziosios raides
//kiekviena klase turi construktor, kuris apibrezia kas ivyks, kai susikurs naujas objektas
//naujas objektas gali buti ngrazinimas pagal nutylejima su default reiksmemis

class Zmogus {
    //klaseje constructor apibrezia pradines reiksmes ir t.y.f-ja, kuri iskvieciam su new ir klase pav

    constructor() {
        //this.naudojamas kaip nuoroda i sios klases sukurta objekta
        this.firstName = "Saule";   //sukurtas sablonas
        this.lastName = "Zvaigzde";
        this.age = 456;
        
    }
    pasakytiLabas(){
        console.log(`${this.lastName}: "Labas"`);
        
    }
}
const planeta = new Zmogus();  //sukurtas objektas pagal sablona
// console.log(planeta);
 planeta.lastName = "zmogus"; ///jei norim pakeisti objekto lauku pav.
planeta.pasakytiLabas();
const jonas = new Zmogus();
jonas.pasakytiLabas();
console.log(planeta);
