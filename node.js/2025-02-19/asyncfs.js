import fs from "node:fs/promises";//is node pasiimam failu sistema, kuri palaiko asinchronines f-jas

// asinchronines fs
//sukurti fs 1 budas
fs.writeFile("failas.txt", "alio!", (err) => {
   //operacija ivykdoma dveim budais - klaida arba ok
   //klaidos atveju throw err, err- null, erroro nebuvo arba err -Error
   //ok atveju "failas buvo.."
    if (err) throw err; //console.log(err); //siuo atveju programa nebaigs savo darbo, nes klaida bus ismetama
    else {              //jei consolinam err o ne trow - programa tesia darba, parod klaida
        console.log("Failas buvo sekmingai issaugotas");
    }
});

// fs.writeFile("failas.text", "Hi", function(err){
//     if(err)console.log(err);
//     else console.log("Saved!");
//     });
// console.log("Programa baige savo darba");




//2 budas REKOMENDUOJAMAS
await fs.writeFile("tekstas.text", 'Nelauket?');//callback negalima naudoti kartu su await
//su await klaidai pagauti naudojamas try cath
try{
    await fs.writeFile("tekstas.text", 'Nelauket?');
    console.log("saved!");
    
}catch(err){
    console.error(err);//tolimesnes komandos toliau veikia, pats erroras rodomas
}
console.log("Programa baige darba");