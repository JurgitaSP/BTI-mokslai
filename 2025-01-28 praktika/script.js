// Sukurkite objektą automobilis
// Pridėkite savybę : pavadinimas
// Pridėkite savybę : modelis
// Pridėkite savybe : metai
// Pridėkite savybę : rida
// Pridėkite savybę : savininkas (savybė irgi objektas ir turi vardą ir pavardę)
// Pridėkite objektui metodą, kuriame būtų realizuotas visų savybių išvedimas
// Pakeiskite kurios nors savybės reikšmę
// Išsitestuokit, viską išsiveskit
 
const automobilis = { 
    pavadinimas: "Audi",
    modelis: "bulka",
    metai: "1990",
    rida: "400000",
    savininkas: {
        vardas: "Saulius",
        pavarde: "Jonaitis",
    }

}
automobilis.metai = "2000"
console.log(automobilis);
console.log(automobilis.metai);
console.log(automobilis.savininkas.pavarde);