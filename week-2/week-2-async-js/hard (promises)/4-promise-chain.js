/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t * 1000); // Delay for t seconds
  });
}

// Function that sequentially calls wait functions with t1, t2, t3 seconds respectively
function calculateTime(t1, t2, t3) {
  const start = Date.now();
  return wait(t1)
    .then(() => wait(t2))
    .then(() => wait(t3))
    .then(() => {
      return Date.now() - start; // Return the total time taken
    });
}

// To test manually
calculateTime(1, 2, 3).then((time) => {
  console.log(`Total time taken: ${time} ms`);
});

module.exports = calculateTime;
