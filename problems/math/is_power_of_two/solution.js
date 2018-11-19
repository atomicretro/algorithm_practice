const isPowerOfTwo = function(n) {
  let power = 1;
  while(power <= n) {
    if(power === n) return true;
    power *= 2;
  };
  return false;
};
