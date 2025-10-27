function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function isEven(num) {
  return num % 2 === 0;
}

module.exports = {
  randomNumber,
  isEven
};