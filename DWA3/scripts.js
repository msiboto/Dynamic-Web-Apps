// @ts-check

// EMPLOYEE-VARIABLES
/**
 * employee name
 * @type {string} firstname
 */
// eslint-disable-next-line no-unused-vars
const firstname = "Nwabisa";

/**
 * employee surname
 * @type {string} surname
 */
// eslint-disable-next-line no-unused-vars
const surname = "Gabe";

/**
 * employee role
 * @type {string} role
 */
// eslint-disable-next-line no-unused-vars
const role = "CEO";

/*
Using typedef (type definition) allows you to create your own custom
types, most often used in creating objects
*/

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";
const sarahNumber = "13";
const sarahStreet = "William Close";
const sarahPostal = "0310";

/**
 * @typedef {object} sarah - an object containing sarah's details
 * @prop {string} name - a string property of sarah's object
 * @prop {string | number} balance - a number/string property of sarah's object
 * @prop {number} accessId - a string property of sarah's object
 * @prop {number} age -  a number property of sarah's object
 */

const sarah = {
  name: sarahName.trim() + sarahSurname,
  balance: sarahBalance,
  access_Id: "6b279ae5-5657-4240-80e9-23f6b635f7a8",
  age: 62,
  /**
   * @typedef {object} address - an object containing address
   * @prop {number} number - a number property of address object
   * @prop {string} street - a string property of addresss object
   * @prop {number} postalCode -  a number property of address object
   */
  address: {
    number: sarahNumber,
    street: sarahStreet,
    postalCode: sarahPostal,
  },
};
console.log(sarah.address, sarah.address.postalCode);
