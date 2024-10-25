
function lineLength(string, maxLength) {
  if (string.length <= maxLength) { return true; }
  return false;
}
console.log(lineLength('проверяемая строка', 20)); // true
console.log(lineLength('проверяемая строка', 18)); // true
console.log(lineLength('проверяемая строка', 10)); // false


function checkingForPalindrome(string) {
  let cleanString = string.toLowerCase();
  if (cleanString.slice(0, Math.ceil(cleanString.length / 2)) === cleanString.slice(-Math.ceil(cleanString.length / 2)).split('').reverse().join('')) {
    return true;
  }
  return false;
}
console.log(checkingForPalindrome('топот')); // true
console.log(checkingForPalindrome('ДовОд')); // true
console.log(checkingForPalindrome('Кекс'));  // false
