// functions and arrow functions

// This is a normal javascript function
function myFunction(arg1, arg2) {
    // function body
    console.log("hello " + arg1 + " and " + arg2);
}

// call the function
// TODO 1.step: uncommment the following line, run the code, check the output in the console
// myFunction('Grogu', 'Luke');


// Now a "normal" function, but assigned to a constant
const myOtherFunction = function (arg1, arg2) {
    // function body
    return "hello " + arg1 + " and " + arg2;
}

// call the function
const myOtherResult = myOtherFunction('Grogu', 'Luke Skywalker');

// TODO 2.step: uncomment the following line - run it and see the output
// console.log(myOtherResult);

// lets go into arrow functions
const add = (x, y) => x + y;

// call it with
const result = add(10, 20);

// TODO 3.step: uncomment the following line - run it and see the output
// console.log(result);



// this is the arrow function version of doubling a number
// after the = the parameters are listed, after the =>
// the function content comes with implicit return
const doubleArrow = number => number * 2;

// this is the "normal" JS version of doubling a number
const doubleNormal = function (number) {
    return number * 2;
}

// no parameters
const sayHello = () => console.log('Hello');

// you can return objecs
const getPresidentData = () => ({
    "name": "TRUMP D J",
    "birth_year": 1946,
    "party": "REPUBLICAN"
});

// now with parameters
const myArrowFunction = (arg1, arg2) => ({
    name: 'TRUMP D J',
});


// check the following function for getting president data
const getPresidentNormal = function (presidentId) {
    return {
        "id": presidentId,
        "name": "TRUMP D J"
    }
};

// TODO 4. step: uncomment the following line to see the output
// console.log(getPresidentNormal(10));

// TODO 5. step: now your turn => remove function(){} and make it an arrow => function!
const getPresidentArrow = function (presidentId) {
    return {
        "id": presidentId,
        "name": "TRUMP D J"
    }
};
// uncomment the following line to see the output
// console.log(getPresidentArrow(10));