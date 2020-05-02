const axios = require("axios")
const url = username => `https://api.github.com/users/${username}`

const githubApi = {
    getAvatar: async (username) => {
      const { data: {avatar_url, email} } = await axios.get(url(username))
      return {avatar_url, email: email ? email: "Email not provided."}
    }
  }

  module.exports = githubApi