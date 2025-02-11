/* 2025-02-05
Kreipimasis į API (back-end serverius)
Sukurkite programą, kuri kreipiasi į dogs API serverį. Nuoroda į API dokumentaciją
: https://dog.ceo/dog-api/documentation/ 


 */
// 1 Gauti visas veisles pagal dokumentacijoje nurodytą nuorodą.
const select = document.querySelector("#veisles-pasirinkimas");//atkeltas is f-jos prideti pasirinkimus
const veisles = [];
let x;
fetch("https://dog.ceo/api/breeds/list/all")
    .then((x) => x.json())
    .then(gautiVisasVeisles);
console.log(veisles);

// 2 Sutvarkyti iš serverio gautą objektą taip, kad gaunamos veislės būtų viename 
// sąraše.

function gautiVisasVeisles(data) {
    // console.log(data);
    // console.log(Object.keys(data.message));
    const keys = Object.keys(data.message);
    for (const key of keys) {
        // console.log(key);
        // console.log(data.message[key].length == 0);
        if (data.message[key].length == 0) {
            veisles.push(key);
        }
        else {
            for (const poveisle of data.message[key]) {
                veisles.push(`${key} ${poveisle}`);
            }
        }
    }
    pridetiPasirinkimus();
}
// 3 Visas veisles atvaizduoti <select></select> HTML elemente, kaip pasirinkimus

function pridetiPasirinkimus() {

    // const select = document.querySelector("#veisles-pasirinkimas");iskeltas i virsu, kad matytusi
    veisles.forEach((veisle) => {
        select.innerHTML += `<option>${veisle}</option>`;
    })
}
// 4 Pasirinkus naują reikšmę, automatiškai turi būti kreipiamasi į serverį, 
// dinamiškai generuojant kreipimosi adresą taip, kad būtų gaunama nuotrauka pagal 
// šuns veislę.

select.addEventListener("change", () => {
    const reiksme = select.value.replace(" ", "/"); //paties selecto reiksme
    // console.log(reiksme);
    console.log(`https://dog.ceo/api/breed/${reiksme}/images`);
    fetch(`https://dog.ceo/api/breed/${reiksme}/images`).then((data) => data.json())
        .then((data) => {
            document.querySelector("#dog-image").src = data.message[0];
        })
// 5 Po select elementu atvaizduoti šuns nuotrauką ir parašyti jo veislę;
document.querySelector("#veisle").innerText = reiksme.replace("/", " ")
});

