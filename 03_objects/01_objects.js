// Singleton object - If object created from constructor
// Object.create

// Object literal

const mySym = Symbol("Key1");
const jsUser = {
    name: "Arti",
    "full_name": "Arti Sharma",
    [mySym]: "myKey1",
    age: 22,
    location: "Delhi",
    email: "arti.google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}

// console.log((jsUser[mySym]));

jsUser.email = "my@gmail.com";