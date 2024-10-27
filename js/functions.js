function lineLength(string, maxLength) {
  return string.length <= maxLength;
}

// eslint-disable-next-line no-console
console.log(lineLength('проверяемая строка', 20));
function checkingForPalindrome(string) {
  const cleanString = string.toLowerCase();
  return cleanString.slice(0, Math.ceil(cleanString.length / 2)) ===
         cleanString.slice(-Math.ceil(cleanString.length / 2)).split('').reverse().join('');
}

// eslint-disable-next-line no-console
console.log(checkingForPalindrome('топот'));
