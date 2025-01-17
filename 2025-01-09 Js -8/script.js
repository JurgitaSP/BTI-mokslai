// . Sukurkite masyvą colors, kuriame bus tokie elementai:

//   'red', 'magenta', 'violet', 'blue', 'green', 'yellow', 'orange', 
// 'purple', 'pink', 'brown', 'black', 'white', 'gray', 'cyan', 'teal', 
// 'indigo', 'lime', 'navy', 'gold', 'silver'

const colors = ['red', 'magenta', 'violet', 'blue', 'green', 'yellow', 'orange', 
'purple', 'pink', 'brown', 'black', 'white', 'gray', 'cyan', 'teal', 
'indigo', 'lime', 'navy', 'gold', 'silver'];

console.log(colors);

// 2. Sukurkite funkciją first(masyvas), kuri gražina pirmojo elemento masyve 
// reikšmę; 
function first(masyvas){
    return masyvas[0];
}
console.log(first(colors));// 'red'

// 3. Sukurkite funkciją last(masyvas), kuri gražina paskutiojo elemento masyve reikšmę;
function last(masyvas){
    return masyvas[masyvas.length -1];
}
console.log(last(colors));// 'silver'

// 4. Sukurkite funkciją secondLast(masyvas), kuri gražina priešpaskutinio 
// elemento masyve reikšmę bei patikrina ar masyvas turi bent 2 elementus. 
// Jei masyve yra mažiau nei 2 elementai, gražinkite reikšmę false, kitu atveju 
// grąžinkite priešpaskutinį elementą;
function secondLast(masyvas){
    if (masyvas.length < 2)
        {
        return false;    
    }
    else {
        return masyvas[masyvas.length - 2];
    }
}
console.log(secondLast(colors)); // 'gold'

console.log(secondLast([''])) // false

