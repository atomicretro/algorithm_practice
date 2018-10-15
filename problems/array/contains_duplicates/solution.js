const containsDuplicates = function(nums) {
  let uniques = {};
  for(let i = 0; i < nums.length; i++) {
    if(uniques[nums[i]]) return true;
    uniques[nums[i]] = true;
  };

  return false;
};
