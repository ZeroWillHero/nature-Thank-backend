const express = require('express');
require('dotenv').config();
const cors = require('cors');


// import routes 
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/products/product.routes');


// connect to database 
require('./database/connection');

const app = express();
app.use(express.json());

// testing middlewares 
app.use((req,res,next) => {
    console.log(`Method :) ${req.method} URL :) ${req.url} , Body : ${req.body} , headers : ${req.headers.authorization}`);next();
});

app.use(cors());


// Routes 
app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
