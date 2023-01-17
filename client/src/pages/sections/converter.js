import React from 'react'
import ConverterItem from '../../components/currency_converter/converter_item';
import { IconGo, IconSwap } from '../../utils/app_icons';

const Converter = ({controller}) => {
  return (
    <div className="w-full px-9">
        <ConverterItem
          initialValue={controller.from.value}
          initialCountry={controller.from.country}
          onValuesChanged={(value) => {
            controller.setfrom({ ...controller.from, ...value });
          }}
        />
        <div className="my-5 flex space-x-7 justify-center">
          <div className="bg-[#4cd82580] rounded-full w-12 h-12 flex justify-center items-center active:scale-110 active:shadow-2xl transition-all duration-500" onClick={controller.swapConversion}>
            <IconSwap className="w-10" />
          </div>
          <div
            className="bg-[#f722d380] rounded-full  w-12 h-12 flex justify-center items-center active:scale-110 active:shadow-2xl transition-all duration-500"
            onClick={controller.convertCurrency}
          >
            {controller.isLoading ? (
              <div className="w-6 h-6 border-r-transparent border-4 border-pink-600 animate-spin rounded-full "></div>
            ) : (
              <IconGo className="w-10" />
            )}
          </div>
        </div>
        <ConverterItem
          isDiasbled={true}
          initialCountry={controller.to.country}
          initialValue={controller.data.value}
          onValuesChanged={(value) => {
            controller.setto({ ...controller.to, ...value });
          }}
        />
      </div>
  )
}

export default Converter