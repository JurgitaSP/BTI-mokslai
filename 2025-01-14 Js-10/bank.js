const balansoElementas = document.querySelector("#balansas");
const pajamuElementas = document.querySelector("h1.income");
const islaiduElementas = document.querySelector("h1.outcome");
const minimalusAtlyginimas = 500;
    let balansas = 0;
    let pajamosSiMen = 0;
    let islaidosSiMen = 0;

balansoElementas.innerHTML = formatCurrency(balansas);
// jei islaidos mazesnis nei 0, priekyje atsirand minuso zenklas pvz:.
pajamuElementas.innerHTML = formatCurrency(pajamosSiMen);
if (islaidosSiMen ===0)
islaiduElementas.innerHTML = formatCurrency(islaidosSiMen);
else islaiduElementas.innerHTML = "-" + formatCurrency(islaidosSiMen);

//css selectorius
// document.getElementById("balansas").innerHTML = "0"

//0 - $0.00 
// 1000 - $1,000.00
//7004.23 - "$7,004.23"

function formatCurrency(skaicius)
{
let skaiciaiPoKbalelio = skaicius.toFixed(2); //1000.00
if (skaicius < 1000){
    //return ne tik isduoda rezultata, bet ir uzbaigia f-ja
    return"$" + skaiciaiPoKbalelio;}
let suformatuosasSkaicius = skaiciaiPoKbalelio.slice(0, -6) + "," + skaiciaiPoKbalelio.slice(-6);
    return "$" +suformatuosasSkaicius;
}

function gautiAlga(alga = minimalusAtlyginimas) {
    balansas += alga;
    balansoElementas.innerHTML = formatCurrency(balansas);
    pajamosSiMen += alga;
    pajamuElementas.innerHTML = formatCurrency(pajamosSiMen);
}

 function isleistiPinigus(prekesPavadinimas, prekesKaina){
    if(balansas - prekesKaina < 0){
        return alert('Jus neturite pakankamai pinigu nusipirkti' + prekesPavadinimas);
    }
    
    balansas -= prekesKaina;
    balansoElementas.innerHTML = formatCurrency(balansas);
    islaidosSiMen += prekesKaina;
    islaiduElementas.innerHTML = "-" + formatCurrency(islaidosSiMen);
 }