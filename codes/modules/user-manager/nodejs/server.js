const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3005;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Other user routes
const userRoutes = require('./src/routes/userRoutes'); 
app.use('/users', userRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the User Management System!');
});

// Dynamic user profile route
app.get('/userProfile/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'users.json'), 'utf8')).users;
    const user = users.find(u => u.id === req.params.id);

    if (user) {
        res.render('userProfile', { user: user });
    } else {
        res.status(404).send('User not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});