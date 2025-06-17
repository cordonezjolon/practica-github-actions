function validateNumbers(...args) {
  if (!args.every(n => typeof n === 'number' && !isNaN(n))) {
    throw new Error('All arguments must be valid numbers pleases');
  }
}

function add(a, b) {
  validateNumbers(a, b);
  return a + b;
}
function subtract(a, b) {
  validateNumbers(a, b);
  return a - b;
}
function multiply(a, b) {
  validateNumbers(a, b);
  return a * b;
}
function divide(a, b) {
  validateNumbers(a, b);
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}
function square(a) {
  validateNumbers(a);
  return a * a;
}

module.exports = { add, subtract, multiply, divide, square };
