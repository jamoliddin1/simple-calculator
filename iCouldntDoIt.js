let screenNumb = document.querySelector('.screen-number');
/*const calcRow = document.querySelectorAll('.calculation-item__row');
const calcBtns = document.querySelectorAll('.calculation-item'); */
const calcNumb = document.querySelectorAll('.numbers');
const calcCharacter = document.querySelectorAll('.calc');


// const numberHandler = item => {

// }


for (let i = 0; i < calcNumb.length; i++) {
  let changeToNumb;
  console.log(Boolean(changeToNumb))
  calcNumb[i].addEventListener('click', item => {
    if (!changeToNumb) {
      changeToNumb = parseInt(screenNumb.textContent = `${item.target.innerText}`);
      console.log(Boolean(changeToNumb))
      console.log(changeToNumb);
      // changeToNumb = true;
    }
    changeToNumb = false;
    console.log(Boolean(changeToNumb));

  });
  // console.log(calcNumb[i])
}


const calcCharacterFunc = singleCharac => {
  screenNumb.innerHTML = singleCharac.target.innerText
  // console.log(characterToNumb);

}


for (let i = 0; i < calcCharacter.length; i++) {
  calcCharacter[i].addEventListener('click', calcCharacterFunc)
}


const calculation = () => {

}


// const calcItems = document.querySelector('.calculation-items').addEventListener('click', e => {
//   if (e.target.className === '.numbers' || e.target.className === '.calc') {
//     console.log('we are in here')
//   }
// })