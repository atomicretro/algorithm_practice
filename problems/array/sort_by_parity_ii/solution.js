const sortArrayByParityII = function(arr) {
  let sorted = [];
  let evenIdx = 0;
  let oddIdx = 1;
  arr.forEach((n) => {
    if(n % 2 === 0) {
      sorted[evenIdx] = n;
      evenIdx += 2;
    } else {
      sorted[oddIdx] = n;
      oddIdx += 2;
    };
  });
  return sorted;
};
