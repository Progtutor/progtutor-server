module.exports = {

    Teste: require("./models/Teste"),

    list: function() {
        return Object.values(this)
    }

}