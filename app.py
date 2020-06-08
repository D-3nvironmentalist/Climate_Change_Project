import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify,render_template


#################################################
# Database Setup
#################################################
rds_connection_string = "postgres:postgres@localhost:5432/climateChange"
engine = create_engine(f'postgresql://{rds_connection_string}')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
carbon_dioxide_tb = Base.classes.Carbon_Dioxide

arctic_ice_tb = Base.classes.Arctic_Ice

sea_level_tb = Base.classes.Sea_Level

zonal_annual_means_tb = Base.classes.Zonal_Annual_Means

global_anomalies_tb = Base.classes.Global_Anomalies




#################################################
# Flask Setup
#################################################
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/carbon-dioxide")
def carbon():
    return render_template("carbondioxide.html")

@app.route("/sea-level")
def sea():
    return render_template("sealevel.html")

@app.route("/zonal-means")
def zonal():
    return render_template("zonalmeans.html")

@app.route("/arctic-ice")
def artic():
    return render_template("articice.html")

@app.route("/data")
def data():
    return render_template("data.html")

@app.route("/api/seaLevel")
def seaLevel():
    # Create our session (link) from Python to the DB
    session = Session(engine)

   
    # Query all passengers
    results = session.query(sea_level_tb.Year, sea_level_tb.Number_of_Observations, sea_level_tb.GMSL_Not_Applied, sea_level_tb.StDev_of_GMSL_Not_Applied, sea_level_tb.StDev_of_GMSL_Applied, sea_level_tb.GMSL_Applied).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    seaLevel_arr = []
    for Year, Number_of_Observations, GMSL_Not_Applied,  StDev_of_GMSL_Not_Applied, StDev_of_GMSL_Applied, GMSL_Applied in results:
        seaLevel_dict = {}
        seaLevel_dict["Year"] = Year
        seaLevel_dict["Number_of_Observations"] = Number_of_Observations
        seaLevel_dict["GMSL_Not_Applied"] = GMSL_Not_Applied
        seaLevel_dict["StDev_of_GMSL_Not_Applied"] = StDev_of_GMSL_Not_Applied
        seaLevel_dict["StDev_of_GMSL_Applied"] = StDev_of_GMSL_Applied
        seaLevel_dict["GMSL_Applied"]= GMSL_Applied
        seaLevel_arr.append(seaLevel_dict)

    return jsonify(seaLevel_arr)


@app.route("/api/global-anamolies")
def anamolies():
    # Create our session (link) from Python to the DB  
    #Does each app route require individual sessions?
    session = Session(engine)

    
    # Query all passengers
    results = session.query(global_anomalies_tb.Year, global_anomalies_tb.Value_in_Celsius).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    global_anomalies_arr = []
    for Year, Value_in_Celsius in results:
        global_anomalies_dict = {}
        global_anomalies_dict["Year"] = Year
        global_anomalies_dict["Value_in_Celsius"] = Value_in_Celsius
        global_anomalies_arr.append(global_anomalies_dict)

    return jsonify(global_anomalies_arr)

@app.route("/api/arcticIce")
def arctic_Ice():
    # Create our session (link) from Python to the DB  
    #Does each app route require individual sessions?
    session = Session(engine)

    
    # Query all passengers
    results = session.query(arctic_ice_tb.Year, arctic_ice_tb.Extent, arctic_ice_tb.Area).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    arcticIce_arr = []
    for Year, Extent, Area in results:
        arctic_dict = {}
        arctic_dict["Year"] = Year
        arctic_dict["Extent"] = Extent
        arctic_dict["Area"] = Area
        arcticIce_arr.append(arctic_dict)

    return jsonify(arcticIce_arr)

@app.route("/api/carbondioxide")
def carbon_Dioxide():
    # Create our session (link) from Python to the DB  
    #Does each app route require individual sessions?
    session = Session(engine)

   
    # Query all passengers
    results = session.query(carbon_dioxide_tb.Year, carbon_dioxide_tb.Months, carbon_dioxide_tb.interpolated, carbon_dioxide_tb.Average, carbon_dioxide_tb.trend_season_corr).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    carbon_dioxide_arr = []
    for Year, Months, interpolated, Average, trend_season_corr in results:
        carbon_dict = {}
        carbon_dict["Year"] = Year
        carbon_dict["Months"] = Months
        carbon_dict["interpolated"] = interpolated
        carbon_dict["Average"] = Average
        carbon_dict["trend_season_corr"] = trend_season_corr
        carbon_dioxide_arr.append(carbon_dict)

    return jsonify(carbon_dioxide_arr)

@app.route("/api/zonalmeans")
def zonal_Means():
    # Create our session (link) from Python to the DB  
    #Does each app route require individual sessions?
    session = Session(engine)

    
    # Query all passengers
    results = session.query(zonal_annual_means_tb.Year, zonal_annual_means_tb.Glob, zonal_annual_means_tb.NHem, zonal_annual_means_tb.SHem, zonal_annual_means_tb.Hem_24N_90N, zonal_annual_means_tb.Hem_24S_24N, zonal_annual_means_tb.Hem_90S_24S, zonal_annual_means_tb.Hem_64N_90N, zonal_annual_means_tb.Hem_44N_64N, zonal_annual_means_tb.Hem_24N_44N, zonal_annual_means_tb.Hem_EQU_24N, zonal_annual_means_tb.Hem_24S_EQU, zonal_annual_means_tb.Hem_44S_24S, zonal_annual_means_tb.Hem_64S_44S, zonal_annual_means_tb.Hem_90S_64S).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    zonal_means_arr = []
    for Year, Glob, NHem, SHem, Hem_24N_90N, Hem_24S_24N, Hem_90S_24S, Hem_64N_90N, Hem_44N_64N, Hem_24N_44N, Hem_EQU_24N, Hem_24S_EQU, Hem_44S_24S, Hem_64S_44S, Hem_90S_64S in results:
        zonal_dict = {}
        zonal_dict["Year"] = Year
        zonal_dict["Glob"] = Glob
        zonal_dict["NHem"] = NHem
        zonal_dict["SHem"] = SHem
        zonal_dict["Hem_24N_90N"] = Hem_24N_90N
        zonal_dict["Hem_24S_24N"] = Hem_24S_24N
        zonal_dict["Hem_90S_24S"] = Hem_90S_24S
        zonal_dict["Hem_64N_90N"] = Hem_64N_90N
        zonal_dict["Hem_44N_64N"] = Hem_44N_64N
        zonal_dict["Hem_24N_44N"] = Hem_24N_44N
        zonal_dict["Hem_EQU_24N"] = Hem_EQU_24N
        zonal_dict["Hem_24S_EQU"] = Hem_24S_EQU
        zonal_dict["Hem_44S_24S"] = Hem_44S_24S
        zonal_dict["Hem_64S_44S"] = Hem_64S_44S
        zonal_dict["Hem_90S_64S"] = Hem_90S_64S
        zonal_means_arr.append(zonal_dict)

    return jsonify(zonal_means_arr)

if __name__ == '__main__':
    app.run(debug=True)
