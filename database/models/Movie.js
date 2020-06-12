module.exports = (sequelize, dataTypes) => {
    let alias = "Movies";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },
        title:{
            type: dataTypes.INTEGER
        },
        length:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "movies",
        timestamps: false
    }

    const movie = sequelize.define(alias, cols, config);

    return movie;
}