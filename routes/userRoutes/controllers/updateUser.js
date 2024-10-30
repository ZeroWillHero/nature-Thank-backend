const User = require('../../../models/User');

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        let updates = req.body;

        const user = await User.findByIdAndUpdate(id, updates, { new: true });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ user });
    }
    catch (error) {
        res.status(500).json({
            error: error
        });
    }


}

module.exports = updateUser;