const path = require("path");

let fileLocation = "document/d/users/index.js";

console.log("dirname", path.dirname(fileLocation));
console.log("extname", path.extname(fileLocation));
console.log("basename", path.basename(fileLocation));

// const a = path.format(fileLocation);

console.log(path.format({ dir: "document/d/users", base: "app.js" }));

let parseDoc = path.parse(fileLocation);

console.log(parseDoc.dir);
