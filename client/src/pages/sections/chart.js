import React from "react";
import { IconGraph } from "../../utils/app_icons";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";

const Charts = ({data, pairs}) => {
  // const data = {}
  Chart.register(LineElement, CategoryScale, PointElement, LinearScale);
  return (
    <div className="px-9 flex flex-col w-full pt-12">
      <div className="flex justify-between">
        <div>
          <p className="font-semibold tracking-wide">Recent Trend</p>
          <p className="text-[0.75rem]">{pairs.from}/{pairs.to} average daily prices</p>
        </div>
        <IconGraph />
      </div>
      {/* Chart */}
      <div className="w-full overflow-x-auto py-4">
        <Line
          data={{
            labels: ["1", "2", "3", "4", "5", "6"],

            datasets: [
              {
                label: "test1",
                borderWidth: 2,
                pointBorderWidth: 2,

                borderColor: '#4fc9f8',
                // pointRadius: 0,
                pointHoverRadius: 10,
                data: [18, 65, 22, 14, 21, 33],
                tension: 0.5,
              },
              {
                // pointRadius: 1,
                animation: false,
                pointBorderWidth:0,
                borderColor: 'rgba(79, 200, 248, 0.3)',
                borderWidth: 4,
                data: [18, 65, 22, 14, 21, 33],
                tension: 0.5,
              },
              {
                // pointRadius: 1,
                animation: false,
                pointBorderWidth:0,
                borderColor: 'rgba(79, 200, 248, 0.2)',
                borderWidth: 7,
                data: [18, 65, 22, 14, 21, 33],
                tension: 0.5,
              },
              {
                // pointRadius: 1,
                animation: false,
                pointBorderWidth:0,
                borderColor: 'rgba(79, 200, 248, 0.1)',
                borderWidth: 6,
                data: [18, 65, 22, 14, 21, 33],
                tension: 0.5,
              },
            ],
          }}
        ></Line>
      </div>
    </div>
  );
};

export default Charts;
