//strings and template literals page 6
// const description = `Portugal is in Europe, and its 11 million
// people speak portuguese`

// console.log(description);

// LECTURE: if else statements page 6
// let population = 80000000;
// let textForCountry;
// if (population >= 30000000) {
//   textForCountry = "Iran's population is above the average"
//   console.log(textForCountry);
// }else{
//   textForCountry = "Iran's population is below the average"
// }

// LECTURE: Type Conversion and Coercion page 6
// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// LECTURE: Equality Operators: == vs. === page 7

// const numNeighbors = prompt("'How many neighbor countries does your country have?'");

// if (Number(numNeighbors) === 1) {
//   console.log("only one");
// } else if(numNeighbors > 1){
//   console.log("more than one");
// }else{
//   console.log("no borders");
// }

// let iranPopulation = 80000000;
// const iranSupportsEnglish = true;
// const iranIsAnIsland = false;

// if (iranPopulation <= 50000000  &&  iranIsAnIsland === false && iranSupportsEnglish === true) {
//   console.log("this place is right for you");
// }else{
//   console.log("it does not match with your conditions");
// }

// //LECTURE: The switch Statement - page 8
// const switchKey = country;

// switch (key) {
//   case chinese:
//   case mandarin:
//     console.log("most number of native speakers");
//     break;
//   case spanish:
//     console.log("2nd place in number of native speakers");
//     break;
//   case english:
//     console.log("3rd place");
//     break;
//   case hindi:
//     console.log("4th");
//     break;
//   case arabic:
//     console.log("5th");
//     break;
//   default:
//     console.log("great language");
//     break;
// }

//LECTURE: The Conditional (Ternary) Operator - page 8
const countryPopulation = 80000000;
countryPopulation >= 33000000 ? console.log(`iran's population is above average`) : console.log(`iran's population is below average`);
const average = countryPopulation >= 33000000 ? "above" : "below";
