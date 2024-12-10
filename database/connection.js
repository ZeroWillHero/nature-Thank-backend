const mongoose = require('mongoose');

try {
    mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected');

}catch(e){
    console.log(e);
}