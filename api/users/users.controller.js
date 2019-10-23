const User = require('./users.model');

module.exports = {
  getUsers: async (req, res) => {
    try {
      res.status(200).json(await User.find());
    } catch (error) {
      res.status(404).send(error);
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  postUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  putUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useValidators: true
      });
      res.status(204).json(user);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(204).json({});
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
