let fs = require("fs");

fs.readFile("file.txt", "utf-8", function (err, data) {
  let newData = data.replace(/\s+/g, " ");
  fs.writeFile("file.txt", newData, "utf-8", function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("done");
  });
});

////////////with error handeling
// const fs = require('fs');

// fs.readFile('a.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading the file:', err);
//     return;
//   }

//   const cleanedContent = cleanFileContent(data);

//   fs.writeFile('a.txt', cleanedContent, 'utf8', (writeErr) => {
//     if (writeErr) {
//       console.error('Error writing to the file:', writeErr);
//       return;
//     }

//     console.log('File cleaned and updated successfully.' + cleanedContent);
//   });
// });

// function cleanFileContent(content) {
//   return content.replace(/\s+/g, ' ');
// }
