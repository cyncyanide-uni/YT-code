// Get the canvas element "compareRevenueChart" and stores the 2D render in variable 'revenueCtx'
var revenueCtx = document
  .getElementById("compareRevenueChart")
  .getContext("2d");

console.log(JSON.parse(localStorage.getItem("lineChartData")));
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
      label: JSON.parse(localStorage.getItem("lineChartData"))[0].name,
      data: JSON.parse(localStorage.getItem("lineChartData"))[0].revenue,
      borderColor: "rgba(75, 192, 192, 1)",
    },
    {
      label: JSON.parse(localStorage.getItem("lineChartData"))[1].name,
      data: JSON.parse(localStorage.getItem("lineChartData"))[1].revenue,
      borderColor: "rgb(255, 76, 71)",
    },
  ],
};

var compareRevenueChart;

// Create the line chart
compareRevenueChart = new Chart(revenueCtx, {
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
function createRevenueLineChart(lineChartData) {
  compareRevenueChart = new Chart(revenueCtx, {
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

export { compareRevenueChart, createRevenueLineChart };
// Define the lineChartData for the line chart
