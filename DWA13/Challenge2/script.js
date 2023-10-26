/* eslint-disable no-console */
/* eslint-disable radix */
/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// console log each product name
products.forEach((product) => console.log(product.product));

// filtered based on the length of the product names
const filteredArray = products.filter((product) => product.product.length > 5);
console.log(filteredArray);

// Using filter and map to change string to number and remove products with no price
const stringPriceArray = products.filter(
  // eslint-disable-next-line no-restricted-globals
  (product) => typeof product.price !== "string" && !isNaN(product.price)
);
const stringToIntArray = stringPriceArray.map((product) =>
  parseInt(product.price)
);

// Using reducer to get the total sum of stringToIntArray
const sum = stringToIntArray.reduce(
  (accumulator, currentValue) => (accumulator += currentValue),
);
console.log(sum);

// Using reduce to concatenate product names into a single string
const productNamesString = products.reduce(
  (accumulator, currentValue) => (accumulator += `${currentValue.product}`)
  );
console.log(productNamesString);

// filtering array to remove incorrect price values
const intArray = products.filter(
  (product) => product.price.toString().trim() !== ""
);
// Using reducer to determine product with highest price
// eslint-disable-next-line prefer-const
let mostExpensive = intArray.reduce((accumulator, currentValue) => {
  const accumulatorPrice = parseInt(accumulator.price) || 0;
  const currentValuePrice = parseInt(currentValue.price) || 0;
  return accumulatorPrice > currentValuePrice ? accumulator : currentValue;
});

// Using reducer to deermine the least price
// eslint-disable-next-line prefer-const
let leastExpensive = intArray.reduce((accumulator, currentValue) => {
  const accumulatorPrice = parseInt(accumulator.price) || 0;
  const currentValuePrice = parseInt(currentValue.price) || 0;
  return accumulatorPrice < currentValuePrice ? accumulator : currentValue;
});
console.log(
  `Highest: ${mostExpensive.product}. Lowest: ${leastExpensive.product}`
);

// Recreating array with new "name" and "cost" keys
const newProductsArray = products.reduce((accumulator, currentValue) => {
  return [
    ...accumulator,
    { name: currentValue.product, cost: currentValue.price },
  ];
}, []);

console.log(newProductsArray);

