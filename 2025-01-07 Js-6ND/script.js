// Vardas
// Pavardė
// Gimimo data (date input)
// Elektroninis paštas (email input)
// Ar sutinkate su taisyklėmis ir salygomis (checkbox input)
// 1. Vardas turi būti sudarytas iš 3-40 simbolių;
// 2. Pavardė turi būti sudaryta iš 3-70 simbolių;
// 3. Buvo sutikta su taisyklėmis ir salygomis;
// Nesėkmingos registracijos atveju išmesti alert() pranešimą, pranešantį, kodėl registracija nepavyko.
// Sėkmingos registracijos atveju imituojame elektroninio pašto pranešimą console.log():
// “Siunčiamas laiškas adresu EMAIL...”

const getName = document.querySelector("#name");
const getLastname = document.querySelector("#lastName");
const getBirthday = document.querySelector("#birhtday");
const getEmail = document.querySelector("#email");
const getConfirm = document.querySelector("#isConfirm");

function getFormData() {
    let vardas = getName.value;
    let pavarde = getLastname.value;
    let pastas = getEmail.value;
    let metai = getBirthday.value.slice(0, 4);
    let sutikimas = getConfirm.checked;

    if (vardas == "") {
        alert('Iveskite savo varda');
    }
    else if ((vardas.length) < 3 || (vardas.length) > 40) {
        alert("Per ilgas arba per trumpas vardas");
    }
    else if (pavarde == "") {
        alert('Iveskite savo pavarde');
    }
    else if ((pavarde.length) < 3 || (pavarde.length) > 70) {
        alert("Per trumpa arba per ilga pavarde")
    }
    else if (metai == "") {
        alert('Iveskite savo gimimo data');
    }
    else if (pastas == "") {
        alert('Iveskite savo elektroninio pasto adresa');
    }
    else if (!sutikimas) {
        alert('Sekmingai registracijai Jus privlote sutikti su taisyklemis ir salygomis')
    }
    else {
        console.log(`Siunciamas laiskas adresu ${pastas}...`);
        console.log(`Sveiki, ${vardas} ${pavarde}. Aciu, kad registravotes musu socialiniame tinkle. Jusu laikinasis slaptazodis ${vardas}_${metai}.Linkime grazios dienos - one.lt administracija.`);
    }
}
