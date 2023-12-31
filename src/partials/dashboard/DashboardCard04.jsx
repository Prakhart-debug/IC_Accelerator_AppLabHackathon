import React from 'react';
import BarChart from '../../charts/BarChart01';
import Dashboard4 from '../../images/Dashboard4.jpg';
import '../community/main.css';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04() {

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
    ],
    datasets: [
      // Light blue bars
      {
        label: 'Direct',
        data: [
          800, 1600, 900, 1300, 1950, 1700,
        ],
        backgroundColor: tailwindConfig().theme.colors.blue[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'Indirect',
        data: [
          4900, 2600, 5350, 4800, 5200, 4800,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-gradient shadow-lg rounded-md">
      <header className="px-5 py-4">
        <h2 className="font-bold text-indigo-500">INVEST A FEW MINUTES AND GET YOURSELF NOTICED</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {/* <BarChart data={chartData} width={595} height={248} /> */}
      <img className="ml-1" src={Dashboard4} width="538" height="240" alt="Dashboard4" />
    </div>
  );
}

export default DashboardCard04;
