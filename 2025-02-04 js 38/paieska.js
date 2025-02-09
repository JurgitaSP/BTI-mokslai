const paieskosLaukelis = document.querySelector("input.paieskos-laukelis");
const sarasas = document.querySelector("#produktai");

const produktai = ["Alus", "bergamote", "citrina", "druska"];

//einam per saraso kiekviena produkta ir pridejinejam i html matoma sarasa
produktai.forEach((produktas)=>{
    sarasas.innerHTML += `<li>${produktas}</li>`;
});

//darome saraso filtracija ir po jos sarasas atnaujinimas
function filtruotiPagalPaieska(paieska){
    const atfiltruotiProduktai = produktai.filter((produktas)=>produktas.includes(paieska)
);
//atvaizduojam atfiltruotus sarase
let html = "";
atfiltruotiProduktai.forEach((produktas)=>{
    html +=`<li>${produktas}</li>`;
})
//galiausiai html atsiduria sarase ir isveda
sarasas.innerHTML = html;
}
//ieskome pagal raktazodi inpute
// filtruotiPagalPaieska("lu");
