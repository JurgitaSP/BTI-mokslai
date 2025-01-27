// callback f-ja, tokia funkcija, kuri paduodama i kita f-ja kaip parametras
const h2 = document.querySelector("h2");
h2.addEventListener('click', ()=>{
    console.log('ivyko paspaudimas ant lietuvisko h2 elemento')

})


function apskaiciuotiPVM(kaina, pvm, funkcija){

    const galutineKaina = kaina * (100+pvm)/100;
    funkcija(`Galutine, apskaiciuota kaina yra ${galutineKaina}`);
    //21% Lietuvoje
    //18% Vokietijoje
 return 
}
const atnaujintiVokiskaKainaPuslapyje = (naujaKaina)=>{  //f-jos deklaravimo budas
    document.querySelector("h3#DE").innerText = naujaKaina; 
}
console.log(apskaiciuotiPVM(100, 18, atnaujintiVokiskaKainaPuslapyje));

function atnaujintiLietuviskaKainaPuslapyje(naujaKaina){
    document.querySelector("h3#LT").innerText = naujaKaina; 
}
// function atnaujintiVokiskaKainaPuslapyje(naujaKaina){
//     document.querySelector("h3#DE").innerText = naujaKaina; 
// }

//f-ju deklaravimo budai : function ir const
// const - galime sukurti f-ja kaip kintmaji

const masyvas = [1, 2, 3, 4, 5, 6];
console.log(masyvas.filter((reiksme)=>reiksme %2 !== 0));