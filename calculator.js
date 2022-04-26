const numberBtns = document.querySelectorAll('.number');
const input = document.getElementById('input');
const answer = document.getElementById('answer');
const symbol = document.getElementById('symbol');
const handleBtns = document.querySelectorAll('.handleBtn');
const dot = document.querySelector('.dot');

class Calculator {
  constructor() {
    this.sym = null; // symbol
    this.inp = 0; // input
    this.ans = null; // answer
    this.eNum = 2.7182;
    this.piNum = 3.1415;
  }

  render() {
    input.innerText = this.inp;
    answer.innerText = this.ans;
    symbol.innerText = this.sym;
    if (String(answer.innerText).length > 20)  answer.style.fontSize = '15px';
  } 

  delete() {
    const number = Math.floor(this.inp/10);
    this.inp = number;
    this.render();
  }

  clean() {
    this.inp = 0;
    this.ans = null;
    this.sym = null;
    this.render();
  }

  operation(char, mainOperation) {
    if (this.ans && !this.sym && !this.inp) {
      this.sym = char;
    } else {
      this.inp = Number(this.inp);
      this.ans = this.ans ? mainOperation : this.inp;
      this.inp = 0;
      this.sym = char;
    }
  }

  addition() {
    const add = this.ans + this.inp;
    this.operation('+', add);
    this.render();
  }

  subtraction() {
    const minus = this.ans - this.inp;
    this.operation('-', minus);
    this.render();
  }

  multiplication() {
    const multi = this.ans * this.inp;
    this.operation('*', multi);
    this.render();
  }

  division() {
    const div = this.ans / this.inp;
    this.operation('/', div);
    this.render();
  }

  power() {
    const pow = this.ans ** this.inp;
    this.operation('^', pow);
    this.render();
  }

  squareRoot() {
    const root = Math.sqrt(this.inp);
    this.ans = root;
    this.inp = 0;
    this.sym = '√';
    this.render();
  }

  equalTo() {
    this.inp = Number(this.inp);
    switch (this.sym) {
      case '+':
        this.ans += this.inp;
        break;
      case '-':
        this.ans -= this.inp;
        break;
      case '*':
        this.ans *= this.inp;
        break;
      case '/':
        this.ans /= this.inp;
        break;
      case '^':
        this.ans = this.ans ** this.inp;
        break;
      default:
        this.ans = this.inp;
        break;
    }
    this.inp = 0;
    this.sym = null;
    this.render();
  }

  plusMinus() {
    this.inp = this.inp * -1;
    this.render();
  }
}
