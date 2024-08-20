// create a counter in js
// it should go up as time goes by in intervals of 1 second

let count = 0;

function counter() {
  ++count;
  console.log(count);
}

const increment = setInterval(counter, 1000);

//additional
setTimeout(() => {
  clearInterval(increment);
}, 11000); // stops logging after 10 sec
