import React from "react";
import Chart from "react-apexcharts";

const Piechart = () => {
  const optios = {
    labels: ["Income", "Expense"],
    colors: ["#07A756", "#F04A50"],
  };

  const series = [40, 60];

  return (
    <div>
      <Chart options={optios} series={series} type="donut" width={280} />
    </div>
  );
};

export default Piechart;
