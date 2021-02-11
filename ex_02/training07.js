// final Training Session

// TODO

// you need to have docker installed for this one
// We will run a local database with a rest-api holding all the president data
// Then we fetch data from the rest-api

// 1. open a new terminal / cmd / console
// 2. clone somewhere the following url:
// 3. git clone https://github.com/FontysVenlo/president-postgrest-restapi.git
// 4. go into the directory: cd president-postgrest-restapi
// 5. in the terminal type: docker-compose up -d
// 6. type npx babel-node ex_02/training07.js

const fetch = require('node-fetch');

const getPresidents = () =>
    fetch("http://localhost:3000/president")
        .then(res => res.json())
        .then(json => json.map(president => president.name))
        .then(names => console.log(names));

getPresidents();