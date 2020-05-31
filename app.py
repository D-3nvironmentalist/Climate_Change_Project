from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine(engine = create_engine("postgres:password@localhost:5432/climateChange"))

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
carbon_dioxide_tb= Base.classes.Carbon_Dioxide

artic_ice_tb= Base.classes.Artic_Ice


sea_level_tb= Base.classes.Sea_Level

zonal_annual_means_tb= Base.classes.Zonal_Annual_Means




#################################################
# Flask Setup
#################################################
app = Flask(__name__)


@app.route("/sealevel")
def seaLevel():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of passenger data including the name, age, and sex of each passenger"""
    # Query all passengers
    results = session.query(sea_level_tb.Year, sea_level_tb.Number_of_Observations, sea_level_tb.GMSL_Not_Applied, sea_level_tb.StDev_of_GMSL_Not_Applied, sea_level_tb.StDev_of_GMSL_Applied, sea_level_tb.GMSL_Applied).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
   seaLevel_arr = []
    for Year, Number_of_Observations, GMSL_Not_Applied,  StDev_of_GMSL_Not_Applied, StDev_of_GMSL_Applied, GMSL_Appliedd in results:
        seaLevel_dict = {}
        seaLevel_dict["Year"] = Year
        seaLevel_dict["Number_of_Observations"] = Number_of_Observations
         seaLevel_dict["GMSL_Not_Applied"] = GMSL_Not_Applied
        seaLevel_dict["StDev_of_GMSL_Not_Applied"] = StDev_of_GMSL_Not_Applied
        seaLevel_dict["StDev_of_GMSL_Applied"] = StDev_of_GMSL_Applied
        seaLevel_dict["GMSL_Applied"]= GMSL_Applied

      seaLevel_arr.append(seaLevel_dict)

    return jsonify(aseaLevel_arr)


@app.route("/articIce")
def artic_Ice():
    # Create our session (link) from Python to the DB  
    #Does each app route require individual sessions?
    session = Session(engine)

    """Return a list of passenger data including the name, age, and sex of each passenger"""
    # Query all passengers
    results = session.query(artic_ice_tb.year, artic_ice_tb.extent, artic_ice_tb.area).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    articIce_arr = []
    for year, extent, area in results:
        artic_dict = {}
        artic_dict["year"] = year
        artic_dict["extent"] = extent
        artic_dict["area"] = area
        articIce_arr.append(artic_dict)

    return jsonify(articIce_arr)

@app.route("/carbonDioxide")
def carbon_Dioxide():
    # Create our session (link) from Python to the DB  
    #Does each app route require individual sessions?
    session = Session(engine)

    """Return a list of passenger data including the name, age, and sex of each passenger"""
    # Query all passengers
    results = session.query(carbon_dioxide_tb.year, carbon_dioxide_tb.Months, carbon_dioxide_tb.interpolated, carbon_dioxide_tb.Average, carbon_dioxide_tb.trend_season_corr).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
   carbon_dioxide_arr = []
    for year, Months, interpolated, Average, trend_season_corr in results:
        carbon_dict = {}
        carbon_dict["year"] = year
        carbon_dict["Months"] = Months
        carbon_dict["interpolated"] = interpolated
        carbon_dict["Average"] = Average
        carbon_dict["trend_season_corr"] = trend_season_corr
    
       carbon_dioxide_arr.append(carbon_dict)

    return jsonify(carbon_dioxide_arr)

@app.route("/zonalMeans")
def zonal_Means():
    # Create our session (link) from Python to the DB  
    #Does each app route require individual sessions?
    session = Session(engine)

    """Return a list of passenger data including the name, age, and sex of each passenger"""
    # Query all passengers
    results = session.query(zonal_annual_means_tb.Year, zonal_annual_means_tb.Glob, zonal_annual_means_tb.SHem, zonal_annual_means_tb.Hem_24N_90N, zonal_annual_means_tb.Hem_24S_24N, zonal_annual_means_tb.Hem_90S_24S, zonal_annual_means_tb.Hem_64N_90N, zonal_annual_means_tb.Hem_44N_64N, zonal_annual_means_tb.Hem_24N_44N, zonal_annual_means_tb.Hem_EQU_24N, zonal_annual_means_tb.Hem_24S_EQU, zonal_annual_means_tb.Hem_44S_24S, zonal_annual_means_tb.Hem_64S_44S, zonal_annual_means_tb.Hem_90S_64S).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    zonal_means_arr = []
    for year, Glob, NHem, SHem, Hem_24N_90N, Hem_24S_24N, Hem_24N_90N, Hem_24S_24N,Hem_90S_24S,  Hem_64N_90N, Hem_44N_64N, Hem_24N_44N, Hem_EQU_24N, Hem_24S_EQU, Hem_44S_24S, Hem_64S_44S, Hem_90S_64S  in results:
        zonal_dict = {}
        zonal_dict["year"] = year
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
