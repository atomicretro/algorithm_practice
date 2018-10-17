const lemonadeChange = function(bills) {
  let hand = { 5: 0, 10: 0 };
  for(let i = 0; i < bills.length; i++) {
    switch(bills[i]) {
      case 5:
        hand[5]++;
        break;
      case 10:
        if(hand[5] > 0) hand[5]--;
        else return false; 
        hand[10]++;
        break;
      case 20:
        if(hand[5] > 0 && hand[10] > 0) {
          hand[5]--;
          hand[10]--;
        } else if(hand[5] >= 3) {
          hand[5] -= 3;
        } else {
          return false;
        };
        break;
    };
  };
  return true;
};
