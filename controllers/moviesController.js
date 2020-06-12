let db = require('../database/models');
let sequelize = db.sequelize;

let moviesController = {
    list: function (req, res) {
        db.Movies.findAll()
            .then(function (peliculas) {
                res.render("index",
                    { peliculas });
                /*console.log(peliculas)*/
            })
        /*.catch(res.send("No se pudo obtener movies"))*/
    },
    detail: function (req,res){
        db.Movies.findByPk(req.params.id)
            .then(function (pelicula) {
                res.render("detallePelicula",
                { pelicula });
            })
            console.log(req.params.id)
    }
};

module.exports = moviesController;