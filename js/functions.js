// 1. Функция на проверку длины строки


const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('проверяемая строка', 20); // возвращает true
checkStringLength('проверяемая строка', 18); // возвращает true
checkStringLength('проверяемая строка', 10); // возвращает false
