const myarray = [1, 2, 3, 4, 5];

// myarray.push(6);
// myarray.push(7);
// myarray.pop();
// myarray.shift(4);

// const newarray = myarray.join();
// console.log(myarray);
// console.log(typeof newarray);
// console.log(myarray.indexOf(5));

// Slice and Splice
const newarray = myarray.slice(1, 4);
console.log(newarray);
console.log(myarray);

const my2 = myarray.splice(1, 2, 10, 11);
console.log(my2);
console.log(myarray);