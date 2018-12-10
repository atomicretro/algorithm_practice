const singleNumber = function(nums) {
  let counter = {};
  nums.forEach((n) => {
    if(counter[n]) counter[n]++;
    else counter[n] = 1;
  });
  return nums.filter((n) => counter[n] === 1);
};
