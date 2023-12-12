let fs = require("fs");

console.log("editing");

fs.appendFile("file.txt", "\nadded", "utf-8", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("edited");
});
