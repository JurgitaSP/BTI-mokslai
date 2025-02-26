import Dish from './classes/Dish.js';
import Category from './classes/Category.js';
// import Menu from './classes/Menu.js';



const dessert = new Category("Desertai");

console.log(dessert);


const iceCream = new Dish("Ledai", 5.5, dessert);
const cake = new Dish("Tortas", 15, dessert, "sokoladinis");
console.log(dessert);
iceCream.setPrice(6);
console.log(`Viso sukurta ${Dish.dishCounter}`);


console.log(iceCream.getInfo());

