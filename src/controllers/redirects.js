const router = require("express").Router();
const { Direction } = require("../utils/db");
const { check } = require("express-validator");
const _p = require("../utils/promis_errors");
const reject_invalid = require("../middlewares/reject_invalid");

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
        limit: 10
    }));
    if (dberr) return next(dberr);
    return res.json(myDirections.map(d => { return { id: d.id, destination: d.destination, hash: d.hash, createdAt: d.createdAt } }))
})

module.exports = router;