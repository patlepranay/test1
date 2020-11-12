const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    body: { type: String, required: false },
    title: { type: String, required: false },
    author: { type: String, required: false },
    status: { type: Boolean, required: false },

});

module.exports = mongoose.model('Blog', blogSchema);