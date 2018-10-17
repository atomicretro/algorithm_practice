const missingNumber = function(nums) {
  let supposedSum = 0;
  for(let n = 0; n < nums.length; n++) supposedSum += (n + 1);
  let actualSum = nums.reduce((acc, val) => acc + val);
  return supposedSum - actualSum;
};
