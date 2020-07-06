# Project-2

## Background 

We are in a grip of a climate crisis and we often think of climate change as a distant threat — something for future generations to worry about. We primarily gained inspiration for this after reading this [Buzzfeed](https://www.buzzfeednews.com/article/peteraldhous/climate-change-maps-ice-sea-level-rise) article. We gathered, analyzed, and visualized climate datasets from the [Nasa](https://climate.nasa.gov/evidence/) climate webpage. We looked at several of planet Earth's Vital Signs which inlcude [Carbon Dioxide Levels](https://climate.nasa.gov/vital-signs/carbon-dioxide/) with about 750 data points, [Global Temperature](https://data.giss.nasa.gov/gistemp/) from years ranging between 1880-2020, [Arctic Sea Ice Minimums](https://climate.nasa.gov/vital-signs/arctic-sea-ice/) from 1979 to 2019, and [Global Sea Levels](https://climate.nasa.gov/vital-signs/sea-level/) with over 1000 data points. 

## Process

To analyze and visualize this data both Python and JavaScript libraries were used. Pandas was imported onto Jupyter Notebook where the extracted data was transformed by dropping unecessary columns and by renaming those columns.
* ![Rename Dropping Columns](https://github.com/D-3nvironmentalist/Project-2/blob/master/static/Images/rename_columns.png) 

The data was then loaded onto a PostgreSQL database using SLQAlchemy.
* ![SLQAlchemy](https://github.com/D-3nvironmentalist/Project-2/blob/master/static/Images/SLQAlchemy.png) 

Tables were created on the PostgreSQL database and further cleaning was performed using numerous SQL quieres with SELECT statements including the addition of Primary Keys. 
* ![Tables_1](https://github.com/D-3nvironmentalist/Project-2/blob/master/static/Images/Tables_1.png)
* ![Tables_2](https://github.com/D-3nvironmentalist/Project-2/blob/master/static/Images/Tables_2.png)

A Python Flask App was then created where the data was Jsonified, RESTful APIs were created, and the data was rendered onto our HTML pages. 
* ![Render_template](https://github.com/D-3nvironmentalist/Project-2/blob/master/static/Images/Render_template.png)
* ![Jsonify](https://github.com/D-3nvironmentalist/Project-2/blob/master/static/Images/Jsonify.png)

The HTML pages which includes dropdown menus, a carousel, and interactive visualizations of the data were created using CSS and JavaScript libraries such as Bootstrap, Plotly, D3, and Slick.

## Findings/Conculsions 
**Each webpage visualizes its own finding from the data.**

In the Carbon Data webpage it was found that one of the most obvious signals of climate change is the rise in global temperature anomalies over the past several decades correlates with the raise of Carbon Dioxide Levels in parts per million during that same time period. 
* ![Carbon Anamolies Graph](https://github.com/D-3nvironmentalist/Project-2/blob/master/static/Images/Carbon_Anamolies_Graph.png)

It was concluded that for the Artic Ice webpage the amount of ice in the Arctic is diminishing every year as a consequence of global warming.
* ![Artic_Ice_Levels](https://github.com/D-3nvironmentalist/Project-2/blob/master/static/Images/Artic_Ice_Levels.png)

The Sea Level webpage demonstrates that Sea Level rise is caused primarily by two factors related to global warming: the added water from melting ice sheets and glaciers and the expansion of seawater as it warms
* ![Sea_level](https://github.com/D-3nvironmentalist/Project-2/blob/master/static/Images/Sea_level.png)

There were two visualizations on the Zonal Means webpage. The first visualization shows that the year 2016 ranks as the warmest on record.
* ![Global_Mean_Temp](https://github.com/D-3nvironmentalist/Project-2/blob/master/static/Images/Global_Mean_Temp.png)

From the second visualization one could conclude that the effects of the widespread consumption of fossil fuels after the industrial revolution are most pronouned in the temperate regions, then the tropics, and lastly the polar regions.
* ![Mean_Temp_Zone](https://github.com/D-3nvironmentalist/Project-2/blob/master/static/Images/Mean_Temp_Zone.png)

