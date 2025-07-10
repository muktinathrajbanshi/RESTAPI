const mongoose = require("mongoose");

uri = "mongodb+srv://muktinathrajbanshi786:WiJGj6w1EQpRZ8RI@muktiapi.qudsshk.mongodb.net/MuktiAPI?retryWrites=true&w=majority&appName=MuktiAPI";

const connectDB = () => {
    // console.log("connect db");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;