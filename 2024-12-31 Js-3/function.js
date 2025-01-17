const moneyElement = document.querySelector("#money-amount > span");
const gambleMoneyElement = document.querySelector("#gamble-money");
let money = 10;
let gambleMoney = 0;

atnaujintiPinigus();
gambleMoneyElement.innerHTML = gambleMoney;


function hey() {
    alert("Sveiki atvyke i bara!");
}
function buyBeer() {
    if (money >= 2) {
        alert("Stai jusu alus!")
        money = money - 2;
        moneyElement.innerHTML = money;
    }
    else {
        alert("Neuztenka pinigu!")
    }
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// tikimybe 1/2, kad laimesime 2 (1 statomas eur +1 laimetas eur)
// eur arba pralaimesime 1 eur

function gamble(statymas) {

    if (money < statymas) {
        alert("Jums neleidziama zaisti, neuztenka pinigu !")
    } else {
        let skaicius = rand(1, 2);
        if (skaicius == 1) {
            money = money + statymas;
        } else {
            money = money - statymas;
        }
    }
    atnaujintiPinigus();

}
function atnaujintiPinigus() {
    moneyElement.innerHTML = money;
}

function didintiStatyma(){
    if (gambleMoney >= money){
        alert("Nepakanka pinigu statymui !")
    } else {
    // gambleMoney = gambleMoney + 1; 
    gambleMoney += 1;
    gambleMoneyElement.innerHTML = gambleMoney;}
}
function mazintiStatyma(){
    if (gambleMoney <= 0){
        alert("Statomu pinigu kiekis per mazas!")
    }
    else{
    gambleMoney -= 1;
    gambleMoneyElement.innerHTML = gambleMoney;}
}