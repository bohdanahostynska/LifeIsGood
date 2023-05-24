import burger_1 from "../assets/burgers/burger_1.png";
import burger_2 from "../assets/burgers/burger_2.png";
import burger_3 from "../assets/burgers/burger_3.png";

import pizza_1 from "../assets/pizza/pizza_1.png";
import pizza_2 from "../assets/pizza/pizza_2.png";
import pizza_3 from "../assets/pizza/pizza_3.png";

import salmon_1 from "../assets/menu/all_pic/salmon.svg";
import salmon_2 from "../assets/menu/all_pic/salmon.svg";
import salmon_3 from "../assets/menu/all_pic/salmon.svg";

import salad_1 from "../assets/salad/salad_1.png";
import salad_2 from "../assets/salad/salad_2.png";
import salad_3 from "../assets/salad/salad_3.png";

import donut_1 from "../assets/donut/donut_1.png";
import donut_2 from "../assets/donut/donut_2.png";
import donut_3 from "../assets/donut/donut_3.png";

import drink_1 from "../assets/drinks/drink_1.png";
import drink_2 from "../assets/drinks/drink_2.png";
import drink_3 from "../assets/drinks/drink_3.png";

const burgers = [
  {
    id: 1,
    title: "Burger Wanted",
    category: "burger",
    image: burger_1,
    text: "Take a bite and prepare for your mind to be blown away instantly!",
    price: "$29",
  },
  {
    id: 2,
    title: "Burger Wanted",
    category: "burger",
    image: burger_2,
    text: "Take a bite and prepare for your mind to be blown away instantly!",
    price: "$29",
  },
  {
    id: 3,
    title: "Burger Wanted",
    category: "burger",
    image: burger_3,
    text: "Take a bite and prepare for your mind to be blown away instantly!",
    price: "$29",
  },
];
const pizza = [
  {
    id: 11,
    title: "Grab some pizza!",
    category: "pizza",
    image: pizza_1,
    text: "A huge slice of pizza is gonna make your day!",
    price: "$56",
  },
  {
    id: 12,
    title: "Grab some pizza!",
    category: "pizza",
    image: pizza_2,
    text: "A huge slice of pizza is gonna make your day!",
    price: "$56",
  },
  {
    id: 13,
    title: "Grab some pizza!",
    category: "pizza",
    image: pizza_3,
    text: "A huge slice of pizza is gonna make your day!",
    price: "$56",
  },
];
const salmon = [
  {
    id: 21,
    title: "Hi, Salmon",
    category: "salmon",
    image: salmon_1,
    text: "Royal food at your service!Order our amazing salmon and feel like a king.",
    price: "$60",
  },
  {
    id: 22,
    title: "Hi, Salmon",
    category: "salmon",
    image: salmon_2,
    text: "Royal food at your service!Order our amazing salmon and feel like a king.",
    price: "$60",
  },
  {
    id: 23,
    title: "Hi, Salmon",
    category: "salmon",
    image: salmon_3,
    text: "Royal food at your service!Order our amazing salmon and feel like a king.",
    price: "$60",
  },
];
const salads = [
  {
    id: 31,
    title: "What's up,salad?",
    category: "salad",
    image: salad_1,
    text: "Royal food at your service!Order our amazing salad and feel like a king.",
    price: "$60",
  },
  {
    id: 32,
    title: "What's up,salad?",
    category: "salad",
    image: salad_2,
    text: "Royal food at your service!Order our amazing salad and feel like a king.",
    price: "$60",
  },
  {
    id: 33,
    title: "What's up,salad?",
    category: "salad",
    image: salad_3,
    text: "Royal food at your service!Order our amazing salad and feel like a king.",
    price: "$60",
  },
];
const donuts = [
  {
    id: 41,
    title: "How about a donut?",
    category: "donut",
    image: donut_1,
    text: "You don't have to be a cop to try a donut:)  Hurry up! They won't be waiting all day!",
    price: "$25",
  },
  {
    id: 42,
    title: "How about a donut?",
    category: "donut",
    image: donut_2,
    text: "You don't have to be a cop to try a donut:)  Hurry up! They won't be waiting all day!",
    price: "$25",
  },
  {
    id: 43,
    title: "How about a donut?",
    category: "donut",
    image: donut_3,
    text: "You don't have to be a cop to try a donut:)  Hurry up! They won't be waiting all day!",
    price: "$25",
  },
];

const drinks = [
  {
    id: 51,
    title: "Do you wanna chill?",
    category: "drink",
    image: drink_1,
    text: "Are you hot and exhausted? Then you are in the right place! Best cocktail ever here!",
    price: "$35",
  },
  {
    id: 52,
    title: "Do you wanna chill?",
    category: "drink",
    image: drink_2,
    text: "Are you hot and exhausted? Then you are in the right place! Best cocktail ever here!",
    price: "$35",
  },
  {
    id: 53,
    title: "Do you wanna chill?",
    category: "drink",
    image: drink_3,
    text: "Are you hot and exhausted? Then you are in the right place! Best cocktail ever here!",
    price: "$35",
  },
];

export const allFood = [
  ...burgers,
  ...pizza,
  ...salmon,
  ...salads,
  ...donuts,
  ...drinks,
];
