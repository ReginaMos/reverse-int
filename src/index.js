module.exports = function reverse (n) {
  let result = String(Math.abs(n));
  return Number(result.split('').reverse().join(''))
}
