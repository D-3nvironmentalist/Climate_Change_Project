// create a function to build plots
function initLine() {
  
    url = "/api/zonalmeans"
  
    d3.json(url).then((zonalData) => {
      
      //  console.log(zonalData)
  
      var Year = zonalData.map(data => +data.Year);
        //   console.log(Year)
      var globalMean = zonalData.map(data => +data.Glob);
          console.log(globalMean)
      var NHemMean = zonalData.map(data => +data.NHem);
          console.log(NHemMean)
      var SHemMean = zonalData.map(data => +data.SHem);
          console.log(SHemMean)
  
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
      yaxis: { title: "Mean Temp"}
    };
  
  
    Plotly.newPlot("plot", data, layout);
  
    });
  
  };

  initLine();
