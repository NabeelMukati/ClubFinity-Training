import * as Guitars from "./guitars.js";
import User from "./user.js"

const me = new User("email@email.com", "dave");
console.log(me);
console.log(me.greeting());
console.log(Guitars.playGuitar());
console.log(Guitars.plucking());
console.log(Guitars.shredding());