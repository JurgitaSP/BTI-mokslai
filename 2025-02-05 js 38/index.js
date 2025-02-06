//gauti veisles
const veisles = [];
let x;
fetch("https://dog.ceo/api/breeds/list/all").then ((x) => x.json())
.then((data) => (veisles = data));

console.log(veisles);

//is serverios gauta objekta (veisles) sudeti i sarasa 
function gautiVisasVeisles(data){
    const keys = Object.keys(data.message);

    for(const key of keys){
        if(data.message[key].length == 0){
            veisles.push(key);
    }
    else{
        for(const poveisle of data.message[key]){
            veisles.push(`${key} ${poveisle}`);
        }
    }
}
//visas veilse atvaizduoti select HTML
function pridetiPasirinkimus(){
    const select = document.querySelector("select#veilses-pasirinkimas");
veisles.forEach((veisle) =>{
 select.innerHTML += `<option>${veisle}</option>`;
});
}

//pasirinkti  veisle ir parodyti nuotrauka

select.addEventListener("change", ()=>{
    const reiksme = select.value;
    console.log(reiksme);
});