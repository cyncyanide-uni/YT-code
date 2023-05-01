import { comparemyChart, createLinechart } from "./compareLinechart.js";
import { createPiechart } from "./pieChart.js";
import {
  compareRevenueChart,
  createRevenueLineChart,
} from "./revenueLineChart.js";

let channel1 = 0;
let channel2 = 1;

const tBody = document.querySelector("tbody");
const tbody2 = document.getElementById("table2");

const channel1Ele = document.getElementById("CompareChannelList1");
const channel2Ele = document.getElementById("CompareChannelList2");
const totalSubscribers2Ele = document.getElementById("totalSubscribers2");
const totalSubscribers1Ele = document.getElementById("totalSubscribers1");
const totalViews1Ele = document.getElementById("totalviews1");
const totalViews2Ele = document.getElementById("totalviews2");

createPiechart(
  [
    {
      label: "Male",
      value: JSON.parse(localStorage.getItem("CompareApidata")).piechart[
        channel1
      ].male,
    },
    {
      label: "Female",
      value: JSON.parse(localStorage.getItem("CompareApidata")).piechart[
        channel1
      ].female,
    },
  ],
  "#pie1"
);
createPiechart(
  [
    {
      label: "Male",
      value: JSON.parse(localStorage.getItem("CompareApidata")).piechart[
        channel2
      ].male,
    },
    {
      label: "Female",
      value: JSON.parse(localStorage.getItem("CompareApidata")).piechart[
        channel2
      ].female,
    },
  ],
  "#pie2"
);

channel1Ele.addEventListener("change", async () => {
  totalViews1Ele.innerText =
    "Total Views:" +
    JSON.parse(localStorage.getItem("lineChartData"))[channel1].views.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

  channel1 = channel1Ele.value;
  totalSubscribers1Ele.innerText =
    "Total Subcribers:" +
    JSON.parse(localStorage.getItem("lineChartData"))[channel1].subscribers;
  const channel1TitleEle = document.getElementById("channel1title");
  const channel1Title = channel1Ele.options[channel1].text;
  channel1TitleEle.innerText = channel1Title;
  await createCompareLinechart();
  await CreateRevenueCompareLineChart();
  createPiechart(
    [
      {
        label: "Male",
        value: JSON.parse(localStorage.getItem("CompareApidata")).piechart[
          channel1
        ].male,
      },
      {
        label: "Female",
        value: JSON.parse(localStorage.getItem("CompareApidata")).piechart[
          channel1
        ].female,
      },
    ],
    "#pie1"
  );
  updateTable();
});

channel2Ele.addEventListener("change", async () => {
  totalSubscribers2Ele.innerText =
    "Total Subcribers:" +
    JSON.parse(localStorage.getItem("lineChartData"))[channel2].subscribers;

  totalViews2Ele.innerText =
    "Total Views:" +
    JSON.parse(localStorage.getItem("lineChartData"))[channel2].views.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  channel2 = channel2Ele.value;
  console.log("channel2" + channel2);
  const channel2TitleEle = document.getElementById("channel2title");
  const channel2Title = channel2Ele.options[channel2].text;
  channel2TitleEle.innerText = channel2Title;
  console.log(JSON.parse(localStorage.getItem("lineChartData"))[channel2]);
  await createCompareLinechart();
  await CreateRevenueCompareLineChart();
  createPiechart(
    [
      {
        label: "Male",
        value: JSON.parse(localStorage.getItem("CompareApidata")).piechart[
          channel2
        ].male,
      },
      {
        label: "Female",
        value: JSON.parse(localStorage.getItem("CompareApidata")).piechart[
          channel2
        ].female,
      },
    ],
    "#pie2"
  );
  updateTable();
});

function updateTable() {
  const viewsData = JSON.parse(localStorage.getItem("lineChartData"))[channel1];
  const viewsData2 = JSON.parse(localStorage.getItem("lineChartData"))[
    channel2
  ];
  console.log("viewsada" + viewsData.months[channel1]);
  let tableData = ``;
  let table2Data = ``;
  for (let i = 0; i < 12; i++) {
    tableData =
      tableData +
      `
    <tr>
    <td class="border-2 border-black">${viewsData.months[i]}</td>
    <td  class="border-2 border-black">${viewsData.views[i]}</td>
    <td><i class="fas fa-times-circle"></i></td>
    </tr>
    `;
  }
  for (let i = 0; i < 12; i++) {
    table2Data =
      table2Data +
      `
    <tr>
    <td class="border-2 border-black">${viewsData2.months[i]}</td>
    <td  class="border-2 border-black">${viewsData2.views[i]}</td>
    <td><i class="fas fa-times-circle"></i></td>
    </tr>
    `;
  }
  tbody2.innerHTML = table2Data;
  tBody.innerHTML = tableData;
}
updateTable();

async function createCompareLinechart() {
  await comparemyChart.destroy();
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
        label: JSON.parse(localStorage.getItem("lineChartData"))[channel1].name,
        data: JSON.parse(localStorage.getItem("lineChartData"))[channel1]
          .GainedSub,
        borderColor: "rgba(75, 192, 192, 1)",
      },
      {
        label: JSON.parse(localStorage.getItem("lineChartData"))[channel2].name,
        data: JSON.parse(localStorage.getItem("lineChartData"))[channel2]
          .GainedSub,
        borderColor: "rgb(255, 76, 71)",
      },
    ],
  });
}

async function CreateRevenueCompareLineChart() {
  await compareRevenueChart.destroy();
  createRevenueLineChart({
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
        label: JSON.parse(localStorage.getItem("lineChartData"))[channel1].name,
        data: JSON.parse(localStorage.getItem("lineChartData"))[channel1]
          .revenue,
        borderColor: "rgba(75, 192, 192, 1)",
      },
      {
        label: JSON.parse(localStorage.getItem("lineChartData"))[channel2].name,
        data: JSON.parse(localStorage.getItem("lineChartData"))[channel2]
          .revenue,
        borderColor: "rgb(255, 76, 71)",
      },
    ],
  });
}
