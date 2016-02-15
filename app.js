
function sum(num1, num2) {
  var ansProbOne = (num1 + num2);
//  console.log('The sum of num4 and num7 is: '+ ansProbOne);
  return ansProbOne;
};

function multiply(num1, num2) {
  var ansProbTwo = (num1 * num2);
//  console.log('The product of num4 and num7 is: ' + ansProbTwo);
  return ansProbTwo;
};

function sumAndMultiply(num1, num2, num3) {
  var ansProbThreeSum = (sum(num1, num2) + num3);
  var ansProbThreeMultiply = (multiply(num1, num2) + num3);
  console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + ansProbThreeSum + '.');
  console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + ansProbThreeMultiply + '.');
  return [ ansProbThreeSum, ansProbThreeMultiply];
};

function sumArray(array1) {
  ansProbFour = 0;
  for(var i = 0; i < array1.length; ansProbFour += array1[i++]);
  console.table(array1);
  console.log(array1 + ' was passed in as an array of numbers, and ' + ansProbFour + ' is their sum.');
  return ansProbFour;
};
