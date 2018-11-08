const matrixReshape = function(nums, r, c) {
  let elements = 0;
  nums.forEach((row) => elements += row.length);
  if(elements !== r * c) return nums;

  let reshaped = [];
  let insertIdx = 0;
  for(let i = 0; i < r; i++) reshaped.push([]);
  nums.forEach((row) => {
    row.forEach((column) => {
      reshaped[insertIdx].push(column);
      if(reshaped[insertIdx].length >= c) insertIdx++;
    });
  });
  return reshaped;
};
