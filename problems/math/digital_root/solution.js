const digitalRoot = function(num) {
  if(num < 10) return num;
  return addDigits(Math.floor(num / 10) + num % 10);
};
