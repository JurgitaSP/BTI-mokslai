// Loginis žaidimas „Atspėk skaičių“
// Žaidimo esmė atspėti skaičių, jį "sugalvoja" programa. Po kiekvieno 
// bandymo spėti programa užrašo ar sugalvotas skaičius didesnis ar 
// mažesnis už spėjimą.
// Reikalavimai HTML + CSS:
// • Laukelis vartotojui įvesti skaičių.
// • Mygtuką, kuris patvirtina spėjimą.
// • Sritį, kurioje bus išvedama spėjimo istorija ir rezultatai.
// • Mygtukas, naujo žaidimo pradėjimui.
// • CSS stilius savo nuožiūra.
// JavaScript logika:
// • Generuokite atsitiktinį skaičių, pasirenkate iki kokio dydžio 
// skaičius programa galvos.
// • Gaukite duomenis kuriuos vartotojas įveda po mygtuko paspaudimo
// • Sukurkite funkciją kuri patikrintų, ar vartotojo įvesti 
// duomenys yra sudaryti tik iš skaitmenų.
// • Sukurkite funkciją kuri patikrintų ar spėjimas yra didesnis,
// ar mažesnis, ar atspėtas. 
// • Išveskite duomenis vartotojui apie jo spėjimo rezultatus.
// • Atspėjus skaičių puslapyje parodomas koks nors paveikslėlis.
// • Paspaudus mygtuką pradėti iš naujo, žaidimas prasideda iš naujo
// Papildomos idėjos:
// • Spėjimų skaitiklis. Galima pridėti limitą atspėjimams (pvz., x
// bandymų), po kurių žaidimas baigiasi.
// • Pritaikymas: Suteikite žaidėjui galimybę pasirinkti, iki kokio 
// skaičiaus programa galvos skaičių (pvz., iki 10, iki 100 ar iki 
// 1000)

const formBox = document.getElementById('formBox');
const startBtn = document.getElementById('startBtn');
const inputField = document.getElementById('number');
const errorMsg = document.getElementById('errorMsg');
const infoMsg = document.getElementById('infoMsg');
const guessBtn = document.getElementById('submit');
const historyList = document.getElementById('history-list');
const winGif = document.getElementById('win');

// kintamųjų inicijavimas
let secretNumber = 0;
let counter = 0;

// Stebėtojų prikabinimas prie mygtukų
startBtn.addEventListener('click', newGame);
guessBtn.addEventListener('click', makeGuess);

// Generuojame random skaiciu nuo 1 iki 999
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funkcija skirta pradėti žaidimą
function newGame(){
    //generuojam skaičių
    secretNumber = rand(1, 999);
    console.log(secretNumber);
    // parodom įvedimo formą
    formBox.style.opacity = '1';

    // Išvalom klaidas
    clearError();
    // Išvalom ir gražinam stilių į pradinį įvedimo laukui
    inputField.value = '';
    inputField.style.borderColor = '';
    //išvalom ir paslepiam info bloką
    infoMsg.textContent ='';
    infoMsg.style.opacity = '0';
    
    // Ištrinam ankstesnio žaidimo duomenys jei tokie buvo
    historyList.innerHTML = '';
    counter =0;
    winGif.style.opacity = '0';

    //suaktyvinam mygtuką
    guessBtn.disabled = false;

}

// funkcija skirta patikrinti vartotojo įvedamą 
function validateInput(){

    //  tikrina įvedamą reikšmę ir neleidžia įvesti nieko kito tik skaičius
    let sanitizedValue = inputField.value.replace(/[^0-9]/g, '');
    inputField.value = sanitizedValue

    // tikrina ar įvedama reikšmė ką nors turi. 
    // Jei skaičius tai length bus didesnis, jei įvedinėjama raides ar kita tai bus 0
    if(sanitizedValue.length === 0){
        setError('Only numbers are required');
        return null;
    }
     // Konvertuojama turima reikšmė į skaičių
    const number = parseInt(sanitizedValue, 10);

    // tikrinama ar vartotojas nepradeda nuo 0
    if(number === 0){
        setError('Number cannot start with 0');
        return null;
    }

    // tikrinama ar skaičius nėra didesnis už 999
    if(number > 999){
        setError('The number cannot be greater than 999');
        return null;
    }

    // isvalomas klaidu pranesimas
    clearError();
    return number;
}

// funkcija tikrinanti spejima
function makeGuess(event){
    // butina, kad siunciant forma nepersikrautu psl
    event.preventDefault();
    console.log('spejimas')
    // dar karta patikrinamas ivesta reiksme
    const number = validateInput();
    if( number === null){
        setError('Something is wrong');
        return null;

    } else if(number > secretNumber){
        setHistory(number, 'the secret number is smaller');
        return null;
    }else if(number < secretNumber){
        setHistory(number, 'the secret number is greater');
        return null;
    }

    // atspetas skaicius, parodomas paveikslelis + blokuojamas mygtukas
    setHistory(number, 'You guessed it, Yay !!!');
    winGif.style.opacity ='1';
    guessBtn.disabled = true;
}

// funkcija skirta spejimo informacijos isvedimui
function setHistory(number, msg){
    counter++;
    const newGuess = document.createElement('p');
    newGuess.textContent = `${counter}. ${number}: ${msg}`;
    historyList.appendChild(newGuess);

}

// funkcija skirta parodyti klaidos pranesima
function setError(message){
    infoMsg.textContent = '';
    infoMsg.style.opacity = '0';
    errorMsg.textContent = message;
    errorMsg.style.opacity = '1';
    inputField.style.borderColor = 'red';
    inputField.value = '';
    guessBtn.disabled = true;

}

// funkcija skirta išvalyti klaidos pranesimus
function clearError(){
    errorMsg.textContent = '';
    errorMsg.style.opacity = '0';
    inputField.style.borderColor = 'green';
    infoMsg.textContent = 'Enter a number from 1 to 999';
    infoMsg.style.opacity = '1';
    guessBtn.disabled = false;
}