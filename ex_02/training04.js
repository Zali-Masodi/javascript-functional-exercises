// slice

// helpful is slice, as some functions "mutate" the array, 
// so .sort(), .reverse(), .push(x), .pop() is not good!!!
// -> we need a fast way to make a copy without mutation
// TODO 1. step - run the code 
const years = [1877, 1901, 1803, 1812, 1888, 1816, 1817];

console.log(years.slice().reverse());

console.log(years);

// now I can do some sorting 
// TODO: 2. step uncomment the code below and run it.

// const ascending = (a, b) => {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0;
// }

// const descending = (a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//     return 0;
// }

// const sortedYears = years.slice().sort(descending);

// console.log(sortedYears);