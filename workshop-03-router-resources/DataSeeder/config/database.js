const mongoose = require('mongoose');
const dbURL = process.env.MONGO_CONNECTION;

module.exports = () => {
    return mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
};