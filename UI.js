class UI extends Calculator {
  constructor() {
    super();
  }
}

const calc = new UI();

// writing numbers from keyboard
numberBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (String(calc.inp).length < 16) {
      if (String(calc.inp).indexOf('.') !== -1) {
        calc.inp = calc.inp + btn.innerText;
      } else {
        calc.inp = Number(calc.inp + btn.innerText);
      }
      calc.render();
    }
  })
});

// handle numbers and operators from keyboard 
document.addEventListener('keypress', e => {
  const numButton = e.key;
  if (!isNaN(Number(numButton)) && String(calc.inp).length < 16) {
    if (String(calc.inp).indexOf('.') !== -1) {
      calc.inp = calc.inp + numButton;
    } else {
      calc.inp = Number(calc.inp + numButton);
    }
  } else {
    switch (numButton) {
      case '.':
        if (String(calc.inp).indexOf('.') === -1) calc.inp = calc.inp + '.';
        break;
      case '+':
        calc.addition();
        break;
      case '-':
        calc.subtraction();
        break;
      case '*':
        calc.multiplication();
        break;
      case '/':
        calc.division();
        break;
      case '^':
        calc.power();
        break;
      case 'e':
        calc.inp = calc.eNum;
        break;
      case 'Enter':
      case '=':
        calc.equalTo();
        break;
      case 'c':
        calc.clean();
        break;
      default:
        break;
    }
  }
  calc.render();
})

// handle dot
dot.addEventListener('click', () => {
  if (String(calc.inp).indexOf('.') === -1) calc.inp = calc.inp + '.';
  calc.render();
});

// handle operator buttons
handleBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    const eId = e.target.id;
    switch (eId) {
      case 'del':
        calc.delete();
        break;
      case 'cleanAll':
        calc.clean();
        break;
      case 'plus':
        calc.addition();
        break;
      case 'minus':
        calc.subtraction();
        break;
      case 'multi':
        calc.multiplication();
        break;
      case 'divide':
        calc.division();
        break;
      case 'pow':
        calc.power();
        break;
      case 'sqrt':
        calc.squareRoot();
        break;
      case 'eNum':
        calc.inp = calc.eNum;
        calc.render();
        break;
      case 'piNum':
        calc.inp = calc.piNum;
        calc.render();
        break;
      case 'equal':
        calc.equalTo();
        break;
      case 'plusMinus':
        calc.plusMinus();
      default:
        break;
    }
  });
});


