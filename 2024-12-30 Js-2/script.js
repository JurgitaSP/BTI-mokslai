//konvertavimas 1€ = 1.04 $ 
 
// //1. iskris promtp, kuris klausia kiek pinigu nori konvertuoti   
//2. jei konvertuojame maziau nei 100 €, taikomas4 % komisinis mokestis
// jei konvertuosime   100€ arba daugiau, taikysime 3 % komisini
// jei konvertuisime 500 € ar daugaiau, taikysime 2 % komisini
// jei konvertuosime 1000€ ar daugiau, taikysime 1 % komisini
//jei klientas yra vip pritaikyti 30% nuolaida komisiniam mok
//3. kiek doleriu gausime 

const eurUsd = 1.04;  /// cia parsyti kintamieji "let", matomi ir uz funkcijos ribu
//funkcijoje aprasomi kintamijei "let" matomi tik f-jos ribose
const vip = true;  

const vipH1 = document.querySelector("#ar-VIP");
if (vip){
    vipH1.innerHTML = "VIP panele";
}
else {
    vipH1.innerHTML = "";
}

const keiciamasEuruKiekisElement = document.querySelector("#keiciamas-euru-kiekis");
const komisinioMokescioProcentasElement = document.querySelector("#komisinio-mokescio-procentas");
const komisinisMokestisEuraisElement = document.querySelector("#komisinis-mokestis-eurais");
const komisinisMokestisDoleriaisElement = document.querySelector("#komisinis-mokestis-doleriais");
const galutineSumaElement = document.querySelector("#galutine-suma");


let keiciamasEuruKiekis = prompt("kiek EUR keisite i $?");
keiciamasEuruKiekisElement.innerHTML = `${keiciamasEuruKiekis}€`;

let atsakymas; //neapibrezta reiksme

// "var"kintamasis rodomoas ir uz f-jos ribu, net jei jis aprasytas f-jos viduje

