const mongoose = require("mongoose");

const DB = "mongodb+srv://kandpalmukul1532640:mukul123@cluster0.srpgrbn.mongodb.net/";


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(console.log("connection start")).catch((error)=> console.log(error.message));
