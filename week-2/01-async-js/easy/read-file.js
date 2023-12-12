let fs = require("fs");

fs.readFile("file.txt", "utf-8", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log(data);
});

for (let i = 0; i < 10000000; i++) {}
console.log("myyyyyyyy god");
