const express = require('express');
const userRoutes = require('./routes/userRoutes');
const permissionRoutes = require('./routes/permissionRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/permissions', permissionRoutes);

// Error handling middleware
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Welcome to the User Management System!');
});


module.exports = app;
