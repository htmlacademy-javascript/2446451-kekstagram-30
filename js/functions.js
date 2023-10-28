// 1. Функция на проверку длины строки


const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('проверяемая строка', 20); // возвращает true
checkStringLength('проверяемая строка', 18); // возвращает true
checkStringLength('проверяемая строка', 10); // возвращает false

// 2.  Функция на проверку палиндрома

const checkPalindrome = (string) => {
  const stringNormalize = string.replaceAll (' ','').toUpperCase();
  let stringCheck = '';
  for (let i = stringNormalize.length - 1; i > stringNormalize.indexOf([0]); i --) {
    stringCheck += stringNormalize.at(i);
  }
  if (stringCheck !== stringNormalize) {
    return false;
  }
  return true;
};

checkPalindrome('топот'); // Возвращает true
checkPalindrome('ДоВоД '); // Возвращает true
checkPalindrome('Кекс'); // Возвращает false
checkPalindrome('Лёша на полке клопа нашёл '); // Возвращает true
