// // const mygtukas = document.querySelector("button");vieno mytuko pasirinkimas


// //pasirenkame visus mytukus
// const mygtukai = document.querySelectorAll("button");//visu pslp. mygtuku pasirinkimas
// //sugeneruoja "po vandeniu sarasa/masyva ir objk

// mygtukai.forEach((mygtukas)=>{
// mygtukas.addEventListener("click", mygtukoPaspaudimas);//eina per kiekviena masyvo
// });//objekta ir sugeneruoja jiems eventListener
const leistiniSimboliai = "0123456789";
// 1. mygtuko paspaudimu password inputas pasikeicia i teksto inputa
// document.querySelector("input").addEventListener("keydown", (event) => {
//     if (event.code === "AltRight") {
//         if (event.target.type === "password") {
//             event.target.type = "text";
//         } else {
//             event.target.type = "password";
//         }
//     }
    
    
//     if(!leistiniSimboliai.includes(event.key)){
//         console.log("veiksmas nutraukiamas")
//         //mes norime nutraukti iprasa atoveiksmi
//         event.preventDefault();
//         return;
//     }
//     console.log(event);
    
// });

//keiciame password type i texta  event.target.type = "text";
//event Change suveikia, kai ivyksta ivesties laukelio pasikeitimas
//(uzrasius visa inputo reiksme arba tik dali jos)
document.querySelector("input").addEventListener("change",(event)=>{
    console.log("ivesta inputo reiksme");
});