import CustomCountryDropDown from "./custom_country_dropdown";

import { useState, useEffect } from "react";

const ConverterItem = ({
  text,
  isDiasbled = false,
  initialCountry,
  initialValue = "",
  onValuesChanged = ()=>{},
  refetch,
}) => {
  const [value, setvalue] = useState(initialValue);
  useEffect(() => {
    setvalue(initialValue);
  }, [initialValue]);

  return (
    <div className="w-full flex justify-between px-5 py-1 items-center shadow-[0px_32px_56px_-12px_#2A2968,_0_0_10px_-3px_inset_#1e1d49] focus-within:shadow-[0_0_30px_#4CBBE6]  transition-all duration-500  h-[85px] bg-gradient-to-r from-sprim-100 to-sprim-400 rounded-2xl  space-x-2 text-caccent">
      <div className="flex flex-col items-start">
        <p className="stext-base text-[0.75rem]">{text}</p>
        <input
          className="w-full stext-heading outline-none bg-transparent font-medium text-[1.3rem]"
          type="number"
          value={value}
          disabled={isDiasbled}
          onChange={(event) => {
            console.log("something is changing");
            setvalue(event.target.value);
            onValuesChanged({value: event.target.value});
          }}
        />
      </div>
      <CustomCountryDropDown
        initialCountry={initialCountry}
        onCountryChanged={(country) => onValuesChanged({ country: country })}
      />
    </div>
  );
};

export default ConverterItem;
