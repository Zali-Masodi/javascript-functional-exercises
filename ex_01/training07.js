// higher order functions

// we define a higher order function
const divide = (x, y) => x / y;

// TODO 1. step: run the code
// works quite good, right?
//console.log(divide(4,2)); // 2


// TODO 2. step: uncomment the next line, see what happens
//console.log(divide(4,0)); // ???


// now we can fix this by changing the implementation of divide
const divideWithCheck = (x, y) => {
    if (y === 0) {
        console.log("Error: divided by zero!!!");
        return null;
    }
    
    return x / y;
}

// TODO 3. step: uncomment the next line, see what happens
//console.log(divideWithCheck(4,0)); // ???


// This is unstable and unclear behaviour, I want to prevent dividing by zero
// So now do NOT put the logic in the divide() function but 
// separate simply the logic from the "higher order function"
// ... is the spread operator. 
const secondArgumentIsntZero = func =>
    (...args) => {
        if (args[1] === 0) {
            console.log('Error: dividing by zero');
            return null;
        }

        return func(...args);
    }



// TODO 4. step: uncomment the next lines   
 const divideSafe = secondArgumentIsntZero(divide);

 console.log(divideSafe(7, 0));
 console.log(divideSafe(5, 3));

