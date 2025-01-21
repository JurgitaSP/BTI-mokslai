//elemento pasirinkimas ir jo manipuliavimas
const elementas = document.querySelector("h3");
elementas.innerHTML = '<span class="heading2">JavaScript</span> manipuliacijos';
elementas.style.color = "red";

// elementas.innerText - traktuojamas kaip tekstas


function pridetiKlase(){
const h5Pirmas =document.querySelector("#first-heading");
// h5Pirmas id = naujas id
//1. budas kaip nurodant visas klase naudojant elemntas.className - perraso visas 
// klases, kurios buvo anksciau pridetos prie lelemento
// h5Pirmas.className = "heading2 text-red";

//2. budas(rekomenduotinas)- naudojantis klasiu sarasu, galima prideti/pasalinti elementus,
// pagal dabartine elemento busena

h5Pirmas.classList.add("heading2"); //nepasalina buvusiu klasiu, tik prideda papildomas
}


function nuimtiKlase(){
//1.pasirinkti elementa
const h5 = document.querySelector("#second-heading")
//2.nuimti klase
// h5.className = "" vienas is budu
h5.classList.remove("heading2");

}

function