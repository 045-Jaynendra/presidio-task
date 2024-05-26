const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://jaysh2807:rYJE8VZABOmPNRan@cluster0.yvp0pld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("Database connection established", connect.connection.host, connect.connection.name)
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;