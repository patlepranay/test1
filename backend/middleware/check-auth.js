const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.body.token;
        console.log(token);
        jwt.verify(token, "verification_for_approve_request");
        next();
    } catch (error) {
        res.status(401).json({ message: "Auth failed!" });
    }
};