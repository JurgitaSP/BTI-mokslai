const inputas = document.querySelector("#vardo-ivestis");
console.log(inputas);



function getName(){
        console.log(inputas.value); //== let vardas = inputas.value;
}                                    // console.log(vardas);

//primityvus kintamuju tipai:
//1. string (tekstas)
//2. number (skaicius))
//3. boolean: true/false

//typeof padeda suzinoti kintamojo tipa
function getName(){
    let vardas = inputas.value;
    console.log(typeof vardas);
    console.log(vardas + vardas);//tekstas+tekstas =tekstastekstas
}                                //18+18 =1818 kai skaicius tekstas
//is ivesties laukeliu(inputu) visada pareina tekstine reiksme

//verciame inputo teksta i skaiciu
// function getName(){
    let skaicius = inputas.value;
    console.log(typeof skaicius);//string

//vienas is budu
skaicius = Number(skaicius); //"skaicius"= nes jau deklaruota auksciau
console.log(typeof skaicius);//number
console.log(skaicius + skaicius); //18+18=36
// }
//paversti tekstini skaiciu skaiciumi padeda ir daugyba
//atliekant mat operacija gali pakisti duomenu tipas i number
// skaicius = 1 * skaicius;

//dar vienas budas naudoti operatoriu +
function getName(){
skaicius = +skaicius;
console.log(typeof skaicius);
console.log(skaicius + skaicius);// console.log(+skaicius + +skaicius);
}

//skaiciu verciame i teksta
// rezultatas = String(rezultatas)
function getName(){
console.log(typeof skaicius);
let rezultatas = skaicius + skaicius;
console.log(rezultatas);

rezultatas = String(rezultatas);
console.log(typeof rezultatas);
}
//rezultatas = "" + rezultatas;