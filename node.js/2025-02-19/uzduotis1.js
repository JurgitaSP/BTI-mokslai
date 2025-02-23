//isprintinti data LT formatu 
// paskutinis paleidimas.txt: "2025-02-22 14:58"
import fs from "node:fs";

const date = new Date();
const time = date.toLocaleTimeString("lt");
const formattedDate = date.toLocaleDateString("lt");
// console.log(formattedDate);


fs.writeFileSync("paskutinis-paleidimas.txt", `Paskutinis paleidimas - ${formattedDate} ${time}`);

