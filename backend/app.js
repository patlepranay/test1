const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path");
const mongoose = require("mongoose");
const Blog = require("./models/blog")




const app = express();


mongoose.connect("mongodb+srv://pranay:pranay147896325@ks1.o35j3.mongodb.net/ks1?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });
const compression = require('compression')

app.use(compression())

app.use(bodyParser.json());
app.use(cors());



app.use("/", express.static(path.join(__dirname, "angular")));

app.post("/blogs", (req, res, next) => {
    Blog.find({}).then(documents => {
        res.status(200).json({
            message: "Posts fetched successfully!",
            blogs: documents
        });
        // console.log(documents);
    });
});

app.post("/blogs/request", (req, res, next) => {
    const blog = new Blog({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
        status: false
    });
    console.log("called post");
    blog.save().then(createdBlog => {
        res.status(201).json({
            message: "Blog added successfully",
            postId: createdBlog._id
        });
    });
});


app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "angular", "index.html"))
})

module.exports = app;