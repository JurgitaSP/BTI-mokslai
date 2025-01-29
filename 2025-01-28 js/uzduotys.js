//1. alertas -pica uzsakyta 
//2."uzsaldyti" uzsakyti pica mygtukas
//3. po 5 sek "uzsaldyti" atsaukti uzsakyma mygtuka
//4. po 10 sek. alertas, kad pica atvyko
//5. "atsaldyti" uzsakyti ir atsaukti mygtukus

const uzsakymoMygtukas = document.querySelector("#uzsakymas");
uzsakymoMygtukas.addEventListener("click", uzsakytiPica);
const atsauktiUzsakymaMygtukas = document.querySelector("#uzsakymo-atsaukimas");
atsauktiUzsakymaMygtukas.addEventListener("click", atsauktiUzsakyma);
atsauktiUzsakymaMygtukas.disabled = true;

let uzsakymoNr, atsaukimoMygtukoID; //underfined

function uzsakytiPica(){
    alert("pica sekmingai uzsakyta");
    uzsakymoMygtukas.disabled = true;
    atsauktiUzsakymaMygtukas.disabled = false;


    uzsakymoNr = setTimeout(()=>{
        alert("Pica atvaziavo");
        uzsakymoMygtukas.disabled = false;
    }, 5000)
    atsauktiUzsakymaMygtukas = setTimeout(()=>{
       
        atsauktiUzsakymaMygtukas.disabled = true;
    }, 10000);
    console.log("Funkcijos pabaiga");
}
//1. console.log - uzsakymas sekmingai atsaukatas
//2. nuimti timeout, kad pica atvaziavo po 10 sek
//3. uzsakyti pica mygtuko aktyvavimas
//4. uzsaldysime atsaukimo mygtuka
//5. 


function atsauktiUzsakyma(){
    uzsakymoMygtukas.disabled = false;
    atsauktiUzsakymaMygtukas.disabled = true;
    console.log("Uzsakymas sekmnigai atsauktas");
clearTimeout(uzsakymoNr);
clearTimeout(atsauktiUzsakymaMygtukas);
}