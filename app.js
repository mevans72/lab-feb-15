
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
  var ansProbThreeA = (sum(num1, num2));
  var ansProbThreeA1 = (sum(ansProbThreeA, num3));
  var ansProbThreeB = (multiply(num1, num2));
  var ansProbThreeB1 = (multiply(ansProbThreeB1, num3));
  console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + ansProbThreeA + '.');
  console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + ansProbThreeB + '.');
  return [ ansProbThreeA, ansProbThreeB];
};
