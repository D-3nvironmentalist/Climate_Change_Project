function init() {

    url = "/api/carbondioxide"
  
    d3.json(url).then((carbonData) => {
          
          var Year = carbonData.map(data => +data.Year);
          
          var Months = carbonData.map(data => +data.Months);
          
          var Interpolated = carbonData.map(data => +data.interpolated);
          
          var Average = carbonData.map(data => +data.Average);
          
          var Trends = carbonData.map(data => +data.trend_season_corr);
            
          var columns = ["Year", "Months", "Interpolated", "Average", "Trends"]

          var header = d3.selectAll("h1")
  
          header.text("Carbon Dioxide")
   
          var thead = d3.select("thead");
  
          var row = thead.append("tr");
  
          var tbody = d3.select("tbody");
  
          for (var i = 0; i < columns.length; i++){
              row.append("th").text(columns[i])
          };
  
          for (var i=0; i < carbonData.length; i++){
              var row = tbody.append("tr");
              row.append("td").text(Year[i])
              row.append("td").text(Months[i])
              row.append("td").text(Average[i])
              row.append("td").text(Interpolated[i])
              row.append("td").text(Trends[i])
          };
  
  
      });
  };
  
  init();
  
  function ice() {
      url = "/api/arcticIce"
  
      d3.json(url).then((iceData) => {
            
          var Area = iceData.map(data => +data.Area);
  
          var Extent = iceData.map(data => +data.Extent);
  
          var Year = iceData.map(data => data.Year);
  
          var columns = ["Area", "Extent", "Year"];

          var header = d3.selectAll("h1")
  
          header.text("Arctic Ice")
  
          var thead = d3.select("thead");
  
          var row = thead.append("tr");
  
          var tbody = d3.select("tbody")
  
          for (var i = 0; i < columns.length; i++){
              row.append("th").text(columns[i])
          };
  
          for (var i=0; i < iceData.length; i++){
              var row = tbody.append("tr");
              row.append("td").text(Area[i])
              row.append("td").text(Extent[i])
              row.append("td").text(Year[i])
          };
  
      })
  };
  
  function zonal() {
      url = "/api/zonalmeans"
  
      d3.json(url).then((zonalData) => {
            
          var Glob = zonalData.map(data => +data.Glob)
  
          var Hem_24N_44N = zonalData.map(data => +data.Hem_24N_44N)
  
          var Hem_24N_90N = zonalData.map(data => +data.Hem_24N_90N)
  
          var Hem_24S_24N = zonalData.map(data => +data.Hem_24S_24N)
  
          var Hem_24S_EQU = zonalData.map(data => +data.Hem_24S_EQU)
  
          var Hem_44N_64N = zonalData.map(data => +data.Hem_44N_64N)
  
          var Hem_44S_24S = zonalData.map(data => +data.Hem_44S_24S)
  
          var Hem_64N_90N = zonalData.map(data => +data.Hem_64N_90N)
  
          var Hem_64S_44S = zonalData.map(data => +data.Hem_64S_44S)
  
          var Hem_90S_24S = zonalData.map(data => +data.Hem_90S_24S)
  
          var Hem_90S_64S = zonalData.map(data => +data.Hem_90S_64S)
  
          var Hem_EQU_24N = zonalData.map(data => +data.Hem_EQU_24N)
  
          var NHem = zonalData.map(data => +data.NHem)
  
          var SHem = zonalData.map(data => +data.SHem)
  
          var Year = zonalData.map(data => +data.Year)
  
          var columns = ["Glob", "Hem 24N 44N", "Hem 24N 90N", "Hem 24S 24N", "Hem 24S EQU", "Hem 44N 64N",
           "Hem 44S 24S", "Hem 64N 90N", "Hem 64S 44S", "Hem 90S 24S", "Hem 90S 64S", "Hem EQU 24N", "NHem",
            "SHem", "Year"];

          var header = d3.selectAll("h1")
  
          header.text("Zonal Means")
  
          var thead = d3.select("thead");
  
          var row = thead.append("tr");
  
          var tbody = d3.select("tbody")
  
          for (var i = 0; i < columns.length; i++){
              row.append("th").text(columns[i])
          };
  
          for (var i=0; i < zonalData.length; i++){
              var row = tbody.append("tr");
              row.append("td").text(Glob[i])
              row.append("td").text(Hem_24N_44N[i])
              row.append("td").text(Hem_24N_90N[i])
              row.append("td").text(Hem_24S_24N[i])
              row.append("td").text(Hem_24S_EQU[i])
              row.append("td").text(Hem_44N_64N[i])
              row.append("td").text(Hem_44S_24S[i])
              row.append("td").text(Hem_64N_90N[i])
              row.append("td").text(Hem_64S_44S[i])
              row.append("td").text(Hem_90S_24S[i])
              row.append("td").text(Hem_90S_64S[i])
              row.append("td").text(Hem_EQU_24N[i])
              row.append("td").text(NHem[i])
              row.append("td").text(SHem[i])
              row.append("td").text(Year[i])
          };
      })
  };
  
  function sea() {
      url = "/api/seaLevel"
  
      d3.json(url).then((seaData) => {
            
          var GMSL_Applied = seaData.map(data => +data.GMSL_Applied);
  
          var GMSL_Not_Applied = seaData.map(data => +data.GMSL_Not_Applied);
  
          var Number_of_Observations = seaData.map(data => +data.Number_of_Observations);
  
          var StDev_of_GMSL_Applied = seaData.map(data => +data.StDev_of_GMSL_Applied);
  
          var StDev_of_GMSL_Not_Applied = seaData.map(data => +data.StDev_of_GMSL_Not_Applied);
  
          var Year = seaData.map(data => +data.Year);
  
          var columns = ["GMSL Applied", "GMSL Not Applied", "Number Of Observations", 
          "StDev Of GMSL Applied","StDev Of GMSL Not Applied", "Year"]
  
          var header = d3.selectAll("h1")
  
          header.text("Sea Level")
  
          var thead = d3.select("thead");
  
          var row = thead.append("tr");
  
          var tbody = d3.select("tbody")
  
          for (var i = 0; i < columns.length; i++){
              row.append("th").text(columns[i])
          };        
          
          for (var i=0; i < seaData.length; i++){
              var row = tbody.append("tr");
              row.append("td").text(GMSL_Applied[i])
              row.append("td").text(GMSL_Not_Applied[i])
              row.append("td").text(Number_of_Observations[i])
              row.append("td").text(StDev_of_GMSL_Applied[i])
              row.append("td").text(StDev_of_GMSL_Not_Applied[i])
              row.append("td").text(Year[i])
          };
      })
  };

  function anomalies() {
      url = "/api/global-anamolies"
      d3.json(url).then((anomaliesData) => {
                
          var Value_in_Celsius = anomaliesData.map(data => +data.Value_in_Celsius)

          var Year = anomaliesData.map(data => +data.Year)

          var columns = ["Value in Celsius", "Year"];

          var header = d3.selectAll("h1");
  
          header.text("Global Anomalies");

          var thead = d3.select("thead");
  
          var row = thead.append("tr");
  
          var tbody = d3.select("tbody")

          for (var i = 0; i < columns.length; i++){
            row.append("th").text(columns[i])
          };        
        
          for (var i=0; i < anomaliesData.length; i++){
            var row = tbody.append("tr");
            row.append("td").text(Value_in_Celsius[i])
            row.append("td").text(Year[i])
          };


      })
  }
  
  d3.selectAll("#selDataset").on("change", updateTable)
  
  function updateTable() {
      dropdownMenu = d3.select("#selDataset");
      var dataset = dropdownMenu.property("value");
      console.log(dataset);
      var thead = d3.select("thead");
      thead.html("");
      var tbody = d3.select("tbody")
      tbody.html("");
      switch(dataset) {
          case "Carbon Dioxide":
              init()
              break;
          case "Arctic Ice":
              ice();
              break;
          case "Sea Level":
              sea()
              break;
          case "Zonal Means":
              zonal();
              break;
          case "Global Anomalies":
              anomalies();
              break;
      };
  
  
  };