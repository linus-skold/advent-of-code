const fs = require("node:fs");

const file = fs.readFileSync("input.txt", "utf8");

const mulregex = /(mul\(\d+,\d+\))/g

const matches = file.match(mulregex);


const out = matches.map((match) => { 
  const digits = match.match(/\d+/g);
  return parseInt(digits[0]) * parseInt(digits[1]);
})

console.log(out.reduce((a, b) => a + b, 0));


