const fs = require("node:fs");

const file = fs.readFileSync("input.txt", "utf8");
const lines = file.split("\n");
const listA = [];
const listB = [];

lines.forEach((line) => {
  const [n1, n2] = line.split("  ");
  listA.push(parseInt(n1.trim()));
  listB.push(parseInt(n2.trim()));
});

listA.sort((a, b) => a - b);
listB.sort((a, b) => a - b);


let sum = 0;
listA.forEach((n) => {
  const count = listB.filter((x) => x === n).length;
  sum += n * count;
});

console.log(sum);