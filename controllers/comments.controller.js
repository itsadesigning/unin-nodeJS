module.exports = {
  getUsers: (req, res) => {
    res.status(200).json({ status: 'success' });
  },
  postUser: (req, res) => {
    res.status(200).json({ status: 'success' });
  },
  updateUser: (req, res) => {
    const { id } = req.params;
    res.status(200).json({ status: 'success' });
  },
  deleteUser: (req, res) => {
    const { id } = req.params;
    res.status(200).json({ status: 'success' });
  }
}
