import flag_us from "./png100px/us.png";
import flag_ng from "./png100px/ng.png";
import flag_in from "./png100px/in.png";
import flag_sg from "./png100px/sg.png";
import flag_bs from "./png100px/bs.png";
import flag_sn from "./png100px/sn.png";
import flag_cn from "./png100px/cn.png";
const allCountries = {
    BSD:{
        name: "Bahamas",
        shortCode: "BSD",
        flag: flag_bs,
      },
    CNY:{
        name: "China",
        shortCode: "CNY",
        flag: flag_cn,
      },
    INR:{
        name: "India",
        shortCode: "INR",
        flag: flag_in,
      },
    NGN:{
        name: "Nigeria",
        shortCode: "NGN",
        flag: flag_ng,
      },
    SDG:{
        name: "Singapore",
        shortCode: "SGD",
        flag: flag_sg,
      },
      USA:{
        name: "United States",
        shortCode: "USD",
        flag: flag_us,
      },
      // XOF:{
      //   name: "Senegal",
      //   shortCode: "XOF",
      //   flag: flag_sn,
      // },
    }

export default allCountries