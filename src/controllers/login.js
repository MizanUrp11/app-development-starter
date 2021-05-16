/**
 * login Api
 */
const { User } = require("../utils/db");
const _p = require("../utils/promis_errors");
const router = require("express").Router();
const { check } = require("express-validator");
const { validate } = require("../utils/password");
const { app_secret } = require("../config.json");
const jwt = require("jsonwebtoken");
const reject_invalid = require("../middlewares/reject_invalid");

const loginValidator = [check('email').isEmail(), check('password').isLength({ min: 5 })];
router.post("/login", loginValidator, reject_invalid, async (req, res) => {
    let { password, email } = req.body;
    let [uer, user] = await _p(User.findOne({
        where: {
            email
        }
    }));
    if (!user) {
        res.status(404).json({ error: true, message: "User not found" });

    } else {
        let [salt, hash] = user.password.split(".");
        let { name, email, id } = user;
        let valid = validate(password, hash, salt);
        if (valid) {
            let token = jwt.sign({ id, name, email }, app_secret);
            res.json({
                error: false,
                token,
                user: {
                    id, name, email
                }
            })
        } else {
            res.status(401).json({ error: true, message: "Password incorrect." });
        }
    }
});

module.exports = router;