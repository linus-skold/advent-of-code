const fs = require("node:fs");

const file = fs.readFileSync("input.txt", "utf8");
const lines = file.split("\n");

function checkIfIncreasing(values) {
  for(let i = 1; i < values.length; i++) {
    if(values[i] < values[i - 1]) {
        return false;
    } else if(values[i] === values[i - 1]) {
      return false;
    }
  }
  return true;
}

function checkIfDecreasing(values) {
  for(let i = 1; i < values.length; i++) {
    if(values[i] > values[i - 1]) {
        return false;
    } else if(values[i] === values[i - 1]) {
      return false;
    }
  }
  return true;
}


function checkIfSafe(report) { 
  const values = report.split(' ').map(Number);

  
  const increase = checkIfIncreasing(values);
  const decrease = checkIfDecreasing(values);
  const safe = increase === true || decrease === true;
  if(!safe) {
    return false;
  }

  for(let i = 0; i < values.length - 1; i++) {
    const diff = Math.abs(values[i + 1] - values[i]);

    if(diff == 0 || diff > 3) {
      return false;
    }
  }

  return true;
}


const nofSafeReports = lines.filter(checkIfSafe).length;

console.log(nofSafeReports);