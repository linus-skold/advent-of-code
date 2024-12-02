const fs = require("node:fs");

const file = fs.readFileSync("input.txt", "utf8");
const lines = file.split("\n");

const checkStability = (compare, values) => {
  for (let i = 1; i < values.length; i++) {
    if (compare(values, i)) {
      return false;
    }
  }
  return true;
};

const checkDistance = (values) => {
  for (let i = 0; i < values.length - 1; i++) {
    const diff = Math.abs(values[i + 1] - values[i]);

    if (diff == 0 || diff > 3) {
      return false;
    }
  }
  return true;
};

function checkIfSafe(report) {
  const values = report.split(" ").map(Number);
  const isIncreasing = checkStability((values, i) => values[i] <= values[i - 1], values);
  const isDecreasing = checkStability((values, i) => values[i] >= values[i - 1], values);

  if ((isIncreasing || isDecreasing) && checkDistance(values)) {
    return true;
  }


  for (let i = 0; i < values.length; i++) {
    const newValues = values.filter((_, index) => index !== i);
    const newIncrease = checkStability((newValues, index) => newValues[index] <= newValues[index - 1], newValues);
    const newDecrease = checkStability((newValues, index) => newValues[index] >= newValues[index - 1], newValues);

    if ((newIncrease || newDecrease) && checkDistance(newValues)) {
      return true;
    }

  }
  return false;
}

const nofSafeReports = lines.filter((line, index) => {
  const result = checkIfSafe(line);
  return result;
}).length;

console.log(nofSafeReports);
