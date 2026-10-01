let salaries = {
  John: 100,
  Bill: 300,
  Mike: 250
};

let sum = 0;
let count = 0;

for (let key in salaries) {
  sum += salaries[key];
  count++;
}

let average = count > 0 ? sum / count : 0;
console.log(average);
