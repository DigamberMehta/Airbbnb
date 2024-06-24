const mongoose = require('mongoose');
const initData = require('./data');
const Listing = require('../models/listing.js');

main().then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: '6678193c298f1b69cf857cd4'}));
    await Listing.insertMany(initData.data);
    console.log('Database initialized');
}
    initDB();