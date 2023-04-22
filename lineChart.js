// Get the canvas element
var ctx = document.getElementById("myChart").getContext("2d");
import { chartData } from "./chartData.js";

const currentChart = document.getElementById("myChart");
const res = await fetch("http://localhost:3000/", {
  crossorigin: true,
});
const Apideta = await res.json();
const barChartData = [
  {
    name: "flagarnt",
    months: [],
    GainedSub: [],
  },
  {
    name: "Huberman Labs",
    months: [],
    GainedSub: [],
  },
  {
    name: "Lex Fridman",
    months: [],
    GainedSub: [],
  },
];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < Apideta.bargraphData.length; j++) {
    if (i == 0) {
      if (i == Apideta.bargraphData[j].id - 1) {
        barChartData[0].months.push(Apideta.bargraphData[j].month);
        barChartData[0].GainedSub.push(Apideta.bargraphData[j].GainedSub);
      }
    }
    if (i == 1) {
      if (i == Apideta.bargraphData[j].id - 1) {
        barChartData[1].months.push(Apideta.bargraphData[j].month);
        barChartData[1].GainedSub.push(Apideta.bargraphData[j].GainedSub);
      }
    }
    if (i == 2) {
      if (i == Apideta.bargraphData[j].id - 1) {
        barChartData[2].months.push(Apideta.bargraphData[j].month);
        barChartData[2].GainedSub.push(Apideta.bargraphData[j].GainedSub);
      }
    }
  }
}
var lineChartData = {
  labels: [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ],
  datasets: [
    {
      label: "subscriber growth per month",
      data: barChartData[0].GainedSub,
      borderColor: "rgba(75, 192, 192, 1)",
    },
  ],
};
var myChart;
// Create the line chart
myChart = new Chart(ctx, {
  type: "line",
  data: lineChartData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function createLinechart(lineChartData) {
  myChart = new Chart(ctx, {
    type: "line",
    data: lineChartData,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

export { myChart, createLinechart };
// Define the lineChartData for the line chart
