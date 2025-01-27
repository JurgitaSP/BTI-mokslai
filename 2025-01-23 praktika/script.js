// 1. Parašykite programą, kuri suskaičiuotų , kiek duotas skaičius a turi lyginių 
// ir nelyginių skaitmenų.
// @example: 63258 => ‘3 skaičiai lyginiai, 2 nelyginiai’

function skaiciai(number) {
    let lyginis = 0;
    let nelyginis = 0;
    while (number > 0){
        let last = number % 10;
    if (last % 2 == 0) {
        lyginis++;
    }
    else {
        nelyginis++;
    }
    number = Math.floor(number / 10);
    }
    return `${lyginis} skaiciai lyginiai, ${nelyginis} nelyginiai`
}

console.log(skaiciai(84268426));

// 2. Parašykite funkciją, kuri priimtų parametru du tekstus ir išvestų kuris tekstas
// ilgesnis ir tą tekstą @example: (‘abc’, ‘b’) => ‘tekstas “abc” yra ilgesnis, jo
// ilgis 3 simboliai’ (‘abcd’, ‘abcd’) => ‘abu tekstai lygus, jų ilgis 4 simboliai’

function tekstas(tx1, tx2){
    if(tx1.length > tx2.length){
        return `tekstas ${tx1} yra ilgesnis, jo ilgis yra ${tx1.length} simboliai`;
    }
    else if (tx1.length < tx2.length){
        return `tekstas ${tx2} yra ilgesnis,jo ilgis yra ${tx2.length} simboliai`;
    }
    else {
        return `abu tekstai yra lygus, ju ilgis ${tx2.length}`;
    }
}
console.log(tekstas("huyeec", "aedfhjkjl"));


//  3. Sukurkite tuščią masyvą.
// • Įdėkite 4 elementus į masyvą
// • Pridėkite 1 elementą į masyvo galą
// • Ištrinkite vidurinį elementą ir išveskite jį į consolę
// • Išveskite į consolę masyvą pasirašytos f-jos pagalba.
// • Pakeiskite 2 elementą nauja reikšme
// • Pridėkite du naujus elementus į masyvo pradžią
// • Išveskite į consolę masyvą pasirašytos f-jos pagalba.

const masyvas = [4, 5, 9, 8, 7, 2];
masyvas.push("p");
console.log(masyvas);

const pvz = masyvas.splice(Math.floor(masyvas.length / 2), 1); 
console.log(pvz);

function print(masyvas){
    
    for(let i = 0; i < masyvas.length; i++){
        console.log(masyvas[i]);
    }
}
print(masyvas);

masyvas[1] = `cha`;
console.log(masyvas);

// masyvas.splice(0, 0, "naujas", "sitas irgi"); 
masyvas.unshift("naujas2", "sitas");
console.log(masyvas);


print(masyvas);


// 4. Parašykite f-ją kur konvertuotų masyvą į stringą
// @example: arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
//  arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
//  arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA

const masyvas1 = [1, 2, 3, 4, 5, 6, 7, 8];
masyvas.toString(masyvas1);

console.log(masyvas1);

const masyvas2 = ["tyu", 2, 7, "op", 8];
masyvas.toString(masyvas2);

console.log(masyvas2);

//  5. Parašykite f-ją kuri apverstų masyvą
// @example: reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
//  reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
//  reverse([]) ➞ []

const masyvas5 = [1, 8, "buy", 98, "yes"];
console.log(masyvas5);
masyvas5.reverse(masyvas5);
console.log(masyvas5);


// 6. Parašykite f-ją kuri gražintų paskutinį masyvo elementą
// @example: getLastItem([1, 2, 3]) ➞ 3 
//  getLastItem(["cat", "dog", "duck"]) ➞ "duck" 
//  getLastItem([true, false, true]) ➞ true

function getLastItem(masyvas5){
   return masyvas5[masyvas5.length -1];
}
console.log(getLastItem([1, 8, "buy", 98, "yes"])); 


//  7. Parašykite f-ją kuriai būtų perduodamas parametras masyvas iš skaičių. 
// Ir gražinamas masyvas kurio elementai yra padauginti iš 2
// @example: multipliedArray([1, 2, 3, 4, 5, 6]) ➞ [2, 4, 6, 8, 10, 12]






// 8. Parašykite f-ją, kuri konvertuotų visus masyvo elementus į stringus
// @example: parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"] 
// parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]


// 9. Išvesti į consolę visą daugybos lentelę (ciklas cikle pagalba)