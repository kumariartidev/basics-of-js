myarray1 = ["Arti", "Guriya", "Suman", "Puja"];
myarray2 = ["Vineet", "Vinay", "Ashish", "Govinda"];

//myarray3 = myarray1.push(myarray2);
myarray3 = [...myarray1, ...myarray2];

//console.log(myarray1);
//console.log(myarray2);
// console.log([...myarray1, ...myarray2]);

const anotherarray = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10], [11, 12, 13, 14,[2, 4], 15]];
const real_array = anotherarray.flat(Infinity);

// console.log(real_array);
// console.log(anotherarray);

// console.log(Array.from({name: "Arti"}));
console.log(Array.from([1, 2, 3], x => x * 2));

const socre = 100;
const score2 = 200;
const score3 = 300;

// console.log(Array.of(socre, score2, score3));