const myArray = ['eat', 'sleep'];
const myObject = {
    name: "dave",
    hobbies: ['eat', 'sleep'],
    logName: function() {
        console.log(this.name);
    }

};

localStorage.setItem("mylocalStore", JSON.stringify(myArray));
const mylocalData = JSON.parse(localStorage.getItem("mylocalStore"));
console.log(mylocalData);