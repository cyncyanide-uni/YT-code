// Get the canvas element "myChart" and stores the 2D render in variable 'ctx'
var ctx = document.getElementById("myChart").getContext("2d");

//import chartData
import { chartData } from "./chartData.js";

//get canvas element with id=myChart and store in variable 'currentchart'
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
  {
    name: "Impaulsive ",
    subscribers: "4.47m",
    months: [],
    GainedSub: [],
    revenue: [],
    views: [],
  },
  {
    name: "Tim Ferris",
    subscribers: "1.27m",
    months: [],
    GainedSub: [],
    revenue: [],
    views: [],
  },
];

//pushing the data into the graph
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

//labelling the data axes
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

//creates a new line chart using the 'lineChartData'
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
