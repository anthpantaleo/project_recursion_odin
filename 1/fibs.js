const fibs = (n) => {
  const array = [0, 1];
  if (n <= 0) return "Enter a valid number of arguments";
  if (n === 1) return [0];
  if (n === 2) return array;
  for (let i = 2; i < n; i++) {
    array.push(array[array.length - 2] + array[array.length - 1]);
  }
  return array;
};

console.log(fibs(-2));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));
