const User = require('./users.model');

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      console.error(err);
      res.status(404).json({});
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(404).json({});
    }
  },
  postUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      res.status(404).json({});
    }
  },
  putUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useValidators: true
      })
      res.status(204).json(user);
    } catch (err) {
      console.error(err);
      res.status(404).json({});
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(204).json({});
    } catch (err) {
      console.error(err);
      res.status(404).json({});
    }
  }
}
