//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
  // get amount deposited
  const depositInput = document.getElementById('deposit-amount');
  const depositAmount = depositInput.value;
  // console.log(depositAmount);

  // connecting deposit
    const depositBox = document.getElementById('deposit-box');
    const previousDepositAmount = depositBox.innerText;

    const number1 = parseFloat(previousDepositAmount);
    const number2 = parseFloat(depositAmount);

    const newDepositAmount = number1 + number2;
    depositBox.innerText = newDepositAmount;

  // update acount balance
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalance = parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalance + number2;

  balanceTotal.innerText = newBalanceTotal;
  
  // clear the deposit input field
  depositInput.value = '';
})

// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function(){
  const withdrawInput = document.getElementById('withdraw-amount');
  const withdrawAmount = withdrawInput.value;
  const newWithdrawAmount = parseFloat(withdrawAmount);

  const withdrawTotal = document.getElementById('withdraw-total');
  const withdrawText = withdrawTotal.innerText;
  const newWithdrawText = parseFloat(withdrawText);

  const totalWithdraw = newWithdrawText + newWithdrawAmount;

  withdrawTotal.innerText = totalWithdraw;
  //update balance amount
  const totalBalance = document.getElementById('balance-total');
  const totalBalanceText = totalBalance.innerText;
  const newTotalBalance = parseFloat(totalBalanceText);

  const total = newTotalBalance - newWithdrawAmount;

  totalBalance.innerText = total;
  // clear the withdraw input field
  withdrawInput.value = '';
})