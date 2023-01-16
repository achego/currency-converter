// const numberToWords = (s) => {
//   const th = ["", "thousand", "million", "billion", "trillion"];

//   const dg = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//   ];
//   const tn = [
//     "ten",
//     "eleven",
//     "twelve",
//     "thirteen",
//     "fourteen",
//     "fifteen",
//     "sixteen",
//     "seventeen",
//     "eighteen",
//     "nineteen",
//   ];
//   var tw = [
//     "twenty",
//     "thirty",
//     "forty",
//     "fifty",
//     "sixty",
//     "seventy",
//     "eighty",
//     "ninety",
//   ];

//   s = s.toString();
//   s = s.replace(/[\, ]/g, "");
//   if (s != parseFloat(s)) return "not a number";
//   var x = s.indexOf('.');
//     if (x == -1) x = s.length;
//    if (x > 15) return 'too big';
// };

const th = ["", "thousand", "million", "billion", "trillion"];

const dg = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const tn = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
var tw = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const splitNumber3 = (number) => {
    var numStr = number.toString();
    var numArr = [];
    
    while (numStr.length > 0) {
      var group = numStr.slice(-3);
      numArr.unshift(parseInt(group));
      numStr = numStr.slice(0, -3);
    }
  
    return numArr;
  }

const numberToWords = (number = 33) => {
  const numArr = number.toString().split("");
  var words = "h";
//   if (numArr.length == 1) {
//     return dg[numArr[0]];
//   }
//   if (numArr[0] == 1 && numArr.length == 2) {
//     return tn[numArr[1]];
//   }
  const splitedNums = splitNumber3(number)
  for (const ind in splitedNums) {
    console.log('ind',ind);
    console.log('Splited',splitedNums);
    console.log(splitedNums[ind]);
    const splitedInd = splitedNums[ind].toString().split('')
    for (const ind2 of splitedInd) {
        if(splitedInd.length == 2){
            words = tw[0] + dg[1]
        }
    
    }
  }
  return words;
};

console.log(numberToWords(27));



// console.log(splitNumber3(12));
