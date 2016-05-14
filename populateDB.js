var cities = ["Madrid", "Toledo", "Barcelona", "Gijón", "Valencia", "Puertollano"];
var timestamp = new Date('01/01/2016').getTime(),
    minAge = 1, maxAge = 150,
    numberOfRecords = 200;

function rand(max) {
    return Math.floor((Math.random() * max) + 1);
}
/**
 * Generates populaiton arrays with random number 
 * of citizens per age and in random age steps (age 9...35....47...)
 * @return {Array} a population array [{age:25,count500}]
 */
function generatePopulation() {
    var results = []
    for (var i = minAge; i < maxAge; i += (rand(10))) {
        results.push({ age: i, count: rand(9999999) })
    }

    return results
}

var data = [];

var conn = new Mongo(),
db = conn.getDB("cense");

// Generate the raw data in one go
while (numberOfRecords--) {
    timestamp += (1000 * 3600 * rand(48)); // increase the timestamp randomly by a maximun of 48 hours
    cities.forEach(function (cityName) {
        data.push({ city: cityName, ts: timestamp, population: generatePopulation() })
    })
}

// insert the data into de database
data.forEach(function(record){db.cities.insert(record)});