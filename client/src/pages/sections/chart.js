import React from "react";
import { IconGraph } from "../../utils/app_icons";
import {Line} from 'react-chartjs-2'
import {Chart, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js'


const Charts = () => {
  const data = {}
  return (
    <div className="px-9 flex flex-col w-full pt-12">
      <div className="flex justify-between">
        <div>
          <p className="font-semibold tracking-wide">Recent Trend</p>
          <p className="text-[0.75rem]">USD/EUR average daily prices</p>
        </div>
       <IconGraph />
      </div>
      {/* Chart */}
      <div className="w-full overflow-x-auto py-4">
        <Line data={{
          labels: ['1', '2', '3'],
          datasets: [{
            data: [45, 65, 22]
          }]
        }}></Line>
      </div>
    </div>
  );
};

export default Charts;
