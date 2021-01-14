const lm = require("./listMovies");

const baseUrl = "https://yts.mx/api/v2";

const listMovies = async (params) => lm(baseUrl, params);

module.exports = {
  listMovies,
};
