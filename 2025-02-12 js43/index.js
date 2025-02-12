//import kelias iki modulio, pazadina tame modulyje esanti koda
import "./modules/defaultStyle.js";

import "./modules/objektai-masyvai.js";
//default f-jos importas neturi {} ir gali buti ivardijamas kitu pavadinimi
//importuojant default ir paprastas f-jas, default eina pries{}, kitos skliaustu viduje, atskitos 
//kableliais. Jos gali buti pervadintos su AS

//1.pirmas importo budas
// import instrukcijos, { suma, vidurkis as vid, PI } from "./modules/math.js";

const masyvas = [1, 2, 3, 4, 5];
// instrukcijos();
// console.log(suma(masyvas));
// console.log(vid(masyvas));


//2. IMPORTUOTI VISKA IS KITO FAILO
//import * as pavadinimas importuoja viska is duoto modulio
//importuojamos reiksmes pasiekiamos per pavadinimas.f-ja()
import * as math from "./modules/math.js"
//  console.log(math);
//panaudoti kitas f-jas galima per 
// math.vidurkis
// math.suma

// math.default();//arba instrukcijos(), jei per importa isskiriame default f-ja - 
// import default f-ja (instrukcijos) * as math from "./modules ...";
//iprastu exportu panaudojimas
// console.log(math.suma(masyvas));
// console.log(math.vidurkis(masyvas));
// console.log(math.PI);
// console.log(math.apskritimoPlotas(2));

// math.default();  //defaultine iskvieciama per default, o ne per pavadinima

// math.printEinamasisSkaicius();
// math.setEinamasisSkaicius(14);
// math.printEinamasisSkaicius();


