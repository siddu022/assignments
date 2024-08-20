const fs = require("fs");

const data = "writing something here something here something here ";

fs.writeFile("writea.txt", data, "urf-8", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("written successfully");
});
