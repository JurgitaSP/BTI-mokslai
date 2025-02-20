class Dish {

    #name;
    #price;
    #description;
    #category; //klases category objkt

    //konstruktorius -f-ja pasileidzia automtiskai, kuriant nauja
    // egzmpl. sitos klases Dish
    constructor(name, price, category, description = 'Nera aprasymo') {
        this.#name = name;
        this.#price = price;
        this.#description = description;
        this.#category = category;
        category.addDish(this);
    }
    //geteriai
    getName() {
        return this.#name;
    }

    getPrice() {
        return this.#price;
    }

    getDescription() {
        return this.#description;
    }

    getCategory() {
        return this.#category.getCategoryName();
    }

    //seteriai- leidimas pakeisti reiksmes
    setName(newName) {
        this.#name = newName;
    }

    setPrice(newPrice) {
        if(newPrice>=0){
            this.#price = newPrice;
        }
        else{
            throw new Error("Kaina negali buti mazesne uz 0");
        }
       
    }

    setDescription(newDescription) {
        this.#description = newDescription;
    }

    setCategory(newCategory) {
        this.#category.setCategoryName(newCategory);

    }
    getInfo(){ //pateiks informacija apie patiekalus
        return `Patiekalas: ${this.#name},
        kaina: ${this.#price},
        aprasymas: ${this.#description},
        kategorija: ${this.#category.getCategoryName()}`;
    }


}

export default Dish; 
