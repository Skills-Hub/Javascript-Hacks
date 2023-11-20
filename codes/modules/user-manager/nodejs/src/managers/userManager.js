const FileHandler = require('../utils/fileHandler');

class UserManager {
    constructor() {
        this.fileHandler = new FileHandler('users.json');
    }

    addUser(user) {
        const data = this.fileHandler.readData();
        if (data) {
            data.users.push(user);
            this.fileHandler.writeData(data);
        }
    }

    getUser(id) {
        const data = this.fileHandler.readData();
        return data ? data.users.find(user => user.id === id) : null;
    }

    editUser(id, updatedUser) {
        const data = this.fileHandler.readData();
        if (data) {
            const index = data.users.findIndex(user => user.id === id);
            if (index !== -1) {
                data.users[index] = updatedUser;
                this.fileHandler.writeData(data);
            }
        }
    }

    deleteUser(id) {
        const data = this.fileHandler.readData();
        if (data) {
            data.users = data.users.filter(user => user.id !== id);
            this.fileHandler.writeData(data);
        }
    }
}

module.exports = UserManager;