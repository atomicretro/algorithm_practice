const isMonotonic = function(A) {
  let difference = A[0] - A[A.length - 1];
  let direction =
    difference === 0 ? 'flat' : ( difference < 0 ? 'up' : 'down' );

  for(let i = 0; i < A.length - 1; i++) {
    switch(direction) {
      case 'up':
        if(A[i+1] < A[i]) return false;
        break;
      case 'down':
        if(A[i+1] > A[i]) return false;
        break;
      case 'flat':
        if(A[i+1] !== A[i]) return false;
        break;
    };
  };

  return true;
};
