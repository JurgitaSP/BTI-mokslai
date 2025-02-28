import { lookupService } from "dns/promises";
import http from "http";

//kuriamas serveris
http.createServer((request, response)=>{
    // console.log("Serveris gavo uzklausa");
    console.log(request.method, request.url); //uzklausa i serveri
    response.writeHead(200,{"Content-Type": "aplication/json"});
    response.write(JSON.stringify({a: 5, b: "uio"}));
        // `gavome uzklausa i ${request.url}, su metodu ${request.method}`
     //atsakymas
    response.end();
}).listen(3000);

//localhost:3000 //lokalaus kopiuterio ip adresas
//127.0.0.1:3000
//vietinio tinklo ip adresas
// 192.168.1.46 irgi glima pasiekti serveri
