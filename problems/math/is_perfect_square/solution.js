const isPerfectSquare = function(num) {
  if(num <= 0) return false;
  for(let i = 1; i <= num; i++) {
    let square = i * i;
    if(square === num) return true;
    if(square > num) return false;
  };
};
