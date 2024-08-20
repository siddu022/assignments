// checking async task and how it works & affects the output
const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

let count = 0;
for (let i = 0; i < 1e7; ++i) {
  count += i;
}

console.log("count: ", count);
//count is printed first and then the data from the file is printed
