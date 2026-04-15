// singleton object
const tinderData = new Object();
const tinderData2 = {};

tinderData.id = '1234abc';
tinderData.name = "Arti Sharma";
tinderData.age = 22;
tinderData.isLoggedIn = false;
tinderData.lastLoginDays = ["Monday", "Tuesday", "Wednesday"];

// console.log(tinderData);
const regularUser = {
    email: "arti@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Arti",
            lastName: "Sharma",
        }
    },
}

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d",
}
obj3 = Object.assign(obj1, obj2);
// console.log(obj3);
obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));
// console.log(Object.entries(obj3));
// console.log(Object.hasOwn(obj3, "10"));

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Arti Prasad",
}

const {courseInstructor: inst} = course;

console.log(inst);