const Repository = require("../database/Repository")

module.exports = {
    getAll: async function() {
        const RepositoryTeste = await Repository.get(Repository.Teste)
        return await RepositoryTeste.find()
    },

    save: async function(user) {
        const RepositoryTeste = await Repository.get(Repository.Teste)
        return await RepositoryTeste.save(user)
    }

}