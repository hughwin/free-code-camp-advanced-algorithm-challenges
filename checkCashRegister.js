var denominations = [
  {name: "ONE HUNDRED", value: 100.00},
  {name: "TWENTY", value: 20.00},
  {name: "TEN", value: 10.00},
  {name: "FIVE", value: 5.00},
  {name: "ONE", value: 1.00},
  {name: "QUARTER", value: 0.25},
  {name: "DIME", value: 0.10},
  {name: "NICKEL", value: 0.05},
  {name: "PENNY", value: 0.01},
  ];


function checkCashRegister(price, cash, cid) {
  // work how out how much change the customer requires
  var change = cash - price;
  // work out how much cash is left in the drawer
  var totalCid = cid.reduce(function(a,b){
    return a + b[1];
  },0.00);
  console.log(totalCid);
  if (totalCid < change){
    return "Insufficient Funds";
  }
  else if (totalCid === change){
    return "Closed";
  }
  cid = cid.reverse();
  
  var result = denominations.reduce(function(a,b,index){
    if (change >= b.value){
      var currentValue = 0.0;
      while (change >= b.value && cid[index][1] >= b.value){
        currentValue += b.value;
        change -= b.value;
        change = Math.round(change*100) / 100;
        cid[index][1] -= b.value;
      }
      a.push([b.name, currentValue]);
      return a;
            }
            else {
        return a;
            }
  }, []);
  return result.length > 0 && change === 0? result: "Insufficient Funds";
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
