const vehicle = {
    wheels: 4,
    engine: function(){
        return "vrrom!";
    }

}

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels)
console.log(truck.engine())


// const obj = { name: "Nabeel" };

// const another = {
//     alive: true, 
//     answer: 42,
//     hobbies: ["Eat", "sleep", "code"],
//     beverage:{
//         morning: "coffee",
//         afternoon: "iced tea"
//     },
//     action: function() {
//         return `Time for ${this.beverage.morning}`;
//     }

// };
// console.log(another.action());