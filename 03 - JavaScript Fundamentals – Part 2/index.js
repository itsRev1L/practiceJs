// Functions - page 14
// const iran = describeCountry("Iran", 80000000, "Tehran");
// const afghan = describeCountry("afghan", 8000, "idk");
// const finland = describeCountry("finland", 8200000, "idk");
// function describeCountry(country, population, capitalCity) {
//   console.log(
//     `${country} has ${population} people and its capital city is ${capitalCity}`
//   );
// }

//LECTURE: Function Declarations vs. Expressions

//const
// const iran = 80000000;
// const china = 1441000000;
// const percentageDeclare01_Iran = percentageOfWorld1(iran);
// const percentageDeclare01_China = percentageOfWorld1(china);
// //function declaration
// console.log(
//   percentageDeclare01_Iran.toFixed(1),
//   percentageDeclare01_China.toFixed(1)
// );
// function percentageOfWorld1(population) {
//   return (population / 7900000000) * 100;
// }
// //function expression
// const percentageDeclare02_Iran = percentageOfWorld1(iran);
// const percentageDeclare02_China = percentageOfWorld1(china);
// console.log(
//   percentageDeclare02_Iran.toFixed(1),
//   percentageDeclare02_China.toFixed(1)
// );
// const percentageOfWorld2 = function (population) {
//   return (population / 7900000000) * 100;
// };
// //arrow function
// const percentageDeclare03_Iran = percentageOfWorld1(iran);
// const percentageDeclare03_China = percentageOfWorld1(china);
// const percentageOfWorld3 = (population) => (population / 7900000000) * 100;
// console.log(
//   percentageDeclare03_Iran.toFixed(1),
//   percentageDeclare03_China.toFixed(1)
// );
//LECTURE: Functions Calling Other Functions page 15
// function describePopulation(country, population2) {
//   return console.log(
//     `${country} has ${population2} people which is about ${percentageOfWorld1(
//       population2
//     )} of the world`
//   );
// }

// console.log(describePopulation("china", 1441000000));
//LECTURE: Introduction to Arrays
// const population = [85000000, 15000000, 40000000, 65000000];
// const percentage = [
//   percentageOfWorld1_forArrays(population[0]),
//   percentageOfWorld1_forArrays(population[1]),
//   percentageOfWorld1_forArrays(population[2]),
//   percentageOfWorld1_forArrays(population[3]),
// ];
// console.log(percentage);
// function percentageOfWorld1_forArrays(population) {
//   return (population / 7900000000) * 100;
// }
//the mini challenge
// const jesusTest = {
//   friends: ["michel", "jesus", "wolverine"],
// };

// console.log(jesusTest.friends[0]);

// LECTURE: Introduction to Objects - page 16 && LECTURE: Dot vs. Bracket Notation
// const myCountry = {
//   country: "Iran",
//   capital: "Tehran",
//   language: "persian",
//   population: "85 millions",
//   neighbors: 4,
// };
// myCountry.population = "87 millions";
// myCountry["population"] = " ";
// console.log(`${myCountry.country} has ${myCountry["population"]} ${myCountry.language}-speaking people, ${myCountry["neighbors"]} neighboring countries
// and a capital called ${myCountry.capital}.`);
//challenge
// const inFo1 = {
//   firstName: "john",
//   lastName: "jesus",
//   language: "english",
//   hasDriverLicense: true,
//   fun: function () {
//     return `my name is ${this.firstName}, i speak ${this.language} and  ${
//       this.hasDriverLicense
//         ? "i have a driverLicense"
//         : "i don't have a driverLicense"
//     }`;
//   },
// };

// console.log(info1.fun());

//LECTURE: Iteration: The for Loop - page 16 && 17
// for (let i = 0; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }
// LECTURE: Looping Arrays, Breaking and Continuing - page 17
// function percentageOfWorld1(population) {
//   return (population / 7900000000) * 100;
// }

// const population = [85000000, 15000000, 40000000, 65000000];
// const population2 = [];

// for (let i = 0; i < population.length; i++) {
//   population2.push(percentageOfWorld1(population[i]));
// }
// console.log(population2);
//for loop challenge
// const listOfNeighbors = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];
// for (let i = 0; i < listOfNeighbors.length; i++) {
//   for (let y = 0; y < listOfNeighbors.length; y++) {
//     console.log(`neighbors: ${listOfNeighbors[i][y]}`);
//   }
// }
// let dice1 = Math.trunc(Math.random() * 6 + 1);

// while (dice1 !== 6) {
//   console.log(dice1);
//   dice1 = Math.trunc(Math.random() * 6 + 1);
// }
