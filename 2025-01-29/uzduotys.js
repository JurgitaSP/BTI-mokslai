const prekes = [
    { barkodas: "4061615651", pavadinimas: "Degtukai", kaina: 0.2 },
    { barkodas: "4061615652", pavadinimas: "Dantų šepetėlis", kaina: 1.5 },
    { barkodas: "4061615653", pavadinimas: "Kava", kaina: 4.99 },
    { barkodas: "4061615654", pavadinimas: "Vandens butelis", kaina: 0.89 },
    { barkodas: "4061615655", pavadinimas: "Šokoladas", kaina: 1.79 },
    { barkodas: "4061615656", pavadinimas: "Tualetinis popierius", kaina: 2.5 },
    { barkodas: "4061615657", pavadinimas: "Makaronai", kaina: 0.99 },
    { barkodas: "4061615658", pavadinimas: "Ryžiai", kaina: 1.2 },
    { barkodas: "4061615659", pavadinimas: "Kondicionierius", kaina: 3.5 },
    { barkodas: "4061615660", pavadinimas: "Šampūnas", kaina: 3.99 }
];

//     1 Užduotis: Kiekvienai prekei masyve pritaikykite metodą, kuris modifikuoja 
// kiekvienos prekės barkodą. Barkodai prasideda pirmąja prekės pavadinimo raide 
// ir atskiriamas brūkšneliu, pvz: D-4061615651 (degtukai).
// Rezultatą console.log’inkite










// 2 Užduotis: Išfiltruokite prekes, kurios prasideda pirmąja raide 'D'. 
// Rezultate turi likti 2 prekės: ‘Degtukai’ ir ‘Dantų šepetėlis’. Rezultatą 
// console.log’inkite
// 3 Užduotis: Išfiltruokite prekes, kurios kainuoja daugiau nei 1 eur.
// 4 Užduotis: Išfiltruokite prekes, kurios kainuoja mažiau nei 3 eur.
// 5 Užduotis: Išfiltruokite prekes, kurios kainuoja daugiau nei 1 eur ir mažiau 
//  nei 3 eur.
// 6 Užduotis: Raskite prekę, kurios pavadinimas: ‘Kava’. Jos reikšmę pakeiskite 
//  į ‘Kavos pupelės’.
// 7 Užduotis: Prekėms, kurios kainuoja pigiau nei 1.5eur pridėkite pvmProcentas 
// laukelį į šiuos objektus, šioms prekėms taikomas pvmProcentas: 15%, prekėms 
// kurios yra brangesnės, taikomas pvmProcentas: 21%. Apskaičiuokite pvmMokestis 
// laukelių reikšmes, pritaikę šį pvmProcentą prie kainos.

// Finale kiekvienas objektas turi atrodyti taip:
// { 
//     barkodas: "4061615651",
//     pavadinimas: "Degtukai", 
//     kaina: 0.2,
//     pvmProcentas: 15,
//     pvmMokestis: 0.03
// }

// skaiciaiMasyvas.forEach((skaicius, i) => {
//     console.log(`indeksas: ${i}\nskaičius:${skaicius}`);
// });

// 2 Užduotis: Išfiltruokite prekes, kurios prasideda pirmąja raide 'D'. 
// Rezultate turi likti 2 prekės: ‘Degtukai’ ir ‘Dantų šepetėlis’. Rezultatą 
// console.log’inkite
const paieska2 = "D";
const atfiltruotiPrekes = prekes.filter((pavadinimas) => pavadinimas.toLocaleLowerCase().startsWith(paieska2.toLocaleLowerCase()));
console.log(atfiltruotiPrekes);


const paieska = "A";
 const atfiltruotiMasinas = masinos.filter((pavadinimas) => 
    pavadinimas.toLocaleLowerCase().endsWith(paieska.toLocaleLowerCase()));
console.log(atfiltruotiMasinas);


// const atfiltruotosSalys = countries
// 	.filter(
// 		(salis) => salis.country.startsWith("L") || salis.country.startsWith("U")
// 	)
// 	.map((salis) => {
// 		return {
// 			saliesKodas: salis.countryCode.toUpperCase(),
// 			pavadinimas: salis.country,
// 		};
// 	});

// console.log(atfiltruotosSalys);

// 3 Užduotis: Išfiltruokite prekes, kurios kainuoja daugiau nei 1 eur.
// const atfiltruotosReiksmes = skaiciaiMasyvas.filter(
// 	(skaicius) => skaicius % 2 === 0 && skaicius <= 6
// );
// console.log(atfiltruotosReiksmes);

const prekesDaugiauNeiEuras = prekes.filter((kaina) => kaina < 1);
console.log(prekesDaugiauNeiEuras);