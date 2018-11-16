const findDisappearedNumbers = function(nums) {
  let results = [];
  let numsSet = new Set();
  nums.forEach((number) => {numsSet.add(number)});
  for(let i = 1; i < nums.length + 1; i++) {
    if(!numsSet.has(i)) results.push(i);
  };
  return results;
};
