const climbStairs = function(n) {
  if(n === 1) return 1;
  let fib = [1,2];
  while(fib.length < n) {
    let penultimate = fib[fib.length - 2];
    let ultimate = fib[fib.length - 1];
    fib.push(penultimate + ultimate);
  };
  return fib[fib.length - 1];
};
