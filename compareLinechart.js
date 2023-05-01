// Get the canvas element "comparemyChart" and stores the 2D render in variable 'compareCtx'
var compareCtx = document.getElementById("compareChart").getContext("2d");

console.log(JSON.parse(localStorage.getItem("lineChartData"))[0].GainedSub);
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
      data: JSON.parse(localStorage.getItem("lineChartData"))[0].GainedSub,
      borderColor: "rgba(75, 192, 192, 1)",
    },
    {
      label: JSON.parse(localStorage.getItem("lineChartData"))[1].name,
      data: JSON.parse(localStorage.getItem("lineChartData"))[1].GainedSub,
      borderColor: "rgb(255, 76, 71)",
    },
  ],
};

var comparemyChart;

// Create the line chart
comparemyChart = new Chart(compareCtx, {
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
  comparemyChart = new Chart(compareCtx, {
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

export { comparemyChart, createLinechart };
// Define the lineChartData for the line chart
