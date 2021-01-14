// currying and partial application



// TODO 1. step - run the code
// normal function which adds x, y, z
const add = (x, y, z) => x + y + z;

console.log(add(2,5,8)); // 15




// now partial functions 
// TODO 2. step - uncomment the next lines and run the code

// const addPartialOne = x => (y, z) => add(x, y, z);

// const addTwo = addPartialOne(2);

// console.log(addTwo(5,8)); // 15




// another partial version
// TODO 3. step -  uncomment the next lines and run the code

// const addPartialTwo = (x, y) => z => add(x, y, z);

// const addTwoAndFive = addPartialTwo(2, 5);

// console.log(addTwoAndFive(8)); // 15




// yet another partial application
// TODO 4. step -  uncomment the next lines and run the code

// const addPartialThree = x => y => z => add(x, y, z);

// const add2 = addPartialThree(2);
// const add5 = add2(5);
// const sum = add5(8);

// console.log(sum); // 15




// currying with getting rid of intermediate functions
// TODO 5. step -  uncomment the next lines and run the code
// const sumNicely = addPartialThree(2)(5)(8);

// console.log(sumNicely); // 15