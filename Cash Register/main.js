function checkCashRegister(price, cash, cid) {
  var amount = cash - price;
  var cid2 = cid.slice().reverse();
  let arrChange = [];
  let dividers = {
    "PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25,
    "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100
  };
  for (var currency of cid2) {
    let coin_bill = dividers[currency[0]];
    let qty = Math.min(Math.trunc(amount / coin_bill), currency[1] / coin_bill);
    let curAmount = qty * coin_bill;
    amount -= curAmount;
    amount = amount.toFixed(2);
    currency[1] -= curAmount;
    arrChange.push([currency[0], curAmount]);
  }
  if (amount > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (cid2.reduce((acum, mySum) => { return acum += mySum[1] }, 0) == 0) {
    return { status: "CLOSED", change: arrChange.reverse() };
  } else {
    return { status: "OPEN", change: arrChange.filter(item => item[1] > 0) };
  }
}