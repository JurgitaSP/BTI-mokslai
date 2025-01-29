//timeout - uzdelsto veikimo f-ja, veiksmas bus uzdelstas

//setTimeout -callback, uzdelsimas
const timeOutId = setTimeout(()=>{
 console.log('pica atvezta');
}, 2000);

const timeOutId2 = setTimeout(()=>{
    console.log('pica atvezta');
   }, 2000);

console.log(timeOutId);
console.log(timeOutId2);
clearTimeout(timeOutId); //atsaukimas settime komandos


// intervalai - pasikartojancios f-jos kas tam tikra laika

const intervalId = setInterval(()=>{
    console.log('vykdomas klaidu patikrinimas');
}, 2000);

clearInterval(intervalId);
