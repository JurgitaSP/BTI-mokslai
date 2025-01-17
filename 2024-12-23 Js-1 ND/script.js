// 4-12-23
//Duotas tekstas, kuriame yra išimti pasikartojantys raktiniai žodžiai ir pakeisti 
// šabloninėmis reikšmėmis. //Užduotis: pakeiskite visas šablonines reikšmes pagal 
// pateiktas reikšmes taip, kad būtų panaudojami toliau pateikti kintamieji:
// planet 	– 		“earth”
// star 		– 		“Sun”
// age 		–  		“4.54 billion years”
// satellite 	– 		“moon”
// "The planet {{planet}} is the third planet from the {{star}}. {{planet}} is the 
// only astronomical object known to harbor life. According to radiometric dating and 
// other sources of evidence, {{planet}} formed over {{age}} ago. {{planet}}'s gravity 
// interacts with other objects in space, especially the {{star}} and the {{satellite}}, 
// {{planet}}'s only natural satellite."
// Sukurtą rezultatą atspausdinkite pasinaudodami console.log() funkcija.

var Planet = "Earth";
var star = "Sun";
var age = "4.54 billion years";
var satellite = "Moon";

var rezultatas3 = `The planet ${Planet} is the third planet from the ${star}. 
${Planet} is the only astronomical object known to harbor life. According to radiometric 
dating and other sources of evidence, ${Planet} formed over ${age} ago. ${Planet}'s gravity 
interacts with other objects in space, especially the ${star} and the ${satellite}, ${Planet}'s 
only natural satellite.`
console.log(rezultatas3);

// 2.Sukurkite programą kuri prašytų įvesti datą, kaip tekstą YYYY-MM-DD formatu. 
// (YYYY - metai), (MM - mėnuo), (DD - mėnesio diena).
// Iš šio formato datos sugeneruokite tris kintamuosius: metai, mėnuo, diena;
// Juos atspausdinkite pasitelkdami console.log() funkcija.
 

var metai = prompt('iveskite metus');
var menuo = prompt('iveskite menesi');
var diena = prompt('iveskite diena');

var data = `${metai}-${menuo}-${diena}`;
console.log(data);
