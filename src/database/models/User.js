const EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "User",
    tableName: "user",
    columns: {
        use_cod: {
            primary: true,
            type: "bigint",
            generated: true
        },
        use_email: {
            type: "varchar",
            nullable: false
        },
        use_password: {
            type: "varchar",
            nullable: false,
            select: false
        },
        use_created_at: {
            type: "timestamp with time zone",
            default: "current_timestamp",
            nullable: false
        }
    }
})