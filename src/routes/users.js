module.exports = app => {
    const Users = app.db_connect.models.Users;

    app.route('/users')
      .get((req, res) => {
        Users.findAll({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message});
        })
      })
      .post((req, res) => {
        console.log('req.body: ',req.body );
        Users.create({
          id: req.body.id,
          name: req.body.name,
          lastname: req.body.lastname,
          birthday: req.body.birthday,
          dni: req.body.dni
          })
          .then(result => res.json(result))
          .catch(error => {
            res.status(412).json({msg: error.message});
          });
      });

    app.route('/users')
      .get((req, res) => {
        Users.findById(req.params.id, {
          attributes: ['id', 'name', 'lastname']
        })
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
      })
      .delete((req, res) => {
        Users.destroy({where: {id: req.params.id}})
          .then(result => res.sendStatus(204))
          .catch(error => {
            res.status(412).json({msg: error.message});
          });
      });
  
  };