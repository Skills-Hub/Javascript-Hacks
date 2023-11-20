const fs = require('fs');
const path = require('path');

class FileHandler {
    constructor(filename) {
        this.filePath = path.join(__dirname, '../../data', filename);
        
    }

    readData() {
        try {
            const dataBuffer = fs.readFileSync(this.filePath);
            return JSON.parse(dataBuffer.toString());
        } catch (error) {
            console.error('Error reading file:', error);
            return null;
        }
    }

    writeData(data) {
        try {
            const dataString = JSON.stringify(data, null, 2);
            fs.writeFileSync(this.filePath, dataString);
        } catch (error) {
            console.error('Error writing to file:', error);
        }
    }
}

module.exports = FileHandler;
