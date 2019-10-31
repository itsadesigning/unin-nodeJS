const User = require('./users.model');

module.exports = {
  getUsers: async (req, res) => {
    try {
      console.time('GET /mariadb/users');
      const users = await User.findAll();
      console.timeEnd('GET /mariadb/users');
      res.status(200).json(users);
    } catch(err) {
      res.status(404).json({});
    }
  },
  getUser: async (req, res) => {
    try {
      console.time(`GET /mariadb/users/${req.params.id}`);
      const user = await User.findByPk(req.params.id);
      console.timeEnd(`GET /mariadb/users/${req.params.id}`);
      res.status(200).json(user);
    } catch(err) {
      res.status(404).json({});
    }
  },
  postUser: async (req, res) => {
    try {
      console.time(`POST /mariadb/users`);
      const user = await User.create(req.body);
      console.timeEnd(`POST /mariadb/users`);
      res.status(201).json(user);
    } catch(err) {
      res.status(404).json({});
    }
  },
  putUser: async (req, res) => {
    try {
      console.time(`PUT /mariadb/users/${req.params.id}`);
      const user = await User.update( req.body,
      {
        where: {
          _id: req.params.id
        }
      })
      console.timeEnd(`PUT /mariadb/users/${req.params.id}`);
      res.status(204).json(user);
    } catch(err) {
      console.log(err);
      res.status(404).json({});
    }
  },
  deleteUser: async (req, res) => {
    try {
      console.time(`DELETE /mariadb/users/${req.params.id}`);
      await User.destroy({
        where: {
          _id: req.params.id
        }
      });
      console.timeEnd(`DELETE /mariadb/users/${req.params.id}`);
      res.status(204).json({});
    } catch(err) {
      res.status(404).json({});
    }
  }
}
