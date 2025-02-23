//common JS modulius sistemos importavimas
// const {math} = require("./math");


// console.log(math);
import { plotasApskritimo, plotasStaciakampio } from "./math.js";

const args = {};
process.argv.slice(2).forEach((val) => {
    const [key, value] = val.split("=");//["plotis", 4]
    args[key]=Number(value);
});; //kintamasis process yra globalus, turi matytis bet kuriame js faile
// node index.js plotis=4 aukstis=7
console.log(args);//argumentai

const plotas = plotasStaciakampio(args.plotis, args.aukstis);
console.log(plotas);
