const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB


// Export connection
module.exports = mongoose.connection;
