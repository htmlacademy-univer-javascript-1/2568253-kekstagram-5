
function lineLength(string, maxLength) {
  if (string.length <= maxLength) { return true; }
  return false;
}

// eslint-disable-next-line no-console
console.log(lineLength('проверяемая строка', 20));



function checkingForPalindrome(string) {
  let cleanString = string.toLowerCase();
  if (cleanString.slice(0, Math.ceil(cleanString.length / 2)) === cleanString.slice(-Math.ceil(cleanString.length / 2)).split('').reverse().join('')) {
    return true;
  }
  return false;
}
// eslint-disable-next-line no-console
console.log(checkingForPalindrome('топот'));

