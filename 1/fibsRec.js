const fibsRec = (n, a = [0, 1]) => {
  if (a.length >= n) return a;
  return fibsRec(n, [...a, a[a.length - 2] + a[a.length - 1]]);
};

console.log(fibsRec(2));
console.log(fibsRec(8));
