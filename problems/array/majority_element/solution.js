const majorityElement = function(nums) {
  let seen = {};
  for(let i = 0; i < nums.length; i++) {
    if(seen[nums[i]]) seen[nums[i]]++;
    else seen[nums[i]] = 1;

    if(seen[nums[i]] > nums.length / 2) return nums[i];
  };
  for(el in seen) {
    if(seen[el] > nums.length / 2) return parseInt(el);
  };
};
