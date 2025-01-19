//masyvas = array
//masyvai - kintamieji, savyje turintys daug kintamuju, kintamuju rinkiniai
//prie masyvu naudoti const, jos tipas nesikeicia 
const masinos = ["Opel", "Audi", "Volvo", 4, "BWM"];
console.log(masinos); //audi
console.log(masinos.length);//masyvo kintamuju sk
console.log(masinos[2].length); //parodo antro kintamojo ilgi is simboliu

console.log(masinos[2].toUpperCase()); //vercia i didziasias

const tusciasSarasas = []; //tuscias masyvas

//kitoks masyvo sukurimo budas:
const kitasSarasas = new Array("pirmas", 'antras', 'trecias');
console.log(kitasSarasas);

//pasiekti paskutini masyvo elementa
const paskutinissarasoElementas = masinos[masinos.length -1];
console.log(paskutinissarasoElementas);

//saraso atvaizdavimas naudojantis HTML elemntu
const sarasoElementas = document.querySelector("#sarasas");
sarasoElementas.innerHTML = masinos;

//masyvuose galima atvaizduoti skirtingo tipo reiksmes

//masyvu metodai:
//toString -vercia masyva i teksta
const masyvasKaipTekstas = masinos.toString();
console.log(masyvasKaipTekstas);

//konvertuoja masyva i teksta ir leidzia pasirinkti atskirikli ir galima naudoti stringinius metodus
const sujungtasMasyvas = masinos.join(", ");//galime pasirinkti atskirikli
console.log(sujungtasMasyvas);

//tekstas.split()- konvertuoja teksta i masyva su pasirinktu atskyrikliu
const sugeneruotasMasyvas = sujungtasMasyvas.split(", "); //ta pati teksta verciam i masyva
console.log(sugeneruotasMasyvas);

//i masyvo gala iterpia elemnta .push();
masinos.push("Suzuki");
console.log(masinos);

//.pop() pasalina pirma elemnta is masyvo galo
masinos.pop();
pasalintasElementas = masinos.pop();//atiduoda pasalinta elementa
console.log(masinos);
console.log(pasalintasElementas);

//.shift() pasalina pirma elementa is masyvo priekio
masinos.shift();
pasalintasElementas = masinos.shift();//atiduoda pasalita elementa
console.log(masinos);
console.log(pasalintasElementas);

//masyvas.splice(); iterpia arba pasalina elementus is masyvo
masinos.splice(0, 0, "Skoda");//pirmas skaicius rodo kur operuojame, antras-kiek
// elementu istrinti, trecias - ka iterpti
console.log(masinos);

//masyvas.slice(); paima tam tikra masyvo dali pagal indeksus
const pirmiTrys = masinos.slice(0, 3);
console.log(pirmiTrys);

const trysNuoGalo = masinos.slice(-2);
console.log(trysNuoGalo);

//nuo antrojo iki priespaskutinio
const dalis = masinos.slice(1, -1);
console.log(dalis);

//masyvas.sort() - isrikiuoja nuo a iki z, keicia orginalaus masyvo isrikiavima
masinos.sort(); //nereikia =; lt eina i pati gala
console.log(masinos);

//masyvas.reverse() - apvercia masyva is galo i prieki, keicia orginalu teksta
masinos.reverse();
console.log(masinos);

//masyvas.includes() - iesko elemnto masyve ir duoda true/false
masinos.push("Suzuki");
if (masinos.includes("Suzuki")){
    console.log("masyve yra Suzuki");
}
else{
    console.log("Masyve nera Suzuki");
}

//kai reikia ieskoti elemnto nepriklausomai nuo raidziu dydzio, masyva verciame
//i teksta(string), verciame i mazasias raides ir konvertuojame atgal i masyva

masinos.push("SUZUKI");
if (masinos.join(",").toLowerCase().split(",").includes("suzuki")){
    console.log("Masyve yra Suzuki");
}
else{
    console.log("Masyve nera Suzuki");
}