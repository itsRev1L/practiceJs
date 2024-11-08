"use strict";

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  Test: function (main, sec) {
    return [this.categories[main], this.categories[sec]];
  },
};
//destructing arrays
// let [x, y] = restaurant.mainMenu;

// console.log(x, y);

// [x, y] = [y, x];
// console.log(x, y);

// console.log(restaurant.Test(0, 2));
// console.log();

let { openingHours: A } = restaurant;
console.log(A);

let a = 202;
let b = 110;
const obj = { a: 120, b: 20, c: 300 };

({ a, b } = obj);

console.log(a, b);
