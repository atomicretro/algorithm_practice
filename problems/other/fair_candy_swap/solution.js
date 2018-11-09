const fairCandySwap = function(A, B) {
  let ans;
  let aTotal = A.reduce(getSum);
  let bTotal = B.reduce(getSum);
  let mid = (aTotal + bTotal) / 2;
  let interm = new Set();
  A.forEach((aCandy) => interm.add(Math.abs(aTotal - aCandy)))
  B.forEach((bCandy) => {
    if(interm.has(mid - bCandy)) ans = [aTotal - (mid - bCandy), bCandy];
  });
  return ans;
};

const getSum = (a, b) => a + b;
