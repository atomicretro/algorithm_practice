const rotatedStrings = function(A, B) {
  if(A.length !== B.length) return false;
  if(A === B) return true;
  let shifted = A;
  for(let i = 0; i < shifted.length; i++) {
    shifted = shifted.slice(1) + shifted.slice(0,1);
    if(shifted === B) return true;
  };
  return false;
};
