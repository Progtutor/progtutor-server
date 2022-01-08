require("dotenv").config()

const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express()
const router = require("express").Router()
const {auth} = require("./services/AuthService")

app.use(cookieParser())
app.use(express.json({limit: "50mb"}))
app.use(cors({credentials: true, origin: "http://localhost:3001"}))

app.use("/api/v1", router)
router.use("/user", auth, require("./controllers/UserController"))
router.use("/auth", require("./controllers/AuthController"))

app.use((req, res) => {
    res.status(404).send({error: "not found"})
})

const httpServer = require("http").Server(app)
const port = process.env.PORT || 3000

httpServer.listen(port, function() {
    console.log("Running on port", port)
})

module.exports = httpServer