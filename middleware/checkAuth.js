const jwt = require('jsonwebtoken');

let checkToken = (req, res, next) => {
    //get auth header value
    const bearerHeaders = req.headers['authorization'];
    //check if bearer is undefined
    if (typeof bearerHeaders !== 'undefined') {
        //split at the space
        const bearer = bearerHeaders.split(' ');
        //get token from array
        const bearerToken = bearer[1];
        //ser the token 
        req.token = bearerToken;
        next();
    }
    else {
        res.json('error');
    }
}

module.exports = {
    checkToken: checkToken
}