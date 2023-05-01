//creating a piechart function
function createPiechart(pieChartData, divId) {
  //setting the dimensions
  const pieWidth = 300;
  const pieHeight = 300;
  const radius = Math.min(pieWidth, pieHeight) / 2;
  const colors = ["#0072C6", "#E84C3D"];
  const pieEle = document.getElementById(divId.slice(1));
  console.log(pieEle);
  if (pieEle !== null) {
    pieEle.innerHTML = "";
  }
  //create a vector for the piechart, set height width position
  const svg2 = d3
    .select(divId)
    .append("svg")
    .attr("width", pieWidth)
    .attr("height", pieHeight)
    .append("g")
    .attr("transform", `translate(${pieWidth / 2},${pieHeight / 2})`);

  //declare variable pie
  var pie;
  pie = d3.pie().value((d) => d.value);

  const arc = d3.arc().innerRadius(0).outerRadius(radius);

  const slices = pie(pieChartData);

  const path = svg2
    .selectAll("path")
    .data(slices) //binds slices data to selection
    .enter()
    .append("path") //appends path element to the svg container for each item
    .attr("d", arc)
    .attr("fill", (d, i) => colors[i]) //sets color
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 0.7) //sets initial opacity
    .on("mouseover", function (d) {
      
      //on clicking, opacity changes
      d3.select(this).transition().duration(200).style("opacity", 1);

      //selects parent element of pie, appends div element
      const tooltip = d3
        .select(this.parentNode)
        .append("div")
        .attr("class", "tooltip")
        .text(`${d.data.label}: ${d.data.value}%`);

      //gets the bounding rectangle of the pie slice, sets position and dimensions
      const rect = this.getBoundingClientRect();
      tooltip
        .style("left", rect.x + rect.width / 2 + "px")
        .style("top", rect.y - 10 + "px");
    })

    //when the cursor of your mouse moves across the pie, it changes opacity
    .on("mouseout", function () {
      d3.select(this).transition().duration(200).style("opacity", 0.7);
      d3.select(this.parentNode).select(".tooltip").remove();
    });
}

export { createPiechart };
