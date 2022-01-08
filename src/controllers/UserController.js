const router = require("express").Router()
const UserService = require("../services/UserService")

// mapped to "/"

router.get("/", async(req, res) => {
    try {
        const users = await UserService.getAll()
        return res.status(200).send({success: true, users})
    } catch (error) {
        console.error(error)
        return res.status(500).send({success: false, error: "an error occurred while processing the request"})
    }
})

router.post("/", async(req, res) => {
    try {
        const user = await UserService.save(req.body)
        return res.status(200).send({success: true, user})
    } catch (error) {
        console.error(error)
        return res.status(500).send({success: false, error: "an error occurred while processing the request"})
    }
})

module.exports = router