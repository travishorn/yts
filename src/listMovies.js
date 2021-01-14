const axios = require("axios");

module.exports = async (baseUrl, params) => {
  const res = await axios.get(`${baseUrl}/list_movies.json`, { params });
  return res.data.data;
};
