export function plotasStaciakampio(x, y){
return x * y;
}

export function plotasApskritimo(r){
    return Math.PI * r **2;
}


//failo exportai aprasomi per globalu kintamaji module.exports(parodo ka sis failas exportuoja)

// module.exports = { plotasStaciakampio, plotasApskritimo };
//common js exportavimas naudojamas pagal dafault Node, o json 
// faile pridejus "type": "module" galime daryti module export
//common js senas importavimo metodas, naudosime module exp/import