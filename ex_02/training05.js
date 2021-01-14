// reduce 

// consider you want to sum up numbers
const numbers = [1877, 1901, 1803, 1812, 1888, 1816, 1817];

// can be easily done with reduce
// acc is th accumulator, the current value
// like looping through the array.
// note that the 0 is the starting value for the accumulator. 
const sum = numbers.reduce((acc, x) => {
    console.log(`acc is ${acc}`);
    console.log(`x is ${x}`);

    return acc + x;
},0);

// TODO uncomment the line and see the result:
// console.log(sum);