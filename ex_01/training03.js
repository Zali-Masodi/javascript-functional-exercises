// functions as data
// 

const yearNow = new Date().getFullYear();

const trump = {
    "name": "TRUMP D J",
    "birth_year": 1946,
    "party": "REPUBLICAN",
    "years_served" : 4
  }

// several functions for getting the age from birthyear
const calcAge = birthYear => yearNow - birthYear;
// make yourself younger
const makeYounger = age => age - 10;
// you look older because you smoke...
const smokeAlot = age => age + 20;

// TODO: 1. Step uncomment the following lines to let it run and see

//const age = calcAge(trump.birth_year);
//console.log(age);
//const madeYounger = makeYounger(age);
//console.log(madeYounger);


// how can an functions array be handy? 
// put the functions in an array!
const functionsArray = [
    calcAge,
    makeYounger,
    smokeAlot
];


// now lets call all the functions

// TODO: 2. Step uncomment the following lines to see it running

//var fakeAge = trump.birth_year;

//functionsArray.forEach(func => fakeAge = func(fakeAge));

//console.log(fakeAge);
