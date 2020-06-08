// create a function to build plots
function builtPlot() {
  
    var url = "/api/zonalmeans"
  
    d3.json(url).then((zonalData) => {
      //  console.log(zonalData)
  
      var Year = zonalData.map(data => +data.Year);
        //   console.log(Year)
      var globalMean = zonalData.map(data => +data.Glob);
          // console.log(globalMean)
      var NHemMean = zonalData.map(data => +data.NHem);
          // console.log(NHemMean)
      var Hem_24N_90N = zonalData.map(data => +data.SHem);
          // console.log(Hem_24N_90N)
  
          // create Line chart

    var data = [
      {
          type: "scatter",
          mode: "lines+markers",
          name: "Global Annual Mean Temperatures",
          x: Year,
          y: globalMean,
          line: {
            color: "blue",
            width: 3
          }
    
      }
    ];
  
    var layout = {
      title: "Global Annual Mean Temperatures",
      xaxis: { title: "Year" },
      yaxis: { title: "Annual Mean Temperature"}
    };
  
  
    Plotly.newPlot("plot", data, layout);
  
    });

};

builtPlot();

// Initializes the page with a default plot
function init() {

  var url =  "/api/zonalmeans"

  var CHART = d3.selectAll("#plot2").node();
  
  d3.json(url).then((zonalData) => {
    var x = zonalData.map(data => +data.Year);
      // console.log(x);
    var y = zonalData.map(data => +data.Hem_24N_90N);
      // console.log(y);

    var trace = {
      x: x,
      y: y,
      text: "Hem_24N_90N",
      name: "Test",
      type: "bar",
      marker: {
        color: 'Red',
      }
  };
  
  // Combining both traces
  var data = [trace];
  
  // Apply the group barmode to the layout
  var layout = {
      title: "Annual Mean Temperatures of Selected Zone",
      barmode: "group",
      xaxis: {title: "Year"},
      yaxis: {title: "Annual Mean Temperature"},
  };
  
  // Render the plot
  Plotly.newPlot(CHART, data, layout);
  
  });
};

// Call buildPlot2() when a change takes place to the DOM
d3.selectAll("body").on("change", buildPlot2);

function buildPlot2() {
  
    var dropdownMenu = d3.select("#selHemisphere");
  
    var Hemisphere = dropdownMenu.node().value;

    var url =  "/api/zonalmeans"

    var CHART = d3.selectAll("#plot2").node();
  
    d3.json(url).then((zonalData) => {
      // Grab values from the response json object to build the plots

      var x = [];
      var y = [];

      switch(Hemisphere) {

        case "Hem_24N_90N":
          x = zonalData.map(data => +data.Year);
          y = zonalData.map(data => +data.Hem_24N_90N);
            // console.log(y);
          break;
          
        case "Hem_24S_24N":
          x = zonalData.map(data => +data.Year);
          y = zonalData.map(data => +data.Hem_24S_24N);
            // console.log(y);
          break;

        case "Hem_90S_24S":
          x = zonalData.map(data => +data.Year);
          y = zonalData.map(data => +data.Hem_90S_24S);
            // console.log(y);
          break;

        case "Hem_64N_90N":
          x = zonalData.map(data => +data.Year);
          y = zonalData.map(data => +data.Hem_64N_90N);
            // console.log(y);
          break;

        case "Hem_44N_64N":
          x = zonalData.map(data => +data.Year);
          y = zonalData.map(data => +data.Hem_44N_64N);
            // console.log(y);
          break;  

        case "Hem_24N_44N":
          x = zonalData.map(data => +data.Year);
          y = zonalData.map(data => +data.Hem_24N_44N);
            // console.log(y);
          break;      

        case "Hem_EQU_24N":
          x = zonalData.map(data => +data.Year);
          y = zonalData.map(data => +data.Hem_EQU_24N);
            // console.log(y);
          break;    

        case "Hem_24S_EQU":
          x = zonalData.map(data => +data.Year);
          y = zonalData.map(data => +data.Hem_24S_EQU);
            // console.log(y);
          break;      

        case "Hem_44S_24S":
          x = zonalData.map(data => +data.Year);
          y = zonalData.map(data => +data.Hem_44S_24S);
            // console.log(y);
          break;     

        case "Hem_64S_44S":
          x = zonalData.map(data => +data.Year);
          y = zonalData.map(data => +data.Hem_64S_44S);
            // console.log(y);
          break;      

        case "Hem_90S_64S":
          x = zonalData.map(data => +data.Year);
          y = zonalData.map(data => +data.Hem_90S_64S);
            // console.log(y);
          break;      

      };

      // Render the plot to the div tag with id "plot"
      Plotly.restyle(CHART, "x", [x]);
      Plotly.restyle(CHART, "y", [y]);
    
    });
};

init();
