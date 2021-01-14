// spread operator

// NOTE: if you face some issues regarding spread operator 
// like Parser.pp$5.raise or arser.pp$5.unexpected on the ... operator
// then installing babel-node again might help:
// npm install --save @babel/node


// first, some objects, here trump with his hobbies, election data...
const trump =  {
    name: 'TRUMP D J',
    birth_year: 1946,
    years_served: 0,
    party: 'REPUBLICAN',
};

const hobbies =  [
  'GOLF',
  'TWITTER',
];

const election = {
    election_year : 2016,
    votes: 304,
    winner_loser_indic: 'W'
};

// Now lets combine the data easily with the spread operator 
// TODO: 1. step - uncomment the following code and check the output

// const trumpUpdated = {
//     ...trump,
//     hobbies: { ...hobbies },
//     ...election,
// }

// console.log(trumpUpdated);


// Again let us enrich the data, now with his current (2021) wife
// TODO: 2. step - uncomment the following code and check the output
// const trumpMarried = {
//     ...trumpUpdated,
//     spouseName: 'Melania',
// }

// console.log(trumpMarried);
