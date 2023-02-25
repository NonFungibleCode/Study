const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  // operator를 기준으로 조건을 분기
  if (operator === '+') {
    result = Number(n1) + Number(n2);
  } else if (operator === '-') {
    result = Number(n1) - Number(n2);
  } else if (operator === '*') {
    result = Number(n1) * Number(n2);
  } else if (operator === '/') {
    result = Number(n1) / Number(n2);
  }
  console.log(result);
  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.1
      // firstOperend에 있는 숫자를 내가 지금 누른 버튼의 숫자로 바꾸고 싶다.
      // 두번째 숫자를 입력하려면? 조건이 필요하다.
      // 만약에, 첫번째 칸에 0이 아닌 다른 숫자가 들어 있으면, -> 두번째 숫자 입력
      // 그렇지 않으면(첫번째 칸에 0이 있으면) -> 첫번째 숫자 입력
      if (firstOperend.textContent === '0') {
        firstOperend.textContent = buttonContent;
      } else {
        secondOperend.textContent = buttonContent;
      }
      console.log('숫자 ' + buttonContent + ' 버튼');
    }

    if (action === 'operator') {
      operator.textContent = buttonContent;
      console.log('연산자 ' + buttonContent + ' 버튼');
    }

    if (action === 'decimal') {
      // console.log('소수점 버튼');
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
      firstOperend.textContent = '0';
      operator.textContent = '+';
      secondOperend.textContent = '0';
      calculatedResult.textContent = '0';
    }

    if (action === 'calculate') {
      console.log('계산 버튼');
      calculatedResult.textContent = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent)
    }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.
  // Operator 에서 
  // previousKey = 'operator' 로 넣는이유 한번더 설명해주실수 있을까요??
  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      // 직전에 operator를 눌렀을 때, 새로운 숫자 입력
      if (display.textContent === '0' || previousKey === 'operator') {
        display.textContent = buttonContent;
      } else {
        display.textContent = display.textContent + buttonContent;
      }
      previousKey = 'number';
    }
    if (action === 'operator') {
      operatorForAdvanced = buttonContent;
      firstNum = display.textContent;
      console.log(firstNum, operatorForAdvanced);
      // 방금 연산자 버튼을 눌렀으면, 화면에 새로운 숫자가 나오도록 해야함.
      previousKey = 'operator';
    }
    if (action === 'decimal') {}
    if (action === 'clear') {
      display.textContent = '0';
      firstNum = 0;
      operatorForAdvanced = undefined;
      previousNum = 0;
      previousKey = 'clear';
    }
    if (action === 'calculate') {
      previousNum = display.textContent;
      display.textContent = calculate(firstNum, operatorForAdvanced, previousNum)
      previousKey = 'calculator';
    }
  }

});