const inputas = document.querySelector("#vardo-ivestis");
const amziausInputas = document.querySelector("#amziaus-ivestis");
const checkInput = document.querySelector("#terms");
console.log(inputas);
console.log(amziausInputas);



function getFormData(){
    let arSutinka = checkInput.checked; //ivestis duoda ne string reiksme
        console.log(arSutinka);
    if (!arSutinka){//true reiksme su ! paverciame i false
        alert("Jus privalote sutikti su taisyklemis");
    }
    
        let vardas = inputas.value;
    console.log(vardas);
    let amzius = +amziausInputas.value;
    console.log(typeof amzius);
    
}