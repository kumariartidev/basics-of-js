// Singleton object - If object created from constructor
// Object.create

// Object literal

const mySym = Symbol("Key1");
const jsUser = {
    name: "Arti",
    "full name": "Arti Sharma",
    [mySym]: "myKey1",
    age: 22,
    location: "Delhi",
    email: "arti.google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}
// console.log(jsUser["full name"]);
// console.log((jsUser[mySym]));

jsUser.email = "my@gmail.com";
// console.log(Object.isFrozen(jsUser));
// console.log(jsUser.email);
// Object.freeze(jsUser);
// console.log(Object.isFrozen(jsUser));
jsUser.email = "new@gmail.com";
// console.log(jsUser.email);

jsUser.greeting = function() {
    console.log("Hello world!!!");
}

jsUser.newGreeting = () => {
    console.log(`Hello JsUser, ${jsUser.name}`);
}

// console.log(jsUser.greeting())
console.log(jsUser.newGreeting())