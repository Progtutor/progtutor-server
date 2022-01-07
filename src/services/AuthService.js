require("dotenv").config()
const jwt = require("jsonwebtoken")
const {promisify} = require("util")

const AuthService = module.exports = {

    expiresIn: 21600,
    cookieName: "jwtoken",
    secretKey: process.env.AUTH_KEY,

    auth: async function(req, res, next) {
        try {
            const token = req.cookies.jwtoken
            req.user = await promisify(jwt.verify)(token, AuthService.secretKey)
            return next()
        } catch (error) {
            return res.status(401).send({success: false, error: "authentication failed"})
        }
    },

    generateToken: function(user, res) {
        const token = jwt.sign(user, AuthService.secretKey, {expiresIn: AuthService.expiresIn})
        res.cookie(AuthService.cookieName, token, {httpOnly: true, maxAge: AuthService.expiresIn * 1000, sameSite: "none"})
    }
}