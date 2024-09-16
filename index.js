const express = require('express');
require('dotenv').config();


// import routes 
const userRoutes = require('./routes/userRoutes');


// connect to database 
require('./database/connection');

const app = express();
app.use(express.json());

// testing middlewares 
app.use((req,res,next) => {
    console.log(`Method :) ${req.method} URL :) ${req.url} , Body : ${req.body.email}`);next();
});


// Routes 
app.use('/api/user', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
