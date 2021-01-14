// pass functions as arguments

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const calc4and2 = func => func(4, 2);



// TODO: 1. step: uncomment the next lines of code, run it and see the result

// const add42 = calc4and2(add); // -> 4 + 2
// console.log(add42)
// const substract42 = calc4and2(subtract); // -> 4 - 2
// console.log(substract42)


// TODO: 2. step: uncomment the next lines of code, run it and see the result

// constAnonym = calc4and2((x, y) => x + y); // now with anonymous function
// console.log(constAnonym);

// TODO: 3. step: uncomment the next lines of code, run it and see the result

// const mathPow = calc4and2(Math.pow) // -> 16
// console.log(mathPow);
