const mongoose = require('mongoose');
const dbConfig = `mongodb+srv://testandodantas:testando123@cluster0.7cj52r3.mongodb.net/annotations?retryWrites=true&w=majority`;

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;