const isHappy = function(n) {
  let seen = {};
  while(!seen[n]) {
    seen[n] = true;
    n = squareTheDigits(n)
    if(n === 1) return true;
  };
  return false;
};

const squareTheDigits = function(n) {
  if(Math.floor(n / 10) === 0) return Math.pow(n, 2);
  return Math.pow(n % 10, 2) + squareTheDigits(Math.floor(n / 10));
};
