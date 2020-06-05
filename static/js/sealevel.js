// create a function to build plots
function initLine() {
  
    url = "/api/seaLevel"
  
    d3.json(url).then((seaData) => {
      
      //  console.log(seaData)
  
      var Year = seaData.map(data => +data.Year);
        //   console.log(Year)
      var GMSL_Applied = seaData.map(data => +data.GMSL_Applied);
      var GMSL_Not_Applied = seaData.map(data => +data.GMSL_Not_Applied);
          //console.log(GMSL_Applied)
  
          // create Line chart

          var trace1 = {
            x: Year,
            y: GMSL_Applied,
            mode: 'lines',
            name: 'GMSL Applied',
            line:{
              color: 'rgb(219, 64, 82)',
              width: 3
            }
          };
          
          var trace2 = {
            x: Year,
            y: GMSL_Not_Applied,
            mode: 'lines',
            name: 'GMSL Not Applied',
            line: {
              color: 'rgb(55, 128, 191)',
              width: 3
            }
          };

    var data = [trace1, trace2];
  
    var layout = {
      title: "Sea Level Rise",
      xaxis: { title: "Year" },
      yaxis: { title: "Sea Height Variation (mm)"}
    };
  
  
    Plotly.newPlot("plot", data, layout);
  
    });
  
  };

  initLine();