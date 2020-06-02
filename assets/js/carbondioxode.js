 

    
    // Load Data from csv
    d3.csv("./assets/data/carbon_dioxide_dataset.csv").then(function(carbonData){
        
        // var yearParser = d3.timeParse("%Y");
        // var monthParser = d3.timeParse("%B");

        

        var Year = carbonData.map(data => +data.Year);
        // console.log(Year)
        var Months = carbonData.map(data => +data.Months);
        // console.log(Months)
        var Interpolated = carbonData.map(data => +data.interpolated);
        // console.log(Interpolated)
        var Average = carbonData.map(data => +data.average);
        // console.log(Average)
        var Trends = carbonData.map(data => +data.trend_season_corr);
        // console.log(Trends)

        //create pie graph 
        var pieLayout = {
            margin: { t: 0, l: 0 }
          };
          

        var pieData = [
            {
              values: Average,
              labels: Year,
              hovertext: Months,
              hoverinfo: "hovertext",
              type: "pie"
            }
          ];

             Plotly.plot("pie", pieData, pieLayout);

        // create bubble chart
        let bubbleLayout = {
          xaxis:{title: "Average"},
          height: 600,
          width: 1000
      };
      
          let bubbleData = [
            {
              x: Year,
              y: Average,
              text: Average,
              mode: "markers",
              marker: {
                size: Year,
                color: Average,
                colorscale: "Earth"
              }
            }
          ];
      
          Plotly.plot("bubble", bubbleData, bubbleLayout);

        //   create bar graph
        var barData = [{
            x: Year,
            y: Average,
            text: Months,
            marker: {
              color: 'rgb(142,124,195)'},
            type:"bar",
            orientation: "h",
        }];

        var barLayout = {
            title: "Average",
            yaxis:{
                tickmode:"linear",
            },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30
            }
        };
  
        // create the bar plot
        Plotly.newPlot("bar", barData, barLayout);
    });

