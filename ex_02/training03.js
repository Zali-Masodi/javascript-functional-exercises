// filter function

const presidents = [
      {
        "name": "KENNEDY J F",
        "birth_year": 1917,
        "years_served": 2,
        "death_age": 46,
        "party": "DEMOCRATIC",
      },
      {
        "name": "JOHNSON L B",
        "birth_year": 1908,
        "years_served": 5,
        "death_age": 65,
        "party": "DEMOCRATIC",
      },
      {
        "name": "NIXON R M",
        "birth_year": 1913,
        "years_served": 5,
        "death_age": 81,
        "party": "REPUBLICAN",
      },
];

// TODO 1. step - run the code and see what happens!!!

// function for getting presidents died younger 60 years
const under60 = pres => pres.death_age < 60;

// now apply that function to the presidents
const presidentsDiedYoung = presidents.filter(under60);

// result array has only the presidents did younger 60
console.log(presidentsDiedYoung);

// another example with anonymous function:
// TODO 2.step - uncomment the code, run it and see what happens
// const presidentsBornBeforeWWI = presidents.filter(pres => pres.birth_year < 1914);

//console.log(presidentsBornBeforeWWI);