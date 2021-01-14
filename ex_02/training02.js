// map function

// The task is to iterate over an array of numbers
// then double each number
// and return a new array with these numbers
// so [1, 2, 3, 4, 5] -> [2, 4, 6, 8, 10]

// TODO: 1. step: run the code
const numbers = [1, 2, 3, 4, 5];

const double = x => x * 2;

const doubledNumbers = numbers.map(double);

console.log(doubledNumbers);

// Exercise: these are some states of the USA
const states = [
    {
        name: "OHIO",
        year_entered: 1803
    },
    {
        name: "LOUISIANNA",
        year_entered: 1812
    },
    {
        name: "INDIANA",
        year_entered: 1816
    },
    {
        name: "MISSISSIPI",
        year_entered: 1817
    }
];

// TODO: 2. step - 

// this function should extract the year from a state
const extractYears = null;

// this function should iterate over all the states, apply the extractYears function
// hint: use map!!!
const stateYears = null;

console.log(stateYears);