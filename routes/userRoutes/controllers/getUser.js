const User = require('../../../models/User');

const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}

const getUser = async (req, res) => {

    try {
        const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    } else {
        res.status(200).json(user);

    }
    }catch (error) {
        res.status(500).json({ message: message.error });
    }



}

module.exports = { getUsers, getUser };
