let fs = require("fs");
console.log("writing");

fs.writeFile("file.txt", "heheheh", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("done");
});
