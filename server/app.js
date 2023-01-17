const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");
const cheerio = require("cheerio");
const convertNumberToWords = require("./utils/functions");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/convert", async (req, res) => {
  const {
    to = "NGN",
    from = "USD",
    amount = "0",
    getGraph = 'false',
  } = req.query;

  console.log({...req.query});

  try {
    const response = await axios.get(
      `https://www.google.com/search?q=google+convert+${amount==''?'0':amount}+${from}+to+${to}`
    );
    const $ = cheerio.load(response.data);
    const data = $(".BNeawe.iBp4i.AP7Wnd").text();
    // const value = Number(data.toString().replace(/[^0-9\.]+/g,""));
    const valueList = data.match(/(-\d+|\d+)(,\d+)*(\.\d+)*/g);
    const value = Number(valueList[0].replace(',', ''));
    const valueInWord = convertNumberToWords(value)
    console.log(valueInWord);
    if (getGraph==='false') {
      res.status(200).json({ value, valueInWord });
      return;
    }
    res
      .status(200)
      .json({
        value,
        data: { 
          "1D": { x: [], y: [] } },
          "5D": { x: [], y: [] },
      });
  } catch (error) {
    res.status(500).json({ err: error, value: 0 });
  }
});




// function numberToWords(number) {
//   var ones = ['','one','two','three','four','five','six','seven','eight','nine'];
//   var tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
//   var teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

//   if ((number < 0) || (number > 999999999)) {
//     return "Number out of range";
//   }

//   var n = ("" + number).split("");
//   var str = "";
//   var len = n.length;
//   var i;

//   if (len == 1) {
//     str = ones[parseInt(n[0])];
//   } else if (len == 2) {
//     if (n[0] == "1") {
//       str = teens[parseInt(n[1])];
//     } else {
//       str = tens[parseInt(n[0])] + " " + ones[parseInt(n[1])];
//     }
//   } else if (len == 3) {
//     str = ones[parseInt(n[0])] + " hundred ";
//     if (n[1] == "1") {
//       str += teens[parseInt(n[2])];
//     } else {
//       str += tens[parseInt(n[1])] + " " + ones[parseInt(n[2])];
//     }
//   }
//   return str;
// }


module.exports = app;
