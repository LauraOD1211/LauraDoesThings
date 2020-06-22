const jwt = require('jsonwebtoken');
const req = require('require-yml');
const conf = req('../config.yml');
const cookieParser = require('cookie-parser');
const jwtExpirySeconds = 3600;
const BlogPost = require('../models/BlogPost');

module.exports = {
    login: (req, res, next) => {
        console.log("POST login");
        const username = req.body.username;
        const password = req.body.password;
        if (!username || !password || conf.adminUSER !== username || conf.adminPASS !== password) {
            return res.status(401).json({"token":"invalid"});
        }
        const token = jwt.sign({ username }, conf.secret, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        })
        res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 });
        return res.status(200).json({"token":token});
    },

    refresh: (req, res) => {
        console.log("POST refresh");
        const token = req.cookies.token
    
        if (!token) {
            return res.status(401).json({"error":"no token"});
        }
    
        var payload
        try {
            payload = jwt.verify(token, conf.secret)
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({"error":"jwt error"});
            }
            return res.status(400).json({"error":"unknown"});
        }

        const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
        if (payload.exp - nowUnixSeconds < 0) {
            return res.status(400).json({"error":"expired"});
        }
    
        const newToken = jwt.sign({ username: payload.username }, conf.secret, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        })
    
        res.cookie("token", newToken, { maxAge: jwtExpirySeconds * 1000 })
        return res.status(200).json({"token":token});
    },

    check: (req, res) => {
        console.log("POST check");
        const token = req.cookies.token
    
        if (!token) {
            return res.status(200).json({"status":"failed"});
        }
    
        var payload
        try {
            payload = jwt.verify(token, conf.secret)
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                return res.status(200).json({"status":"failed"});
            }
            return res.status(200).json({"status":"failed"});
        }

        const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
        if (payload.exp - nowUnixSeconds < 0) {
            return res.status(200).json({"status":"failed"});
        }

        return res.status(200).json({"status":"success"});
    },

    postBlogpost: (req, res) => {
        console.log("POST blogpost");
        const token = req.cookies.token
    
        if (!token) {
            return res.status(401).json({"error":"no token"});
        }
    
        var payload
        try {
            payload = jwt.verify(token, conf.secret)
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({"error":"jwt error"});
            }
            return res.status(400).json({"error":"unknown"});
        }

        const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
        if (payload.exp - nowUnixSeconds < 0) {
            return res.status(400).json({"error":"expired"});
        }
    
        const newToken = jwt.sign({ username: payload.username }, conf.secret, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        })
    
        res.cookie("token", newToken, { maxAge: jwtExpirySeconds * 1000 })

        if(!req.body.title || !req.body.topic || !req.body.body){
            return res.status(400).json({"error":"missing elements"});
        }
        if(req.body.title.length ==0 || req.body.topic.length ==0  || req.body.body.length ==0 ){
            return res.status(400).json({"error":"incomplete form"});
        }

        let post = new BlogPost(req.body);
        post.save().then(post => {
            return res.status(200).json({"token":token, "message":"success"});
        }).catch(err => {
            return res.status(500).json({error: err})
        });        
    },
    putBlogpost: (req, res) => {
        console.log("PUT blogpost");
        const token = req.cookies.token
    
        if (!token) {
            return res.status(401).json({"error":"no token"});
        }
    
        var payload
        try {
            payload = jwt.verify(token, conf.secret)
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({"error":"jwt error"});
            }
            return res.status(400).json({"error":"unknown"});
        }

        const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
        if (payload.exp - nowUnixSeconds < 0) {
            return res.status(400).json({"error":"expired"});
        }
    
        const newToken = jwt.sign({ username: payload.username }, conf.secret, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        })
    
        res.cookie("token", newToken, { maxAge: jwtExpirySeconds * 1000 })

        //code here

        if(!req.body.title || !req.body.topic || !req.body.body){
            return res.status(400).json({"error":"missing elements"});
        }
        if(req.body.title.length == 0 || req.body.topic.length == 0  || req.body.body.length == 0 ){
            return res.status(400).json({"error":"incomplete form"});
        }

        BlogPost.update({_id:req.params.id}, {$set: {title:req.body.title, topic:req.body.topic, body:req.body.body}}).exec((err, msg) => {
            console.log(msg);
            if (err) {
              return res.status(500).json({
                error: err
              })
            }
            return res.status(200).json({"token":token, "message":"success"});
        });

              
    },
    deleteBlogpost: (req, res) => {
        console.log("DELETE blogpost");
        const token = req.cookies.token
    
        if (!token) {
            return res.status(401).json({"error":"no token"});
        }
    
        var payload
        try {
            payload = jwt.verify(token, conf.secret)
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({"error":"jwt error"});
            }
            return res.status(400).json({"error":"unknown"});
        }

        const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
        if (payload.exp - nowUnixSeconds < 0) {
            return res.status(400).json({"error":"expired"});
        }
    
        const newToken = jwt.sign({ username: payload.username }, conf.secret, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        })
    
        res.cookie("token", newToken, { maxAge: jwtExpirySeconds * 1000 })

        //code here     
        console.log(req.params.id);
        BlogPost.deleteOne({_id:req.params.id}).exec((err, msg) => {
            console.log(msg);
            if (err) {
              return res.status(500).json({
                error: err
              })
            }
            if (msg.deletedCount == 0) {
                return res.status(200).json({"token":token, "message":"failed"});
            }
            else {
                return res.status(200).json({"token":token, "message":"success"});
            }
          });
    },
    postVocab: (req, res) => {
        console.log("POST refresh");
        const token = req.cookies.token
    
        if (!token) {
            return res.status(401).json({"error":"no token"});
        }
    
        var payload
        try {
            payload = jwt.verify(token, conf.secret)
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({"error":"jwt error"});
            }
            return res.status(400).json({"error":"unknown"});
        }

        const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
        if (payload.exp - nowUnixSeconds < 0) {
            return res.status(400).json({"error":"expired"});
        }
    
        const newToken = jwt.sign({ username: payload.username }, conf.secret, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        })
    
        res.cookie("token", newToken, { maxAge: jwtExpirySeconds * 1000 })

        return res.status(200).json({"token":token});
    },
    postGrammar: (req, res) => {
        console.log("POST refresh");
        const token = req.cookies.token
    
        if (!token) {
            return res.status(401).json({"error":"no token"});
        }
    
        var payload
        try {
            payload = jwt.verify(token, conf.secret)
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({"error":"jwt error"});
            }
            return res.status(400).json({"error":"unknown"});
        }

        const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
        if (payload.exp - nowUnixSeconds < 0) {
            return res.status(400).json({"error":"expired"});
        }
    
        const newToken = jwt.sign({ username: payload.username }, conf.secret, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        })
    
        res.cookie("token", newToken, { maxAge: jwtExpirySeconds * 1000 })
        return res.status(200).json({"token":token});
    }


}