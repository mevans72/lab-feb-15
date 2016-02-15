
var pTagOne = document.getElementById('ans-one');
function sum(num1, num2) {
  var ansProbOne = (num1 + num2);
//  console.log('The sum of num4 and num7 is: '+ ansProbOne);
  pTagOne.textContent = 'The sum of num4 and num7 is: '+ ansProbOne + '.';
  return ansProbOne;
};

var pTagTwo = document.getElementById('ans-two');
function multiply(num1, num2) {
  var ansProbTwo = (num1 * num2);
//  console.log('The product of num4 and num7 is: ' + ansProbTwo);
  pTagTwo.textContent = 'The product of num4 and num7 is: ' + ansProbTwo;
  return ansProbTwo;
};

var pTagThree = document.getElementById('ans-three');
function sumAndMultiply(num1, num2, num3) {
  var ansProbThreeSum = (sum(num1, num2) + num3);
  var ansProbThreeMultiply = (multiply(num1, num2) + num3);
  //console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + ansProbThreeSum + '.');
  pTagThree.textContent = num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + ansProbThreeSum + '. The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + ansProbThreeMultiply + '.';
  //console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + ansProbThreeMultiply + '.');
  return [ ansProbThreeSum, ansProbThreeMultiply];
};

var pTagFour = document.getElementById('ans-four')
function sumArray(array1) {
  var ansProbFour = 0;
  for(var i = 0; i < array1.length; i++) {
    ansProbFour += array1[i];
  }
  console.table(array1);
  //console.log(array1 + ' was passed in as an array of numbers, and ' + ansProbFour + ' is their sum.');
  pTagFour.textContent = array1 + ' was passed in as an array of numbers, and ' + ansProbFour + ' is their sum.';
  return ansProbFour;
};

var pTagFive = document.getElementById('ans-five')
function multiplyArray(array1) {
  var ansProbFive = 1;
  for(var i = 0; i < array1.length; i++) {
    ansProbFive *= array1[i];
  }
  console.table(array1);
  //console.log(array1 + ' was passed in as an array of numbers, and ' + ansProbFive + ' is their product.');
  pTagFive.textContent = array1 + ' was passed in as an array of numbers, and ' + ansProbFive + ' is their product.';
  return ansProbFive;
}
