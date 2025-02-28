import Dish from './classes/Dish.js';
import Category from './classes/Category.js';
import Menu from './classes/Menu.js';

const mainMenu = new Menu();

console.log(mainMenu);

const dessert = new Category('Desertai', mainMenu);
const kita = new Category('kita', mainMenu);
const drinks = new Category('Gėrimai', mainMenu);
// console.log(dessert);

const kitoks = new Dish('lialia', 5.5, kita);
const iceCream = new Dish('Ledai', 5.5, dessert);
const cake = new Dish('Tortas', 5.5, dessert, 'pats skaniausias');

// console.log(iceCream.getInfo());
// 
//-----------HTML turinio kurimas ->--------rodyti kategorijas

const content = document.getElementById('content');
const showCategoryList = document.getElementById('showCategoryList');

showCategoryList.addEventListener('click', ()=> displayCategoryList());

function displayCategoryList(){
    content.innerHTML = mainMenu.generateInnerHTML();
}
