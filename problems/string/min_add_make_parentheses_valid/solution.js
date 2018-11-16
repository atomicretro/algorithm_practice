const minAddToMakeValid = function(S) {
  let open = [];
  let completed = 0;
  for(let i = 0; i < S.length; i++) {
    if(S[i] === '(') {
      open.push(true);
    } else if(S[i] === ')' && open[0] === true) {
      open.pop();
      completed += 2;
    };
  };
  return S.length - completed;
};
