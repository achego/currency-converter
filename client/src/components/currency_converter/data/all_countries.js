import flag_us from "./png100px/us.png";
import flag_ng from "./png100px/ng.png";
import flag_in from "./png100px/in.png";
import flag_sg from "./png100px/sg.png";
import flag_bs from "./png100px/bs.png";
import flag_sn from "./png100px/sn.png";
import flag_cn from "./png100px/cn.png";
const allCountries = {
  BSD: {
    name: "Bahamas",
    shortCode: "BSD",
    flag: flag_bs,
    currencyName: "naira",
  },
  CNY: {
    name: "China",
    shortCode: "CNY",
    flag: flag_cn,
    currencyName: "naira",
  },
  INR: {
    name: "India",
    shortCode: "INR",
    flag: flag_in,
    currencyName: "naira",
  },
  NGN: {
    name: "Nigeria",
    shortCode: "NGN",
    flag: flag_ng,
    currencyName: "naira",
  },
  SDG: {
    name: "Singapore",
    shortCode: "SGD",
    flag: flag_sg,
    currencyName: "naira",
  },
  USA: {
    name: "United States",
    shortCode: "USD",
    flag: flag_us,
    currencyName: "dollars",
  },
  XOF: {
    name: "Senegal",
    shortCode: "XOF",
    flag: flag_sn,
    currencyName: "naira",
  },
};

export default allCountries;
