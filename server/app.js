const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({messgae: 'Welcome Home'})
})

app.get("/convert", async (req, res) => {
  const cData = {
    value: 1,
    from: "JPY",
    to: "NGN",
  };
  try {
    const response = await axios.get(
      `https://www.google.com/search?q=google+convert+${cData.value}+${cData.from}+to+${cData.to}`
    );
    const $ = cheerio.load(response.data);
    const data = $(".BNeawe.iBp4i.AP7Wnd").text();
    // const value = Number(data.toString().replace(/[^0-9\.]+/g,""));
    const valueList = data.match(/(-\d+|\d+)(,\d+)*(\.\d+)*/g);
    const value = Number(valueList[0]);
    res.status(200).json({value});
  } catch (error) {
    res.status(500).json({ err: error });
  }
});

module.exports = app;
