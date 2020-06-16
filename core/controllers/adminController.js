const jwt = require('jsonwebtoken');
const req = require('require-yml');
const conf = req('../config.yml');
const jwtExpirySeconds = 300;

module.exports = {
    login: (req, res, next) => {
        console.log("POST login");
        
        const username = req.body.username;
        const password = req.body.password;
        if (!username || !password || conf.adminUSER !== username || conf.adminPASS !== password) {
            return res.status(401).end()
        }
        const token = jwt.sign({ username }, conf.secret, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        })
        console.log("token:", token);
        res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 });
        return res.status(200).json({"message":"done!"});
    },
    refresh: (req, res) => {
        console.log("POST refresh");
        const token = req.cookies.token
    
        if (!token) {
            return res.status(401).end()
        }
    
        var payload
        try {
            payload = jwt.verify(token, jwtKey)
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                return res.status(401).end()
            }
            return res.status(400).end()
        }

        const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
        if (payload.exp - nowUnixSeconds > 30) {
            return res.status(400).end()
        }
    
        const newToken = jwt.sign({ username: payload.username }, jwtKey, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        })
    
        res.cookie("token", newToken, { maxAge: jwtExpirySeconds * 1000 })
        res.end()
    }

}