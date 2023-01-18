// // const numberToWords = (s) => {
// //   const th = ["", "thousand", "million", "billion", "trillion"];

// //   const dg = [
// //     "zero",
// //     "one",
// //     "two",
// //     "three",
// //     "four",
// //     "five",
// //     "six",
// //     "seven",
// //     "eight",
// //     "nine",
// //   ];
// //   const tn = [
// //     "ten",
// //     "eleven",
// //     "twelve",
// //     "thirteen",
// //     "fourteen",
// //     "fifteen",
// //     "sixteen",
// //     "seventeen",
// //     "eighteen",
// //     "nineteen",
// //   ];
// //   var tw = [
// //     "twenty",
// //     "thirty",
// //     "forty",
// //     "fifty",
// //     "sixty",
// //     "seventy",
// //     "eighty",
// //     "ninety",
// //   ];

// //   s = s.toString();
// //   s = s.replace(/[\, ]/g, "");
// //   if (s != parseFloat(s)) return "not a number";
// //   var x = s.indexOf('.');
// //     if (x == -1) x = s.length;
// //    if (x > 15) return 'too big';
// // };

// const th = ["", "thousand", "million", "billion", "trillion"];

// const dg = [
//   "zero",
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
// ];
// const tn = [
//   "ten",
//   "eleven",
//   "twelve",
//   "thirteen",
//   "fourteen",
//   "fifteen",
//   "sixteen",
//   "seventeen",
//   "eighteen",
//   "nineteen",
// ];
// var tw = [
//   "twenty",
//   "thirty",
//   "forty",
//   "fifty",
//   "sixty",
//   "seventy",
//   "eighty",
//   "ninety",
// ];

// const splitNumber3 = (number) => {
//     var numStr = number.toString();
//     var numArr = [];

//     while (numStr.length > 0) {
//       var group = numStr.slice(-3);
//       numArr.unshift(parseInt(group));
//       numStr = numStr.slice(0, -3);
//     }

//     return numArr;
//   }

// const numberToWords = (number = 33) => {
//   const numArr = number.toString().split("");
//   var words = "h";
// //   if (numArr.length == 1) {
// //     return dg[numArr[0]];
// //   }
// //   if (numArr[0] == 1 && numArr.length == 2) {
// //     return tn[numArr[1]];
// //   }
//   const splitedNums = splitNumber3(number)
//   for (const ind in splitedNums) {
//     console.log('ind',ind);
//     console.log('Splited',splitedNums);
//     console.log(splitedNums[ind]);
//     const splitedInd = splitedNums[ind].toString().split('')
//     for (const ind2 of splitedInd) {
//         if(splitedInd.length == 2){
//             words = tw[0] + dg[1]
//         }

//     }
//   }
//   return words;
// };

// console.log(numberToWords(27));

// // console.log(splitNumber3(12));




// Define an array of ones, tens, and powers of ten
const ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
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

const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const powersOfTen = [
  "",
  "thousand",
  "million",
  "billion",
  "trillion",
  "quadrillion",
  "quintrillion",
  "sextillion",
  "septillion",
  "octillion",
  "nonillion",
  "decillion",
  "Undecillion",
  "Duodecillion",
  "Tredecillion",
  "Quattuordecillion",
  "Quindecillion",
  "Hexdecillion",
  "Septendecillion",
  "Octodecillion",
  "Novemdecillion",
  "Vigintillion",
  "Unvigintillion",
  "Duovigintillion",
  "Trevigintillion",
  "Quattourvigintillion",
  "Quinvigintillion",
  "Hexvigintillion",
  "Septenvigintillion",
  "Octovigintillion",
  "Novemvigintillion",
  "Trigintillion",
  "Untrigintillion",
  "Duotrigintillion",
  "Googol",
  "Googolplex",
];

