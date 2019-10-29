const User = require('./users.model');

module.exports = {
  getUsers: async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
  },
  getUser: async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  },
  postUser: async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
  },
  putUser: async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useValidators: true
    })
    res.status(204).json(user);
  },
  deleteUser: async (req, res) => {
    User.findByIdAndDelete(req.params.id);
    res.status(204).json({});
  }
}
