const fs = require("fs");

// add following text in text1.txt file
//hello     world    my    name   is       raman
const data = fs.readFileSync("text1.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
});

let text = "";

for (let i = 0; i < data.length - 1; i++) {
  if (data[i] != " ") text += data[i];

  if (data[i + 1] == " " && data[i] != " ") text += " ";
}
if (data[data.length - 1] != " ") text += data[data.length - 1];

fs.writeFileSync("text1.txt", text, (err) => {
  if (err) console.log(err);
});
