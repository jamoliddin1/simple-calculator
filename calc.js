let total = 0;
let userInput = '0';
let prevOperator = null;

const screenNumber = document.querySelector('.screen-number');


document.querySelector('.calculation-items').addEventListener('click', e => {
  // console.log(e.target.innerText)
  btnClick(e.target.innerText);
});

const btnClick = val => {
  if (isNaN(parseInt(val))) {
    handleSymbol(val);
  } else {
    handleNumber(val);
  }
  renderResult();
}

const handleNumber = valNumb => {
  if (userInput === '0') {
    userInput = valNumb;
  } else {
    userInput += valNumb;
  }
}

const handleSymbol = valSymbol => {
  switch (valSymbol) {
    case 'C':
      prevOperator = null;
      userInput = '0';
      total = 0;
      break;
    case '=':
      if (prevOperator === null) {
        return;
      }
      currOperator(parseInt(userInput));
      prevOperator = null;
      userInput = '' + total;
      total = 0;
      break;
    case '←':
      if (userInput.length === 1) {
        userInput = '0';
      } else {
        userInput = userInput.substring(0, userInput.length - 1);
      }
      break;
    default:
      handleMath(valSymbol);
      break;
  }
}

const handleMath = mathSymbol => {
  const userInpToNum = parseInt(userInput);
  console.log(userInpToNum);
  console.log(total)

  if (total === 0) {
    total = userInpToNum;
    console.log(total)
  } else {
    console.log(currOperator(userInpToNum));
  }
  prevOperator = mathSymbol;
  console.log(prevOperator);

  userInput = '0';
}

const currOperator = secMath => {
  if (prevOperator === '+') {
    total += secMath;
  } else if (prevOperator === '-') {
    total -= secMath;
  } else if (prevOperator === '×') {
    total *= secMath;
  } else {
    total /= secMath;
  }
}

const renderResult = () => {
  screenNumber.innerHTML = userInput;
}