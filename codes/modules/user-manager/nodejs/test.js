const FileHandler = require('./src/utils/fileHandler');

// Adjust the path if your fileHandler.js is located elsewhere
const fileHandler = new FileHandler('users.json');

// Reading and logging data from users.json
const data = fileHandler.readData();
console.log(data);
