async function main(){
const responseDogs = await fetch("https://dog.ceo/api/breeds/list/all");
const dogs = await responseDogs.json();
const dogsList = document.querySelector("#dogs");

console.log(dogs);


dogs.forEach((dogsObj) => {
    dogsList.innerHTML += `<select> <h4>${dogsObj.message}</h4> </select>`;
});
}
main();
// knygos.forEach((knygosObj) => {
// 	knyguSarasas.innerHTML += `<div knygos-type="${knygosObj.type}">
//     <img src="${knygosObj.img}" />
//     <h3>${knygosObj.title}</h3>
//     <p>${knygosObj.price.toFixed(2)}€</p>
//     <p><b>Autorius:</b> <i>${knygosObj.author}</i></p>
//     </div><hr>`;
// });

// const knyguHtmlDivai = document.querySelectorAll("#knygos>div");
// knyguHtmlDivai.forEach((knygosDiv) => {
// 	const knygosTipoId = knygosDiv.attributes.getNamedItem("knygos-type").value; //string
// 	const kategorija = knyguTipai.find((type) => type.id == knygosTipoId); // {id: ?, title: ?}
// 	knygosDiv.innerHTML += `<p><b>Kategorija:</b> <i>${kategorija.title}</i></p>`;
// });

// console.log(knyguTipai);