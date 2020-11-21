const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    body: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    status: { type: Boolean, required: true },
    imagePath: { type: String, required: true }

});

module.exports = mongoose.model('Blog', blogSchema);