const Vendeur = require("../models/vendeurs");

// Ajouter un admin
exports.create = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({ message: "Le champ name est requis." });
  }

  const vendeur = new Vendeur({
    name: req.body.name,
    adress: req.body.adress,
    number: req.body.number,
    password: req.body.password,
  });

  vendeur
    .save()
    .then(data => res.send(data))
    .catch(err =>
      res.status(500).send({
        message: err.message || "Une erreur est survenue lors de la création de l'admin.",
      })
    );
};

// Trouver tous les admins
exports.findAll = (req, res) => {
  const name = req.query.name;
  const condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
  Vendeur.find(condition)
    .then(data => res.send(data))
    .catch(err =>
      res.status(500).send({
        message: err.message || "Erreur lors de la récupération des clients.",
      })
    );
};

// Trouver un admin par ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Vendeur.findById(id)
    .then(data => {
      if (!data) {
        return res.status(404).send({ message: "Admin non trouvé avec id=" + id });
      }
      res.send(data);
    })
    .catch(err =>
      res.status(500).send({
        message: "Erreur lors de la récupération de l'admin avec id=" + id,
      })
    );
};

// Supprimer un admin par ID
exports.delete = (req, res) => {
  const id = req.params.id;

  Vendeur.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        return res.status(404).send({ message: `Impossible de supprimer l'admin avec id=${id}.` });
      }
      res.send({ message: "Client supprimé avec succès !" });
    })
    .catch(err =>
      res.status(500).send({
        message: "Erreur lors de la suppression de l'admin avec id=" + id,
      })
    );
};

// Supprimer tous les admins
exports.deleteAll = (req, res) => {
  Vendeur.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} admins supprimés avec succès.`,
      });
    })
    .catch(err =>
      res.status(500).send({
        message: err.message || "Erreur lors de la suppression des admins.",
      })
    );
};

// Mettre à jour un admin par ID
exports.update = (req,res) => {
  if(!req.body) {
   return res.status(400).send({
     message:"data can not be empty"
   });
  }  
 const id = req.params.id;
 Vendeur.findByIdAndUpdate(id, req.body, {vendeurFindAndUpdate:false})
 
 .then(data =>{
   if(!data) {
     res.status(400).send ({
       message:`can not update with id=${id}`
     });
   }
   else res.send ({
     message:"vendeur id updated"
   })
 })
 .catch(err => {
   res.status(500).send({
     message:"error updating vendeur with id=" + id
   });
 });
 
 }