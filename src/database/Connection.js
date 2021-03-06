const typeorm = require("typeorm")
const Entities = require("./Entities")

const Connection = typeorm.createConnection({
    type: process.env.TYPE_DB,
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    username: process.env.USER_DB,
    password: process.env.PWD_DB,
    database: process.env.NAME_DB,
    entities: Entities.list()
})

module.exports = Connection