// Function to convert a number to words
function convertNumberToWords(numb = 0) {
  console.log("NUMB", numb);
  //   Extracting Decimal
  let n = numb;
  let deci = "";
  if (numb.toString().includes(".")) {
    n = +numb.toString().split(".")[0];
    deci = numb.toString().split(".")[1];
  }

  // Check if the input is valid
  if (isNaN(n) || n < 0) {
    return "Invalid input";
  }
  if (n.toString().length >= 15) {
    return "Number too large";
  }
  if (n === 0 && numb.toString().length <= 1) {
    return "zero";
  }
  

  // Initialize variables to store the word form of the number
  let word = "";

  if (n === 0 && numb.toString().length > 1) {
    word = 'zero ,'
  }

  // Extract the powers of thousand and their remainder
  let powerOfThousand = 0;
  console.log("N is", n);

  while (n > 0) {
    // Extract the three digits of the number

    let threeDigits = n % 1000;
    n = Math.floor(n / 1000);

    // Convert the three digits to words
    let { threeDigitsWord, isHundredZero } =
      convertThreeDigitsToWords(threeDigits);

    // Add the three digits to the final word along with the power of thousand
    // console.log("is100-0", isHundredZero);
    // console.log("N is", n);
    // console.log(
    //   threeDigitsWord + " ---" + powersOfTen[powerOfThousand] + "*** " + word
    // );
    const isThreeDigitEmpty = threeDigitsWord === "";
    // console.log("Pow10", powersOfTen[powerOfThousand]);
    // word = `${isThreeDigitEmpty ? "" : threeDigitsWord + " "}${
    //   isThreeDigitEmpty ? "and " : powersOfTen[powerOfThousand] + ", "
    // }${word}`;
    word = `${isThreeDigitEmpty ? "" : threeDigitsWord + " "}${
      isThreeDigitEmpty
        ? ""
        : `${powersOfTen[powerOfThousand]}${isHundredZero ? " and " : ", "}`
    }${word}`;
    console.log(word);
    // if (threeDigitsWord !== "") {
    //   word = threeDigitsWord + " " + powersOfTen[powerOfThousand]+',' + " " + word;
    //   console.log(word);
    // }
    // else {
    //     word = "and " + word;
    //   console.log(word);
    // }
    // console.log(word);
    // Increment the power of thousand
    powerOfThousand++;
  }

  const intWord = word.trim().replace(/.$/, "");
  const deciWord = getDecimalWord(deci).trim();
  word = intWord + deciWord;

  //   getDecimalWord(deci)
  //   console.log(getDecimalWord(deci));
  console.log("The word ", word.trim());
  return word.trim();
}

function getDecimalWord(deci) {
  if (deci.length < 1) {
    return "";
  }
  console.log("Dect", deci);
  let deciWord = "point ";
  for (const key of deci) {
    const val = key == 0 ? "zero" : ones[key];
    deciWord += val + " ";
  }
  return deciWord;
}

// Function to convert a number of three digits to words
function convertThreeDigitsToWords(n) {
 
  // Initialize variables to store the word form of the number
  console.log(n);
  let word = "";
  if (n === 0) {
    console.log('here');
    word =  "zero";
  }

  // Extract the ones digit
  let one = n % 10;
  n = Math.floor(n / 10);
  console.log("One", one);

  // Extract the tens digit
  let ten = n % 10;
  n = Math.floor(n / 10);
  console.log("Ten", ten);

  // Extract the hundreds digit
  let hundred = n % 10;
  //   console.log("Hundred", hundred);

  // Convert the hundreds digit to words
  if (hundred > 0) {
    if (one > 0 || ten > 0) {
      word = ones[hundred] + " hundred and ";
    } else {
      word = ones[hundred] + " hundred ";
    }
  }

  // Convert the tens and ones digits to words
  if (ten >= 2) {
    word += tens[ten] + " " + ones[one];
  } else if (ten === 1) {
    one = +("1" + one);
    word += ones[one];
    // word += ones[ten*10 + one];
  } else {
    word += ones[one];
  }

  return {
    threeDigitsWord: word.trim(),
    isHundredZero: (hundred <= 0 || ten <= 0) && one <= 0,
  };
}


module.exports = convertNumberToWords;
