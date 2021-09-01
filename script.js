const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ]


// Maak een array van alle superhelden namen
let superNames = superheroes.map((superhero) => superhero.name)
console.log("Superheroes are:", superNames)


// Maak een array van alle "lichte" superhelden (< 190 pounds)
let lightWeightHeroes = superheroes.filter((superhero) => superhero.weight < 190)
console.log("The light weight heroes are:", lightWeightHeroes)


// Maak een array met de namen van de superhelden die 200 pounds wegen
let namesHeavyWeightHeroes = superheroes.filter((superhero) => superhero.weight > 200).map((superhero => superhero.name))
console.log("The heavy weight heroes are:", namesHeavyWeightHeroes)


//Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad
let comics = superheroes.map((superhero) => superhero.first_appearance)
console.log("The list of comics with heroes' first appearances:", comics)


//Maak een array met alle superhelden van DC Comics. Is dat gelukt? Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.
let dcComicsHeroes = superheroes.filter((superhero) => superhero.publisher === "DC Comics")
console.log("DC Comics heroes are:", dcComicsHeroes)

let marvelComicsHeroes = superheroes.filter((superhero) => superhero.publisher === "Marvel Comics")
console.log("Marvel Comics heroes are:", marvelComicsHeroes)


//Tel het gewicht van alle superhelden van DC Comics bij elkaar op. Let op! Conditionals to the rescue! Het gewicht dat je hier ziet, van welk datatype is dat? Een nummer? Of een string? Oh ja, en hebben alle superhelden wel een gewicht?
const dcWeights = dcComicsHeroes.map((superhero) => superhero.weight)
//console.log(weights)
const newDCWeights = dcWeights.filter((weight) => weight !== "unknown").map((weight) => Number(weight))
//console.log(newWeights)
const sumOfAllDCWeights = newDCWeights.reduce((currentTotal, weight) => currentTotal + weight)
console.log("The total weight of all DC Comics superheroes is:", sumOfAllDCWeights) 

//Doe hetzelfde met alle superhelden van Marvel Comics
const marvelWeights = marvelComicsHeroes.map((superhero) => superhero.weight)
//console.log(weights)
const newMarvelWeights = marvelWeights.filter((weight) => weight !== "unknown").map((weight) => Number(weight))
//console.log(newWeights)
const sumOfAllMarvelWeights = newMarvelWeights.reduce((currentTotal, weight) => currentTotal + weight)
console.log("The total weight of all Marvel Comics superheroes is:", sumOfAllMarvelWeights) 


//Bonus: zoek de zwaarste superheld!
const weights = superheroes.map((superhero) => superhero.weight).filter((weight) => weight !== "unknown");
//console.log(weights)
const weightNumbers = weights.map((weight) => Number(weight));
//console.log(weightNumbers)
const mostHeavyHero = weightNumbers.reduce((currentHeavyWeight, previousHeavyWeight) => (currentHeavyWeight > previousHeavyWeight) ? currentHeavyWeight : previousHeavyWeight)
console.log("The heaviest hero weights", mostHeavyHero, "pounds")

