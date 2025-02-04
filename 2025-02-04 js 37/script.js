// Sukurkite formą, kurioje būtų vykdomas darbuotojų check-in atvykus į darbą
// Forma turės laukelius:
// Darbuotojo vardas - nuo 3 iki 50 simbolių, pirma raidė privalo būti didžioji, 
// negali būti nei vieno skaičiaus, negali būti nei vieno tarpelio.
// Darbuotojo pavardė - nuo 3 iki 50 simbolių, pirma raidė privalo būti didžioji, 
// negali būti nei vieno skaičiaus.
// Darbuotojo numeris - prasideda trimis didžiosiomis raidėmis, po trečiosios 
// raidelės automatiškai padedamas "-" ir tuomet leistina įvestis - tik trys 
// skaičiai.

// Po kiekvienu įvesties laukeliu - pagalbinis tekstas raudonomis arba žaliomis 
// mažomis raidelėmis sufleruojantis, ar validacija sėkminga, ar kažko trūksta. 
// Pakeitus įvesties laukelio reikšmę, pagalbinis tekstas turi atsinaujinti į kitą 
// būseną, jei laukelyje įvesta reikšmė yra neteisinga, arba iš neteisingos 
// pasikeitė į sėkmingą. Savo nuožiūra padarykite formą kiek įmanoma labiau 
// patogesne naudotis. (tarkime apribokite leistinų įvesti raidžių kiekį iki 50)
// Po forma esančio mygtuko pagalba užfiksuokite, kada įvyko check-in (datą ir laiką) 
// bei išsaugokite objektą į bendrą sąrašą localStorage (tariamam tolimesniam 
//     panaudojimui kituose programos vystymo etapuose)
const nameElement = document.getElementById("name");
const lastNameElement = document.getElementById("lastName");
const idNumberElement = document.getElementById("idNumber");
const buttonElement = document.getElementById("button");
const dataElement = document.getElementById("data");

const newGuess = document.createElement('p');
addEventListener("change", (event) => {});

onchange = (event) => {};

function showTime(){
    buttonElement.addEventListener("click", new Date);
}
console.log(showTime)

document.querySelector("input").addEventListener("change", (event) => {
	console.log("Įvesta įvesties laukelio reikšmė");
});