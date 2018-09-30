const shortestToChar = function(str, char) {
  let charIndices = [];
  for(let i = 0; i < str.length; i++) {
    if(str[i] === char) charIndices.push(i);
  };

  let distances = [];
  for(let i = 0; i < str.length; i++) {
    let shortest = str.length;
    for(let j = 0; j < charIndices.length; j++) {
      let distance = Math.abs(i - charIndices[j]);
      if(distance < shortest) shortest = distance;
    };
    distances.push(shortest);
  };

  return distances;
};
