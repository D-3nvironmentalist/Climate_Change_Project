// create a function to build plots
 function initLine() {
  
  url = "/api/carbondioxide"

  d3.json(url).then((carbonData) => {
    
    //  console.log(carbonData)

    var Year = carbonData.map(data => +data.Year);
        console.log(Year)
    var Months = carbonData.map(data => +data.Months);
        // console.log(Months)
    var Interpolated = carbonData.map(data => +data.interpolated);
        // console.log(Interpolated)
    var Average = carbonData.map(data => +data.Average);
        // console.log(Average)
    var Trends = carbonData.map(data => +data.trend_season_corr);
        // console.log(Trends)

        // create Line chart 1 
  var lineData = [
    {
        type: "scatter",
        mode: "lines+markers",
        name: "Average C02",
        x: Year,
        y: Trends,
        text: Months,
        line: {
          color: "green",
          width: 4
        }
  
    }
  ];

  var layout = {
    title: "Carbon Dioxide Levels over the years",
    xaxis: { title: "Years" },
    yaxis: { title: "Carbon Dioxide (ppm)" }
  };


  Plotly.newPlot("plot", lineData, layout);

  });

};

// Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", updatePlotly);

// function updatePlotly(carbon) {

//   // Use D3 to select the drop down menu 
//   var dropdownMenu=d3.select("#selDataet");

//   // Assign the value of the dropdown menu to a variable 
//   var dataset = dropdownMenu.property("value");

//   d3.json(url).then((carbonData) => {
    
//     //  console.log(carbonData)

//     var Year = carbonData.map(data => +data.Year);
//         // console.log(Year)
//     var Months = carbonData.map(data => +data.Months);
//         // console.log(Months)
//     var Interpolated = carbonData.map(data => +data.interpolated);
//         // console.log(Interpolated)
//     var Average = carbonData.map(data => +data.Average);
//         // console.log(Average)
//     var Trends = carbonData.map(data => +data.trend_season_corr);
//         // console.log(Trends)

//     // Initialize X and Y arrays
//     var x = [];
//     var y = [];

//     if  (dataset === 'Average') {
//       x: Year;
//       y: Average;
//     }

//     else if  (dataset === 'Trends') {
//       x: Year;
//       y: Trends;
//     }

//     else if  (dataset === 'Interpolated') {
//       x: Year;
//       y: Interpolated;
//     };

//     var layout = {
//       tittle: `${carbon} over the years`
//     }

//     Plotly.restyle("plot", "x", [x], layout);
//     Plotly.restyle("plot", "y", [y], layout);
//     Plotly.restyle("plot", "y", [y], layout);

//   });
// }

initLine();