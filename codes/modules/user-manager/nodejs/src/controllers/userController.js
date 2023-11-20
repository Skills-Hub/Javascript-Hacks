const UserManager = require('../managers/userManager');
const userManager = new UserManager();

exports.addUser = (req, res) => {
    userManager.addUser(req.body);
    res.status(201).send({ message: 'User added' });
};

exports.getUser = (req, res) => {
    const user = userManager.getUser(req.params.id);
    if (user) {
        res.status(200).send(user);
    } else {
        res.status(404).send({ message: 'User not found' });
    }
};

exports.editUser = (req, res) => {
    const result = userManager.editUser(req.params.id, req.body);
    if (result) {
        res.status(200).send({ message: 'User updated' });
    } else {
        res.status(404).send({ message: 'User not found or not updated' });
    }
};

exports.deleteUser = (req, res) => {
    const result = userManager.deleteUser(req.params.id);
    if (result) {
        res.status(200).send({ message: 'User deleted' });
    } else {
        res.status(404).send({ message: 'User not found or not deleted' });
    }
};