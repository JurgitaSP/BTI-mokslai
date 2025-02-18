// 2. Apskritimo klasė (Circle)
// Užduotis:
// Sukurkite klasę Apskritimas (angl. Circle), kuri saugos apskritimo savybes: spindulys ir plotas.
// Pradinės klasės savybės:
// spindulys - (radius): gali būti nurodomas pradinis apskritimo spindulys;
// plotas - (area): skaičiuojamas pagal formulę: S =  r2
// Keičiami laukeliai:
// Keičiant spindulį, automatiškai turi būti atnaujinamas ir plotas.
// Klasės metodai:
// Spindulys:
// Sukurkite „setter“ ir „getter“ metodus spinduliui.
// Keičiant spindulį, turi būti perskaičiuotas plotas.
// Ploto apskaičiavimas:
// Sukurkite „getter“ metodą, kuris grąžina plotą.
class Circle {


    constructor(sp){
         this.spindulys = sp;
        this.#skaiciuotiPlota();

    }
    #skaiciuotiPlota(){
        this.area = Math.PI * this.sp ** 2;
    }

}

const apskritimas1 = new Circle(7);
console.log(apskritimas1.spindulys);