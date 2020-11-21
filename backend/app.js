const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path");
const mongoose = require("mongoose");
const Blog = require("./models/blog")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var fileExtension = require('file-extension')
const multer = require('multer');
// const path = require("path");


const User = require("./models/user");


const app = express();


mongoose.connect("mongodb+srv://pranay:pranay147896325@ks1.o35j3.mongodb.net/ks1?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });
const compression = require('compression');
const checkAuth = require('./middleware/check-auth');

app.use(compression())

app.use(bodyParser.json());
app.use(cors());
app.use("/images", express.static(path.join("backend/images")));

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let erroe = new Error("invalid mime type");
        if (isValid) {
            error = null;
        }
        cb(error, "backend/images");

    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + '-' + Date.now() + '.' + ext);
    }
});




app.use("/", express.static(path.join(__dirname, "angular")));

app.post("/blogs", (req, res, next) => {
    Blog.find({}).then(documents => {
        res.status(200).json({
            message: "Blogs fetched successfully!",
            blogs: documents
        });
    });
});

app.post("/blogs/request", multer({ storage: storage }).single("image"), (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    const blog = new Blog({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
        status: false,
        imagePath: url + "/images/" + req.file.filename
    });
    console.log("called post");
    blog.save().then(createdBlog => {
        res.status(201).json({
            message: "Blog added successfully",
            postId: createdBlog._id
        });
    });
});

app.put("/approve/:id", checkAuth, (req, res, next) => {
    const blog = new Blog({
        _id: req.body.id,
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
        status: true,
        imagePath: req.body.imagePath
    });
    Blog.updateOne({ _id: req.params.id }, blog).then(result => {
        res.status(200).json({ message: "Update successful!" });
    });
});


app.post("/krishi_sarthi/login/admin/2112", (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            const token = jwt.sign({ email: fetchedUser.email, userId: fetchedUser._id },
                "verification_for_approve_request", { expiresIn: "1h" }
            );
            res.status(200).json({
                token: token,
                expiresIn: 3600
            });
        })
        .catch(err => {
            return res.status(401).json({
                message: "Auth failed"
            });
        });
});


app.post("/krishi_sarthi/signup/admin/2112", (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash
        });
        console.log(user)
        user
            .save()
            .then(result => {
                res.status(201).json({
                    message: "User created!",
                    result: result
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    });
});


app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "angular", "index.html"))
})

module.exports = app;