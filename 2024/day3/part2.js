const fs = require("node:fs");
const file = fs.readFileSync("input.txt", "utf8");

const res = file
  .split("do()")
  .map((v) => v.split("don't()")[0])
  .map((s) => s.match(/mul\((\d+),(\d+)\)/g))
  .flat()
  .map((m) => m.match(/\d+/g).map(Number))
  .map(([a, b]) => a * b)
  .reduce((a, b) => a + b, 0);

console.log(res);
  