import React from "react";
import Chart from "react-apexcharts";

const Piechart = () => {
  const optios = {
    labels: ["Apple", "Banana", "Oranges", "Grapes", "Mango"],
  };

  const series = [44, 55, 13, 43, 22];

  return (
    <div>
      <Chart options={optios} series={series} type="donut" width={380} />
    </div>
  );
};

export default Piechart;
