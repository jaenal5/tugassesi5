function reverse(str) {
  return str.split('').reverse().join('');
}

function toUpperCase(str) {
  return str.toUpperCase();
}

module.exports = {
  reverse,
  toUpperCase
};