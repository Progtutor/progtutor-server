const router = require("express").Router()
const AuthService = require("../services/AuthService")
const Connection = require("../database/Connection")
const Repository = require("../database/Repository")

// mapped to "/auth"

router.post("/login", async(req, res) => {
    try {
        const {use_email, use_password} = req.body
        const connection = await Connection
        const {use_cod} = (await connection.query("select validate_user_access($1, $2) use_cod", [use_email, use_password]))[0]
        if (!use_cod) return res.status(401).send({success: false, error: "incorrect username or password"})

        const userRepository = await Repository.get(Repository.User)
        const user = await userRepository.findOne({use_cod})
        await AuthService.generateToken(user, res)
        return res.status(200).send({success: true, user})
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