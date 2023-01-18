import React from "react";
import AppBar from "../components/app_bar";
import useHomeController from "./home_controller";
import Chart from "./sections/chart";
import Converter from "./sections/converter";
import CurrentDate from "./sections/current_date";
import WordAndSpeech from "./sections/word_and_speech";

const Home = () => {
  const controller = useHomeController();
  return (
    <div className="bg-gradient-to-br from-sprim-100 to-sprim-300 h-full w-full overflow-y-auto flex flex-col items-center max-w-[700px] md:rounded-[30px] hide-scroll relative">
      <AppBar />
      <CurrentDate />
      <Converter controller={controller} />
      <WordAndSpeech word={controller.data.valueInWord!==''?`${controller.data.valueInWord} ${controller.to.country.currencyName}`:''} />
      <Chart data={{}} pairs={{from:controller.from.country.shortCode, to: controller.to.country.shortCode}}/>
    </div>
  );
};

export default Home;
