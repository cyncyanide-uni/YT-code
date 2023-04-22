import { chartData } from "./chartData.js";
import { myChart, createLinechart } from "./lineChart.js";
import { createPiechart } from "./pieChart.js";
import { addChart } from "./index.js";

const res = await fetch("http://localhost:3000/", {
  crossorigin: true,
});
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
];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < Apidata.bargraphData.length; j++) {
    if (i == 0) {
      if (i == Apidata.bargraphData[j].id - 1) {
        barChartData[0].months.push(Apidata.bargraphData[j].month);
        barChartData[0].GainedSub.push(Apidata.bargraphData[j].GainedSub);
      }
    }
    if (i == 1) {
      if (i == Apidata.bargraphData[j].id - 1) {
        barChartData[1].months.push(Apidata.bargraphData[j].month);
        barChartData[1].GainedSub.push(Apidata.bargraphData[j].GainedSub);
      }
    }
    if (i == 2) {
      if (i == Apidata.bargraphData[j].id - 1) {
        barChartData[2].months.push(Apidata.bargraphData[j].month);
        barChartData[2].GainedSub.push(Apidata.bargraphData[j].GainedSub);
      }
    }
  }
}

createPiechart([
  { label: "Male", value: Apidata.piechart[0].male },
  { label: "Female", value: Apidata.piechart[0].female },
]);
let selectedChannel = 0;

const selection = document.getElementById("ChannelList");
const pieEle = document.getElementById("pie");
selection.addEventListener("change", async () => {
  const title = document.getElementById("ytTitle");
  selectedChannel = selection.selectedIndex;
  const currentChart = document.getElementById("chart");
  currentChart.innerHTML = "";
  addChart(selectedChannel);
  await myChart.destroy();
  pieEle.innerHTML = "";
  if (selectedChannel == 1) {
    title.innerText = Apidata.piechart[1].name;
    createPiechart([
      { label: "Male", value: Apidata.piechart[1].male },
      { label: "Female", value: Apidata.piechart[1].female },
    ]);
  }
  if (selectedChannel == 2) {
    title.innerText = Apidata.piechart[2].name;
    createPiechart([
      { label: "Male", value: Apidata.piechart[2].male },
      { label: "Female", value: Apidata.piechart[2].female },
    ]);
  }
  if (selectedChannel == 0) {
    title.innerText = Apidata.piechart[0].name;
    createPiechart([
      { label: "Male", value: Apidata.piechart[0].male },
      { label: "Female", value: Apidata.piechart[0].female },
    ]);
  }
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
        data: barChartData[selectedChannel].GainedSub,
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  });
});
