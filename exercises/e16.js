import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  const { asteroids } = data;
  const discoveryYears = asteroids.map(asteroid => asteroid.discoveryYear); 
  let compare = 0;
  let greatestYear = undefined;

  discoveryYears.reduce((acc, year) => {
    year in acc ? acc[year]++ : acc[year] = 1;
    if (acc[year] > compare) {
      compare = acc[year];
      greatestYear = year;
    }
    return acc;
  }, {})

  return greatestYear;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
