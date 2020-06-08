// create a function to build plots
 function initLine() {
  carbonURL = "/api/carbondioxide"
anamolieURL =  "/api/global-anamolies"

Plotly.d3.json(carbonURL,function(err, carbonData){
Plotly.d3.json(anamolieURL, function(err, anamolieData){


  // Trace1 for the Greek Data
var carbonTrace = 
      {
          type: "scatter",
          mode: "lines+markers",
          name: "% of Average C02 in PPM",
          x: carbonData.map(data => +data.Year),
          y: carbonData.map(data => +data.trend_season_corr/1000) ,
          text: carbonData.map(data => +data.Months),
          line: {
            color: "blue",
            width: 4
          }
    
      };

// Trace 2 for the Roman Data
var anaomlieTrace = 
      {
          type: "scatter",
          mode: "lines+markers",
          name: "Global Temperature Anamolies in Celsius",
          x: anamolieData.map(data => +data.Year),
          y: anamolieData.map(data => +data.Value_in_Celsius) ,
          text: carbonData.map(data => +data.Months),
          line: {
            color: "red",
            width: 4
          }
    
      };

// Combining both traces
var data = [carbonTrace, anaomlieTrace];

// Apply the group barmode to the layout
var layout = {
      title: "Increase of Carbon and Global Temperature Anamolies over the years",
      xaxis: { title: "Years" },
      yaxis: { title: "Global Temp. Anamolies and Average C02" }
    };

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);

}) 
});

 };

initLine();