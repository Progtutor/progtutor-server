const router = require("express").Router()
const AuthService = require("../services/AuthService")

// mapped to "/auth"

router.post("/login", async(req, res) => {
    try {
        const {email, password} = req.body
        if (!(email === password)) return res.status(401).send({success: false, error: "incorrect username or password"})

        AuthService.generateToken({email, password}, res)
        return res.status(200).send({success: true}) 
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error: "an error occurred while processing the request"})
    }
})

router.post("/logout", async(req, res) => {
    try {
        res.clearCookie(AuthService.cookieName)
        return res.status(200).send({success: true})
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error: "an error occurred while processing the request"})
    }
})

module.exports = router