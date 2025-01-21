// 1.Sukurkite funkciją, kuri sukuria atsitiktinių skaičių masyvą iš N elementų. 
// Atsitiktiniai skaičiai nuo M iki O;// pvz: console.log(generuotiAtsitiktinius(4, 100, 105)); 
// atsakymas konsolėje: [101, 101, 100, 105] 
//n- kiek elementu yra masyve
// m- nuo kurios reiksmes imammi elemntai masyvui
// o -reiksme max, iki kurios generuojamas atsitiktinis sk.
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 function kurtiAtsitiktiniuSkaiciuMasyva(n, m, o){

 //1. deklaruoti nauja masyva []
 const masyvas = [];
 //2. naudosime cikla, naudojantikoda daug (n ) kartu
 //while 
 // let index = 0;
 // while (index < 10)
 //{
//...
 //index++;
//}

for(let i = 0; i < n; i++)
    {// 2.1 generuojamas atsitiktinis skaicius nuo m iki o
 let atsitiktinis = rand(m, o);
 // 2.2. tas atsitiktinis skaicius bus pridedamas i naujai deklaruota masyva
 masyvas.push(atsitiktinis); //masyvas.push(rand(m, o)); galima sutrumpinti
    }
 //3. return masyvas []
 return(masyvas);
}

console.log(kurtiAtsitiktiniuSkaiciuMasyva(10, 2, 5));

//  Sukurkite funkciją, kuri console.log’e parašo tik skaičius iš masyvo M, 
// mažesnius nei N. pvz: tikMazesni([4,5,6,7,2,4], 5);
// atsakymas konsolėje: 4, 2, 4 
//M- skaiciu masyvas, kuris paduodamas f-jai
//N- iki kurios reiksmes konsole logins sk.is  masyvo

function tikMazesni(m, n){
for(let i = 0; i < m.length; i++){
    if ((m[i]) <= n){
        console.log(m[i]);
    }
}
}
tikMazesni([4, 5 , 6 ,7], 4);

// Sukurkite funkciją, countAllThrees(array), kuri suskaičiuotų, kiek kartų 
// pateiktame skaičių masyve yra pasikartojantis skaičius 3;

function countAllThrees(m){
    for(let i = 0; i < m.length; i++){
        if((m[i]) == 3){
            
        }
    }
}