function mygtukoPaspaudimas(event){
    console.log(event);
    //event.target - suinicijaves ivyki elementas, todel nebereikia 
    //rinktis su qeuriSelector
    const mygtukas = event.target; //su mygtuku galima atlikineti manipuliacijas


    // if(mygtukas.innerText === "Isjungtas mygtukas"){
    //     mygtukas.innerText = "Ijungtas mygtukas";
    // }
    // else mygtukas.innerText = "Isjungtas mygtukas";

//kad suzinoti koks mygtukas uz kokius atributus atsako, console.log()
console.log(mygtukas.attributes.elementoSelektorius.value);//sita galima naudoti 
// kaip // selektoriu kitam elementui

const kitoElementoSelektorius = mygtukas.attributes.elementoSelektorius.value;
document.querySelector(kitoElementoSelektorius).innerText = "Laisve papugoms";
}