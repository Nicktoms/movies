let db = require('../database/models');
/*const { Op } = require('sequelize/types');*/
let sequelize = db.sequelize;
const Op = sequelize.Op


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
    detail: function (req, res) {
        db.Movies.findByPk(req.params.id)
            .then(function (pelicula) {
                res.render("detallePelicula",
                    { pelicula });
            })

    },
    drama: function (req, res) {
        db.Movies.findAll({
            where: {
                genre_id: 3
            }
        })
            .then(function (peliculas) {
                res.render("peliculasDrama",
                    { peliculas });
            })
    },
    top: function (req, res) {
        db.Movies.findAll({
            where: {
                rating: { [db.Sequelize.Op.gt]: 8 }
            },
            order: [
                ['rating', 'DESC']
            ],
            limit: 5
        })
            .then(function (peliculas) {
                res.render("top",
                    { peliculas });
            })
    },
    totalTime: function (req,res) {
        db.Peliculas.sum('length')
            .then(function(resultado){
                console.log(resultado)
            })
    }
};

module.exports = moviesController;