const distributeCandies = function(candies) {
  let kinds = new Set();
  candies.forEach((candy) => kinds.add(candy));
  return candies.length > kinds.size * 2 ? kinds.size : candies.length / 2;
};
