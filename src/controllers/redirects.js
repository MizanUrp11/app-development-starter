const router = require("express").Router();
const { Direction } = require("../utils/db");
const { check } = require("express-validator");
const _p = require("../utils/promis_errors");
const reject_invalid = require("../middlewares/reject_invalid");
const path = require("path");

const entryValidator = [check('url').isURL()];
router.post("/api/v1/redirects", entryValidator, reject_invalid, async (req, res, next) => {
    let user_id = req.user.id;
    let destination = req.body.url;
    let timestamp = Date.now() / 1000;
    let hash = parseInt(`${user_id}${timestamp}`).toString(32);
    let [cretErr, created] = await _p(Direction.create({
        user_id, destination, hash
    }));

    if (cretErr && !created) {
        next(cretErr);
    } else {
        res.json({
            message: "Direction created successfully",
            hash
        })
    }
})

router.get("/api/v1/redirects", async (req, res) => {
    let [dberr, myDirections] = await _p(Direction.findAll({
        where: {
            'user_id': req.user.id
        },
        // limit: 10
    }));
    if (dberr) return next(dberr);
    return res.json(myDirections.map(d => { return { id: d.id, destination: d.destination, hash: d.hash, createdAt: d.createdAt } }))
})

router.get(`/:hash`, async (req, res, next) => {
    let URLhash = req.param("hash");
    let [dbErr, hashDirection] = await _p(Direction.findOne({
        where: {
            hash: URLhash
        }
    }));
    if (dbErr) return next(dbErr);
    if (hashDirection) {
        // console.log(hashDirection.dataValues);
        res.redirect(301, hashDirection.dataValues.destination);
    } else {
        next();
    }
})

router.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../frontend/public/index.html"));
})


module.exports = router;