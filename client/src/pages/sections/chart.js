import React from "react";
import { IconGraph } from "../../utils/app_icons";
import {Line} from 'react-chartjs-2'
import {Chart, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js'


const Charts = () => {
  // const data = {}
  Chart.register(
    LineElement,
    CategoryScale,
    PointElement,LinearScale
  )
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
          labels: ['1', '2', '3', '4', '5', '6'],
          datasets: [{
            data: [18, 65, 22, 14, 21, 33],
            borderColor: '#4FC9F8',
            // backgroundColor: 'red',
            tension: 0.5

            
          }]
        }}></Line>
      </div>
    </div>
  );
};

export default Charts;
