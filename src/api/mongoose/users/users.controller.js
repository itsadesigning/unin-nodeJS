const User = require('./users.model');

module.exports = {
  getUsers: async (req, res) => {
    try {
      console.time('GET /mongodb/users');
      const users = await User.find();
      console.timeEnd('GET /mongodb/users');
      res.status(200).json(users);
    } catch(err) {
      res.status(404).json({});
    }
  },
  getUser: async (req, res) => {
    try {
      console.time(`GET /mongodb/users/${req.params.id}`);
      const user = await User.findById(req.params.id);
      console.timeEnd(`GET /mongodb/users/${req.params.id}`);
      res.status(200).json(user);
    } catch(err) {
      res.status(404).json({});
    }
  },
  postUser: async (req, res) => {
    try {
      console.time(`POST /mongodb/users/${req.params.id}`);
      const user = await User.create(req.body);
      console.timeEnd(`POST /mongodb/users/${req.params.id}`);
      res.status(201).json(user);
    } catch(err) {
      res.status(404).json({});
    }
  },
  putUser: async (req, res) => {
    try {
      console.time(`PUT /mongodb/users/${req.params.id}`);
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useValidators: true
      });
      console.timeEnd(`PUT /mongodb/users/${req.params.id}`);
      res.status(204).json(user);
    } catch(err) {
      res.status(404).json({});
    }
  },
  deleteUser: async (req, res) => {
    try {
      console.time(`DELETE /mongodb/users/${req.params.id}`);
      User.findByIdAndDelete(req.params.id);
      console.timeEnd(`DELETE /mongodb/users/${req.params.id}`);
      res.status(204).json({});
    } catch(err) {
      res.status(404).json({});
    }
  }
}
