from sqlalchemy import create_engine, func
from flask import Flask, jsonify
#################################################
# Database Setup
#################################################
engine = create_engine("postgresql://)
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
    results = session.query(sea_level_tb.Year, sea_level_tb.Number_of_Observations, sea_level_tb.GSML_Not_Applied, sea_level_tb.StDev_of_GSML_Not_Applied, sea_level_tb.GSML_Applied, sea_level_tb.StDev_of_GSML_Applied).all()
    session.close()
    # Create a dictionary from the row data and append to a list of all_passengers
    seaLevel_arr = []
    for Year, Number_of_Observations, GSML_Not_Applied, StDev_of_GSML_Not_Applied, GSML_Applied, StDev_of_GSML_Applied in results:
        seaLevel_dict = {}
        seaLevel_dict["Year"] = Year
        seaLevel_dict["Number of Observations"] = Number_of_Observations
        seaLevel_dict["GSML Not Applied"] = GSML_Not_Applied
        seaLevel_dict["StDev of GSML Not Applied"] = StDev_of_GSML_Not_Applied
        seaLevel_dict["GSML Applied"] =GSML_Applied
        seaLevel_dict["StDev of GSML Applied"]=StDev_of_GSML_Applied
        seaLevel_arr.append(seaLevel_dict)
    return jsonify(aseaLevel_arr)

if __name__ == '__main__':
    app.run(debug=True)