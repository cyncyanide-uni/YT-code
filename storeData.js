const res = await fetch("http://localhost:3000/", {
  crossorigin: true,
});
const CompareApidata = await res.json();
const comparebarChartData = [
  {
    name: "flagarnt",
    subscribers: "1.2m",
    months: [],
    GainedSub: [],
    revenue: [],
    views: [],
  },

  {
    name: "Huberman Labs",
    subscribers: "3.2m",
    months: [],
    GainedSub: [],
    revenue: [],
    views: [],
  },

  {
    name: "Lex Fridman",
    subscribers: "2.94m",
    months: [],
    GainedSub: [],
    revenue: [],
    views: [],
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
  for (let j = 0; j < CompareApidata.bargraphData.length; j++) {
    if (i == 0) {
      if (i == CompareApidata.bargraphData[j].id - 1) {
        comparebarChartData[0].months.push(
          CompareApidata.bargraphData[j].month
        );
        comparebarChartData[0].GainedSub.push(
          CompareApidata.bargraphData[j].GainedSub
        );
        comparebarChartData[0].revenue.push(
          CompareApidata.bargraphData[j].revenue
        );
        comparebarChartData[0].views.push(CompareApidata.bargraphData[j].views);
      }
    }

    if (i == 1) {
      if (i == CompareApidata.bargraphData[j].id - 1) {
        comparebarChartData[1].months.push(
          CompareApidata.bargraphData[j].month
        );
        console.log(comparebarChartData);
        comparebarChartData[1].GainedSub.push(
          CompareApidata.bargraphData[j].GainedSub
        );
        comparebarChartData[1].revenue.push(
          CompareApidata.bargraphData[j].revenue
        );
        comparebarChartData[1].views.push(CompareApidata.bargraphData[j].views);
      }
    }
    if (i == 2) {
      if (i == CompareApidata.bargraphData[j].id - 1) {
        comparebarChartData[2].months.push(
          CompareApidata.bargraphData[j].month
        );
        comparebarChartData[2].GainedSub.push(
          CompareApidata.bargraphData[j].GainedSub
        );
        comparebarChartData[2].revenue.push(
          CompareApidata.bargraphData[j].revenue
        );
        comparebarChartData[2].views.push(CompareApidata.bargraphData[j].views);
      }
    }
    if (i == 3) {
      if (i == CompareApidata.bargraphData[j].id - 1) {
        comparebarChartData[i].months.push(
          CompareApidata.bargraphData[j].month
        );
        comparebarChartData[i].GainedSub.push(
          CompareApidata.bargraphData[j].GainedSub
        );
        comparebarChartData[i].revenue.push(
          CompareApidata.bargraphData[j].revenue
        );
        comparebarChartData[i].views.push(CompareApidata.bargraphData[j].views);
      }
    }
    if (i == 4) {
      if (i == CompareApidata.bargraphData[j].id - 1) {
        comparebarChartData[i].months.push(
          CompareApidata.bargraphData[j].month
        );
        comparebarChartData[i].GainedSub.push(
          CompareApidata.bargraphData[j].GainedSub
        );
        comparebarChartData[i].revenue.push(
          CompareApidata.bargraphData[j].revenue
        );
        comparebarChartData[i].views.push(CompareApidata.bargraphData[j].views);
      }
    }
    if (i == 5) {
      if (i == CompareApidata.bargraphData[j].id - 1) {
        console.log(CompareApidata.bargraphData[j].GainedSub);
        comparebarChartData[i].months.push(
          CompareApidata.bargraphData[j].month
        );
        comparebarChartData[i].GainedSub.push(
          CompareApidata.bargraphData[j].GainedSub
        );
        comparebarChartData[i].revenue.push(
          CompareApidata.bargraphData[j].revenue
        );
        comparebarChartData[i].views.push(CompareApidata.bargraphData[j].views);
      }
    }
  }
}

localStorage.setItem("CompareApidata", JSON.stringify(CompareApidata));
localStorage.setItem("lineChartData", JSON.stringify(comparebarChartData));
