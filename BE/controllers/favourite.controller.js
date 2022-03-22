const db = require("../models/main");
const Favourite = db.favourite;

//Create and save new favourite place
exports.create = (req,res) => {
    if(!req.body.icon || !req.body.location || !req.body.destination) {
        res.status(400).send({
          message: "Campos requeridos!",
        });
        return;
    }
    
    const favourite = {
        icon:req.body.icon,
        location: req.body.location,
        destination: req.body.destination, 
    }

    Favourite.create(favourite)
        .then(fav => {
            res.send(fav)
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al crear Favorito"
            })
        })
};

// Retrieve all Favourites from the database
exports.allFavourites = (req,res) => {
    Favourite.findAll()
        .then(fav => {
            res.status(200).send(fav)
        })
        .catch(err => {
            res.status(500).send(err)
        })
};

// Update Favourite by the id in the request param
exports.update = (req,res) => {
    if(!req.body.icon || !req.body.location || !req.body.destination) {
        res.status(400).send({
          message: "Campos requeridos!",
        });
        return;
    }
    const id = req.params.id;
    Favourite.update(req.body, {
        where:{id:id}
    })
        .then(num => {
            if(num==1){
                res.send({
                    message:"Actualización exitosa"
                })
            } else {
                res.send({
                    message:"Fallo en la actualización"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message:"Error en la actualización"
            })
        })
};

exports.delete = (req,res) => {
    const id = req.params.id;
    Favourite.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Favorito Eliminado",
        });
      } else {
        res.send({
          message: `Fallo al eliminar favorito`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error al eliminar favorito`,
      });
    });
};