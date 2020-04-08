// Write a function called powerCalculator() that takes two parameters, an integer 
// as a base, and another integer as an exponent. The function returns the value of 
// the base raised to the power of the exponent. Use only exponents greater than or 
// equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100 

// powerCalculator(10,-2) should return "exponent should be >= 0"

const powerCalculator = (int, exp) => {
  // Invalid case
  if ( exp < 0 ) return "exponent should be >= 0"

  // All exponents of 0 return 1
  if ( exp === 0 ) return 1;

  // Base case
  if ( exp === 1 ) return int;

  // General case
  return int * powerCalculator(int, --exp);
};

module.exports = {
  powerCalculator
};