
const mongoose = require('mongoose');

//const uri = 'mongodb://localhost:27017/Market';
const uri = 'mongodb+srv://juan:123@marketplace.tklcz.mongodb.net/marketplace?retryWrites=true&w=majority';
// const uri = 'mongodb+srv://farmerplace458:wi5oleaaicBEkbRX@cluster0.rmg17.mongodb.net/cluster0?retryWrites=true&w=majority';

const options = { useNewUrlParser:true, useUnifiedTopology:true}

mongoose.connect(uri, options).then(
    
    ()=>{console.log('Conectado a DB')},
    err=>{console.log(err)} 
);

module.exports = mongoose