if (keiciamasEuruKiekis < 100){ ///1-99
    let komisinis = 4;
    let komisinisSantykis = (100 - komisinis)/100; //0.96 komisinis
    let komisinisSantykisVip = (100 - (komisinis *0.7))/100;//0.972
 if (vip){
    komisinioMokescioProcentasElement.innerHTML = (komisinis * 0.7).toFixed(2);
    komisinisMokestisEuraisElement.innerHTML = (keiciamasEuruKiekis * (komisinis*0.7))/ 100;
    komisinisMokestisDoleriaisElement.innerHTML = ((keiciamasEuruKiekis * (komisinis*0.7))/ 100) * eurUsd;
    galutineSumaElement.innerHTML = (keiciamasEuruKiekis * komisinisSantykisVip * eurUsd).toFixed(2);
    atsakymas = keiciamasEuruKiekis * komisinisSantykisVip * eurUsd;
 }
    else {
        komisinioMokescioProcentasElement.innerHTML = komisinis.toFixed(2);
        komisinisMokestisEuraisElement.innerHTML = (keiciamasEuruKiekis * komisinis)/ 100;
        komisinisMokestisDoleriaisElement.innerHTML = (((keiciamasEuruKiekis * komisinis)/ 100) * eurUsd).toFixed(2);
        galutineSumaElement.innerHTML = (keiciamasEuruKiekis * eurUsd * komisinisSantykis).toFixed(2);
        atsakymas = keiciamasEuruKiekis * eurUsd * komisinisSantykis; }
}
else if (keiciamasEuruKiekis < 500){//100-499
    let komisinis = 3;
    let komisinisSantykis = (100 - komisinis)/100; //0.97 komisinis
      let komisinisSantykisVip = (100 - (komisinis * 0.7))/100;//0.979
if (vip){
    komisinioMokescioProcentasElement.innerHTML = (komisinis * 0.7).toFixed(2);
    komisinisMokestisEuraisElement.innerHTML = (keiciamasEuruKiekis * (komisinis*0.7))/ 100;
    komisinisMokestisDoleriaisElement.innerHTML = ((keiciamasEuruKiekis * (komisinis*0.7))/ 100) * eurUsd;
    galutineSumaElement.innerHTML = (keiciamasEuruKiekis * komisinisSantykisVip * eurUsd).toFixed(2);
    atsakymas = keiciamasEuruKiekis * komisinisSantykisVip * eurUsd;
}
else {
    komisinioMokescioProcentasElement.innerHTML = komisinis.toFixed(2);
    komisinisMokestisEuraisElement.innerHTML = (keiciamasEuruKiekis * komisinis)/ 100;
    komisinisMokestisDoleriaisElement.innerHTML = (((keiciamasEuruKiekis * komisinis)/ 100) * eurUsd).toFixed(2);
    galutineSumaElement.innerHTML = (keiciamasEuruKiekis * eurUsd * komisinisSantykis).toFixed(2);
    atsakymas = keiciamasEuruKiekis * komisinisSantykis * eurUsd;
}
}
else if (keiciamasEuruKiekis < 1000){//500-999
    let komisinis = 2;
    let komisinisSantykis = (100 - komisinis)/100; //0.98 komisinis
      let komisinisSantykisVip = (100 - (komisinis * 0.7))/100;//0.986
      if (vip){
        komisinioMokescioProcentasElement.innerHTML = (komisinis * 0.7).toFixed(2);
        komisinisMokestisEuraisElement.innerHTML = (keiciamasEuruKiekis * (komisinis*0.7))/ 100;
        komisinisMokestisDoleriaisElement.innerHTML = ((keiciamasEuruKiekis * (komisinis*0.7))/ 100) * eurUsd;
        galutineSumaElement.innerHTML = (keiciamasEuruKiekis * komisinisSantykisVip * eurUsd).toFixed(2);
        atsakymas = keiciamasEuruKiekis * komisinisSantykisVip * eurUsd;
      }
      else{
        komisinioMokescioProcentasElement.innerHTML = komisinis.toFixed(2);
        komisinisMokestisEuraisElement.innerHTML = (keiciamasEuruKiekis * komisinis)/ 100;
        komisinisMokestisDoleriaisElement.innerHTML = (((keiciamasEuruKiekis * komisinis)/ 100) * eurUsd).toFixed(2);
        galutineSumaElement.innerHTML = (keiciamasEuruKiekis * eurUsd * komisinisSantykis).toFixed(2);
        atsakymas = keiciamasEuruKiekis * komisinisSantykis * eurUsd;

      }
    
    }
else {//1000
    let komisinis = 1;
    let komisinisSantykis = (100 - komisinis)/100; //0.99 komisinis
      let komisinisSantykisVip = (100 - (komisinis * 0.7))/100;//0.993
      if (vip){
        komisinioMokescioProcentasElement.innerHTML = (komisinis * 0.7).toFixed(2);
        komisinisMokestisEuraisElement.innerHTML = (keiciamasEuruKiekis * (komisinis*0.7))/ 100;
        komisinisMokestisDoleriaisElement.innerHTML = ((keiciamasEuruKiekis * (komisinis*0.7))/ 100) * eurUsd;
        galutineSumaElement.innerHTML = (keiciamasEuruKiekis * komisinisSantykisVip * eurUsd).toFixed(2);
        atsakymas = keiciamasEuruKiekis * komisinisSantykisVip *eurUsd;
      }
      else {
        komisinioMokescioProcentasElement.innerHTML = komisinis.toFixed(2);
        komisinisMokestisEuraisElement.innerHTML = (keiciamasEuruKiekis * komisinis)/ 100;
        komisinisMokestisDoleriaisElement.innerHTML = (((keiciamasEuruKiekis * komisinis)/ 100) * eurUsd).toFixed(2);
        galutineSumaElement.innerHTML = (keiciamasEuruKiekis * eurUsd * komisinisSantykis).toFixed(2);
        atsakymas = keiciamasEuruKiekis * komisinisSantykis * eurUsd;
      }
    

}
console.log(atsakymas);
