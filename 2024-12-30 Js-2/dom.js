var vardas = prompt("koks yra jusu vardas?");

//diviniai elementai 
//elemento pasirinkimas ir gavimas i kintamaji
var manoDivas = document.querySelector("#info"); //document.queri pasirenka tam tikra elementa
// pagal css selektoriu, tarp kabuciu css selektorius, kuri renkames css faile

//turint elemento kintamaji galim panaudoti daug jo savybiu
// manoDivas.style.color = 'red' pavyzdys

// vidinio teksto nustatymas - turint elemnto kinatmaji, kuris pasirenkamas su 
// document.queri (alternatyva - Document.getElementById)
// queri selektorius lankstesnis, pasirenka pagal id, class ir kt css selektorius
//queri selektoiaus vidinis tekstas manipuliuojamas per .innerHTML =

manoDivas.innerHTML = `labas, ${vardas}`;//keicia html vidine struktura
manoDivas.style.color = "red";//uzdedamas dinamiskai -kada pasileidzia java script
// manoDivas.innerText = keicia i konkretu Teksta
manoDivas.style.margin = "20px 15px";
//jei css turi -, jo pavad js isivardina su camelCase - marginTop

document.title = `labas, ${vardas}`;//pasikeicia dokumento title