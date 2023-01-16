import React, { useEffect, useState } from "react";
import { IconArrowDown } from "../../utils/app_icons";

import allCountries from "./data/all_countries";

const CustomCountryDropDown = ({
  initialCountry = allCountries.NGN,
  onCountryChanged,
}) => {
  const [isFocused, setisFocused] = useState(false);
  const [currentCountry, setcurrentCountry] = useState(initialCountry);
  const [queryValue, setqueryValue] = useState("");
  const fillteredCountries = {};
  Object.values(allCountries).forEach((count) => {
    const searchString = `${count.name} ${count.shortCode}`.toLowerCase();
    if (searchString.includes(queryValue.toLowerCase())) {
      fillteredCountries[count.shortCode] = count;
    }
  });

  useEffect(() => {
    setcurrentCountry(initialCountry);
  }, [initialCountry]);

  return (
    <div className="relative cursor-pointer text-white">
      <button
        className="flex items-center space-x-2 cursor-pointer active:bg-sprim-100 h-fit px-2 py-2 pr-4 rounded-md transition-all relative z-0"
        onClick={() => setisFocused(!isFocused)}
      >
        <img
          src={currentCountry.flag}
          alt={currentCountry.shortCode}
          className="h-3"
        />
        <h2 className="font-myriadProSemibold">{currentCountry.shortCode}</h2>
        <div><IconArrowDown /></div>
        <div className="w-3"></div>
      </button>
      {isFocused && (
        <div className="bg-sprim-100 w-48 absolute z-30 mt-2  px-2 py-3 rounded-sm shadow-[1px_1px_5px] shadow-sprim-300 anim_fadeIn">
          <input
            className=" w-full px-2 mb-3 py-1 outline-none text-sm font-myriadProRegular rounded-md text-caccent bg-sprim-300"
            placeholder="Search Countries"
            onChange={(event) => setqueryValue(event.target.value)}
          />
          <div className=" max-h-[200px] overflow-y-auto">
            {Object.values(fillteredCountries).map((country) => (
              <div
                key={country.shortCode}
                className="flex space-x-2 cursor-pointer items-center px-3 py-2 rounded-md transition-all hover:bg-sgrey-200"
                onClick={() => {
                  setisFocused(false);
                  setqueryValue("");
                  setcurrentCountry({
                    shortCode: country.shortCode,
                    flag: country.flag,
                  });
                  onCountryChanged({
                    shortCode: country.shortCode,
                    flag: country.flag,
                  });
                }}
              >
                <img
                  src={country.flag}
                  alt={country.shortCode}
                  className="h-3"
                />
                <h2 className="font-myriadProRegular text-base">
                  {country.shortCode}
                  {" - "}{" "}
                  <span className="text-sm text-sgrey-500 font-myriadProRegular">
                    {country.name}
                  </span>
                </h2>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Overlay */}

      {isFocused && (
        <div
          className="bg-transparent fixed z-10 w-screen h-screen  top-0 left-0"
          onClick={() => setisFocused(false)}
        ></div>
      )}
    </div>
  );
};

export default CustomCountryDropDown;
