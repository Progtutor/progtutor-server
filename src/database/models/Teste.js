const EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Teste",
    tableName: "teste",
    columns: {
        id: {
            type: "bigint",
            nullable: false,
            primary: true
        },
        nome: {
            type: "varchar",
            nullable: false,
            primary: true
        },
        idade: {
            type: "integer",
            nullable: false
        }
    }
})