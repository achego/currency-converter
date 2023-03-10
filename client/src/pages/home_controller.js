import { useEffect, useState } from "react";
import allCountries from "../components/currency_converter/data/all_countries";
import axios from "axios";

const useHomeController = () => {
    const [from, setfrom] = useState({ country: allCountries.USA, value: "1" });
	const [to, setto] = useState({ country: allCountries.NGN, value: "" });
  const [isLoading, setisLoading] = useState(false)
	const [data, setData] = useState({value:'', valueInWord:''});

  useEffect(() => {
    convertCurrency();
  }, []);

  const convertCurrency = async () => {
   try {
    setisLoading(true)

    // const url = `http://localhost:4000/convert?to=${to.country.shortCode}&from=${from.country.shortCode}&amount=${from.value}`
    const url = `https://currency-converter-achego.vercel.app/convert?to=${to.country.shortCode}&from=${from.country.shortCode}&amount=${from.value}`
    const resp  = await axios.get(url)
    setData(resp.data)
    setisLoading(false)
   } catch (error) {
    setisLoading(false)
    console.warn(error)
   }
  };

  const swapConversion = () => {
    setfrom({...to, value: from.value})
    setto({...from, value:''})
    // convertCurrency()
  }
  return {to, from, setto, setfrom, data, convertCurrency, isLoading, swapConversion  };
};

export default useHomeController;
