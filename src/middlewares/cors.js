/**
 * Starting CORS ==>
 * https://enable-cors.org/server_expressjs.html
 */

module.exports = function (req, res, next) {
    /**
     * To Enable via docker
     
    if(process.env.CORS === "yes"){
        res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    */
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();
}