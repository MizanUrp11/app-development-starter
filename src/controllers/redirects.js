const router = require("express").Router();
const { Direction } = require("../utils/db");
const {check} = require("express-validator");
const _p = require("../utils/promis_errors");
const reject_invalid = require("../middlewares/reject_invalid");

const entryValidator = [check('url').isURL()];
router.post("/api/v1/redirects",entryValidator,reject_invalid,async (req,res,next)=>{
    let user_id = req.user.id;
    let destination = req.body.url;
    let timestamp = Date.now()/1000;
    console.log("user_id:"+ user_id);
    console.log("timestamp:"+ timestamp);

    let hash = parseInt(`${user_id}${timestamp}`).toString(32);
    let [cretErr,created] = await _p(Direction.create({
        user_id,destination,hash
    }));
    if(cretErr && !created){
        next(cretErr);
    }else{
        res.json({
            message:"Direction created successfully",
            hash
        })
    }
})

module.exports = router;