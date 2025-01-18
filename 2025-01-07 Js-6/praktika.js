// <!-- bilietu pirkimas -->
// <!-- Bilieto kaina 10 euru -->
// <!-- Jei amzius maziau nei 12 metu taikoma 50% nuolaida -->
// <!-- jei amzius daugiau nei 65 metai - 80% nuolida -->
// <!-- Jei studentas - 50 % nuolada -->
// <!-- Jei karys - 50 % nuolaida -->
// <!-- Jei studentas ir karys - 70% nuolaida -->
const amziausIvestis = document.querySelector("#ageInput");
const isStudent = document.querySelector("#is-student");
const isMilitary = document.querySelector("#is-military");

let bilietoKaina = 10;
// let age = 22;
// let isStudent = true;
// let isMilitary = false;

function totalTicketPrice(){
   let amzius = Number(amziausIvestis.value);
   let arStudentas = isStudent.checked; ///is checkbox
   let arKarys = isMilitary.checked;  //is checkbox
   let totalPrice = bilietoKaina;
 if(amzius < 12){
  totalPrice = bilietoKaina * 0.5;
 }
 else if (amzius > 65){
    totalPrice = bilietoKaina * 0.2; //0.2==20% reikia sumoketi nuo kainos,nes 80% nuolaida
 }
 else {
    if(isStudent == true && isMilitary == true){ //galima rasyti ir be ==
        totalPrice = bilietoKaina * 0.3;
    }
    else if (isStudent == true){
        totalPrice = bilietoKaina * 0.5;
    }
    else if (isMilitary ==true){
        totalPrice = bilietoKaina * 0.5; 
    }
    alert(`jusu bilietas kainuoja ${totalPrice}`)

 }
}

