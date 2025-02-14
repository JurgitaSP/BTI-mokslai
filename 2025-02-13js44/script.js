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
console.log(planeta);
 planeta.lastName = "zmogus"; ///jei norim pakeisti objekto lauku pav.
planeta.pasakytiLabas();
const jonas = new Zmogus();
jonas.pasakytiLabas();
console.log(planeta);

class Planeta {
    constructor(name="earth", satelite="moon", age=5){ //cia rasomi default parametru reiksmes
        this.name = name;
        this.satelite = satelite;
        this.age = age;
    }
}
const planeta1 = new Planeta("uranus", "mars", 13); ///cia rasomi paduodami parametru reiksmes
const planeta2 = new Planeta("venus","", 1); ///cia rasomi paduodami parametru reiksmes
const planeta3 = new Planeta();
// planeta1.age = 8;
console.log(planeta1);
console.log(planeta2);
console.log(planeta3);

class Staciakampis{
    //klases privaciu lauku apibrezimas
    #plotis;
    #aukstis; //privatus langeliai, kuriu uz klases ribu keisti negalima/neleidziama
    #plotas;
    constructor(plotis, aukstis, matavimoVienetas = "m")
    {
        this.#plotis = plotis;
        this.#aukstis = aukstis;
        this.matavimoVienetas = matavimoVienetas;
        this.#plotas = plotis * aukstis;
    }
    setAukstis(naujasAukstis){  //vienas is budu pakeisti objk parametru reiksmes
        this.#aukstis = naujasAukstis;
        this.#plotas = naujasAukstis * this.#plotis;
    }
    get plotis(){
        return this.#plotis; ///atiduodama kaip paramentras
    }
    get aukstis(){
        return this.#aukstis;
    }
    get plotas(){
        return `${this.#plotas}${this.matavimoVienetas}2`;
    }
    set plotis(naujasPlotis){     //budas kaip pakeisti inkapsuliuotas reiksmes
        this.#plotis = naujasPlotis;
        this.#plotas = naujasPlotis * this.#aukstis;
    }
    set aukstis(naujasAukstis){
        this.#aukstis = naujasAukstis;
        this.#plotas = naujasAukstis * this.#plotis;
    }
}
const stk1 = new Staciakampis(10, 6, "cm");
console.log(stk1.plotas);
stk1.setAukstis(8);
console.log(stk1.plotis);

console.log(stk1);
//geteriai - atiduoda privaciiu laukeliu reiksme
//seteriai - neiseina uz klases ribos