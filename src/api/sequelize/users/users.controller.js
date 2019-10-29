const User = require('./users.model');

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch(err) {
      res.status(404).json({});
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.status(200).json(user);
    } catch(err) {
      res.status(404).json({});
    }
  },
  postUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch(err) {
      res.status(404).json({});
    }
  },
  putUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id)
      user.update(req.body);
      res.status(204).json(user);
    } catch(err) {
      res.status(404).json({});
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id)
      user.destroy();
      res.status(204).json(user);
    } catch(err) {
      res.status(404).json({});
    }
  }
}
