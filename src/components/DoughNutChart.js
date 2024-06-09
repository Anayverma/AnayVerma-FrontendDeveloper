"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: [
      "BNB LP Pool (30%)",
      `Partnership/CEX Wallet (5%)`,
      "LP Pool (35%)",
      "Burned (30%)",
    ],
    datasets: [
      {
        data: [30, 5, 35, 30],
        backgroundColor: ["#FF8F34", "#BE2D2D", "#028DFD", "#9934FF"],
        hoverBackgroundColor: ["#FF6384", "#FDCE56", "#4BC0C0", "#36A2EB"],
        borderWidth: 10,
        borderColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div className="w-full h-[50vh] ">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
