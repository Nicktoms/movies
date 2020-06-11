let db = require ('../database/models');
let sequelize = db.sequelize;

let moviesController = {
    list: function (req,res) {
        sequelize.query("SELECT * FROM movies")
        .then(function(resultados) { 
            let peliculas = resultados[0];
            res.render("index", 
            {peliculas});
            /*console.log(peliculas)*/
        })
        /*.catch(res.send("No se pudo obtener movies"))*/
    }
};

module.exports = moviesController;