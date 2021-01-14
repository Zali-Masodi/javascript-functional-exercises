// functions as return value

// imagine the following functions:

const trump = {
    "name": "TRUMP D J",
    "age": 75,
}

// lots of duplicated code, or?
const makeOlder = age => age + 10;
const makeVeryOld = age => age + 20;

// now you can use these like
const youngerTrump = makeOlder(trump.age);
console.log(youngerTrump); // 85
const olderTrump = makeVeryOld(trump.age);
console.log(olderTrump); // 95

// get rid of duplicated code now!
// TODO: uncomment the following lines to see it working

// const changeAge = x => y => x + y;
// const makeOldNew = changeAge(10);
// const makeVeryOldNew = changeAge(20);

// console.log(makeVeryOldNew(trump.age));