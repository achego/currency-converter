import React from "react";
import AppBar from "../components/app_bar";
import ConverterItem from "../components/currency_converter/converter_item";
import { IconGo, IconSwap } from "../utils/app_icons";
import useHomeController from "./home_controller";
import Chart from "./sections/chart";

const Home = () => {
  const controller = useHomeController();
  return (
    <div className="bg-gradient-to-br from-sprim-100 to-sprim-300 h-full w-full overflow-y-auto flex flex-col items-center max-w-[700px] md:rounded-[30px] hide-scroll relative">
      <AppBar />
      <p className="text-[0.75rem] pb-8">Nov 14, 16:59 UTC. Disclaimer</p>
      <div className="w-full px-9">
        <ConverterItem
          initialValue={controller.from.value}
          initialCountry={controller.from.country}
          onValuesChanged={(value) => {
            controller.setfrom({ ...controller.from, ...value });
          }}
        />
        <div className="my-5 flex space-x-7 justify-center">
          <div className="bg-[#4cd82580] rounded-full w-12 h-12 flex justify-center items-center active:scale-110 active:shadow-2xl transition-all duration-500">
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
          initialValue={controller.data.value}
          onValuesChanged={(value) => {
            controller.setfrom({ ...controller.to, ...value });
          }}
        />
      </div>
      <Chart />
    </div>
  );
};

export default Home;
