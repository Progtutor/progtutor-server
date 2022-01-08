const Repository = require("../database/Repository")

module.exports = {
    getAll: async function() {
        const userRepository = await Repository.get(Repository.User)
        return await userRepository.find()
    },

    save: async function(user) {
        const userRepository = await Repository.get(Repository.User)
        return await userRepository.save(user)
    }
}