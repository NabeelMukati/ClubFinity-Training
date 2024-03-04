// let myNumber = 0;
// do{
//     myNumber += 1;
//     console.log(myNumber);
    
// } while (myNumber < 50){

// }

let name = "dave";
let counter = 0;
let myLetter;
while (counter <= 3) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1){
        counter += 2;
        continue;
    }
    if (myLetter === "v") break;
    counter ++;
}