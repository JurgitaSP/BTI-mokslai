import path from "path";// importuojam path
import fs from "node:fs";//sinchroninio failus sistemos modulio importavimas
//pagrindine projekto direktorija pasiekiama per komanda process.cwd()
//globalus -reiskia, kad paleidus bet kuriame faile parodys parg.projekto direktorija
// console.log(process.cwd());
import { log } from "./logger.js";


const aplankoKelias = path.join(
    process.cwd(),
    "katalogas",
    'subkatalogas',
    'katalogiukas',
    'failas.js',
    'kitas failas'
);


console.log(aplankoKelias); //rodo kela, Nevaliduoja, kurtas su .join()
console.log(path.dirname(aplankoKelias));//rodo kelia ir validuoja (nerodo netinkamu "kelio" failu)

console.log(path.normalize('path//to//dirname')); //normalizuoja 'bloga kelia' is IPA, padaro ji suprantama OS


//realityvus kelias
console.log(path.isAbsolute(path.normalize ('path//to//dirname'))); //ar tai yra absoliutus kelias
console.log(path.isAbsolute(aplankoKelias));//absoliutus kelias
//absoliutus kelias prasideda nuo c disko


//FAILU SISTEMA
// SINCHRONINIS BUDAS blokuojantis veiksmu seka elgesys. 
//kuriame faila

log("Sukurtas failas.txt, jo turinys: 'Labukas'");
fs.writeFileSync("failas.txt", "Niu Labas\n\tSveiks ir tau");
//sukuria faila arba papildo jau egzistuojancio failo turini
fs.appendFileSync("failas.txt", '\nka geziukai?');

//failo turinio perskaitymas
const gautasTekstas = fs.readFileSync('log.txt');
console.log(String(gautasTekstas)); //tekstas gaunamas buffer pavidalu, paverciam i stringn

//failo istrynimas
fs.unlinkSync('failas.txt');

//katalogo istrynimas
fs.rmdirSync();

//Ne tuscio katalogo istrynimas
fs.rmSync("katalogas", { recursive: true, force: true });

//fs.renameSync() - pervadina faila ir perkelia fs
fs.renameSync("nurodom kelia is kur paimam+fs pavad", "nurodom kelia kur faila padedam+naujas failo pavad ")

//ASINCHRONINIS BUDAS neblokuojantis veiksmu seka elgesys