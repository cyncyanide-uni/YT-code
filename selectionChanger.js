//dropdown menu changes

//import necessary data
import { chartData } from "./chartData.js";
import { myChart, createLinechart } from "./lineChart.js";
import { createPiechart } from "./pieChart.js";
import { addChart } from "./index.js";

// fetch the data
const res = await fetch("http://localhost:3000/", {
  crossorigin: true,
});
// convert the data to json
const Apidata = await res.json();

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

// it will change the data to an array
// i will be the channel index
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < Apidata.bargraphData.length; j++) {
    barChartData[i].months.push(Apidata.bargraphData[j].month);
    barChartData[i].GainedSub.push(Apidata.bargraphData[j].GainedSub);
  }
}

createPiechart(
  [
    { label: "Male", value: Apidata.piechart[0].male },
    { label: "Female", value: Apidata.piechart[0].female },
  ],
  "#pie"
);
let selectedChannel = 0;

const selection = document.getElementById("ChannelList");
const pieEle = document.getElementById("pie");

selection.addEventListener("change", async () => {
  const title = document.getElementById("ytTitle");
  selectedChannel = selection.value;
  const currentChart = document.getElementById("chart");

  /// delete the current chart
  currentChart.innerHTML = ""; // delete the line chart
  addChart(selectedChannel); // add the bar chart
  await myChart.destroy(); // delete the bar graph
  pieEle.innerHTML = ""; // delete the pie chart
  createPiechart(
    [
      {
        label: "Male",
        value: JSON.parse(localStorage.getItem("CompareApidata")).piechart[
          selectedChannel
        ].male,
      },
      {
        label: "Female",
        value: JSON.parse(localStorage.getItem("CompareApidata")).piechart[
          selectedChannel
        ].female,
      },
    ],
    "#pie"
  );
  // add the data for pie chart according to the changed variable

  // we use chart.js library to show
  createLinechart({
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
        data: JSON.parse(localStorage.getItem("lineChartData"))[selectedChannel]
          .GainedSub,
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  });
});
