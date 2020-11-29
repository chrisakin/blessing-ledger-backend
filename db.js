// db password : dnuaifZbqM6XDt5s
//mongodb+srv://Christopher:<password>@cluster0-jhjx3.mongodb.net/<dbname>?retryWrites=true&w=majority

const mongoose = require('mongoose');
require("./models/tillModel");
require("./models/stanbicModel")





var uri = "mongodb+srv://chris:DEqkdULaIBbvwsJM@cluster0-wbocy.mongodb.net/test?retryWrites=true&w=majority";



const options = {
    
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
};

mongoose.connect(uri, options).then(() =>{
    console.log('Database connection established!');
})
.catch((error) => {
        console.log('Error connecting to Database');
        console.error(error);
}
);
