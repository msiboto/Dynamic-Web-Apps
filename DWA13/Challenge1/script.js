/* eslint-disable no-console */
const provinces = [
    "Western Cape",
    "Gauteng",
    "Northern Cape",
    "Eastern Cape",
    "KwaZulu-Natal",
    "Free State",
  ];
  const names = [
    "Ashwin",
    "Sibongile",
    "Jan-Hendrik",
    "Sifso",
    "Shailen",
    "Frikkie",
  ];
  
  // console log name
  names.forEach((name) => console.log(name));
  
  // console log name and province
  names.forEach((name) => {
    console.log(`${name} (${provinces[names.indexOf(name)]})`);
  });
  
  // map and uppercase
  const upperCaseProvinces = provinces.map((province) => province.toUpperCase());
  console.log(upperCaseProvinces);
  
  // map and length
  const nameLengths = names.map((name) => name.length);
  console.log(nameLengths);
  
  // alphabetically sorted provinces
  const sortedProvinces = provinces.toSorted();
  console.log(sortedProvinces);
  
  // Use filter to remove all provinces that have the word Cape in them.
  // After filtering the array, return the amount of provinces left.
  // The final value should be 3
  
  const filteredArray = provinces.filter((province) => province.includes("Cape"));
  console.log(`${filteredArray} ${filteredArray.length}`);
  
  // Map and boolean, true if name includes "S"
  const booleanArray = names.map(
    (name) => name.includes("S") || name.includes("s")
  );
  console.log(booleanArray)
// Create and object with a layout -> name:province using reduce

const nameProvinceObj = names.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = provinces[names.indexOf(currentValue)];
    return accumulator}, {});  
  console.log(nameProvinceObj)