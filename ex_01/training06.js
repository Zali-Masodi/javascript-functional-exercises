// closures

// run and study the example
// makePresident returns a new function which accesses the trump object. 

const makePresident = () => {
    const trump = {
        name : "trump",
        speech : "Make america great again!!!",
    };

    return () => console.log(trump.speech);
    
}

// we assign the function
const president = makePresident();
// now when calling our new function it has still access
// to the trump value, although the function itself does not have trump defined
// that is the closure principle 
president();
