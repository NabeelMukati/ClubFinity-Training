


class Pizza{
    crust = "orginal";
    #sauce = "traditional";
    #size;
    constructor(pizzaType){
        this.#size = pizzaType;
    }

    hereYouGo() {

        console.log(`Here's your ${this.crust} ${this.#sauce}`);
    }
}

 const myPizza = new Pizza("large");
 myPizza.hereYouGo();

// const myPizza = new Pizza("piza");
// myPizza.bake()

// class SpecialtyPizza extends Pizza{
//     constructor(pizzaSize){
//         super(pizzaSize);
//         this.type = "the Works";
//     }
//     slice(){
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
//     }
// }

// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice()