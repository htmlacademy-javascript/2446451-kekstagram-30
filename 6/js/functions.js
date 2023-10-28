/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
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

// 3. Функция извлечения целых положительных чисел из строки

const getIntNubmer = (string) => {
  const stringCheck = string.toString();
  let result = '';
  for (let i = 0; i < stringCheck.length; i ++) {
    if (!Number.isNaN(parseInt(stringCheck[i], 10))) {
      result += stringCheck[i];
    }
  }
  return parseInt (result, 10);
};

getIntNubmer('2023 год'); // 2023
getIntNubmer('ECMAScript 2022'); // 2022
getIntNubmer('1 кефир, 0.5 батона'); //  105
getIntNubmer('агент 007'); // 7
getIntNubmer('а я томат'); // NaN
getIntNubmer(2023); // 2023
getIntNubmer(-1); // 1
getIntNubmer(1.5); // 15
