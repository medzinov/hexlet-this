import readlineSync from 'readline-sync';

const calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = Number(readlineSync.question('первое число: '));
    this.b = Number(readlineSync.question('второе число: '));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

export default calculator;