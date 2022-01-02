const router = require("express").Router()
const TesteService = require("../services/TesteService")

// mapped to "/"

router.get("/", async(req, res) => {
    try {
        const data = await TesteService.getAll()
        return res.status(200).send({success: true, data: data})
    } catch (error) {
        console.error(error)
        return res.status(500).send({success: false, error: "an error occurred while processing the request"})
    }
})

router.post("/", async(req, res) => {
    const user = req.body
    try {
        await TesteService.save(user)
        return res.status(200).send({success: true})
    } catch (error) {
        console.error(error)
        return res.status(500).send({success: false, error: "an error occurred while processing the request"})
    }
})

module.exports = router