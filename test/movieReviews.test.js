const movieReviews = require("../src/index").movieReviews;

const movie_id = 8462;

describe("gets movie reviews", () => {
  test("by movie id", async () => {
    expect.assertions(1);

    /* Note: The YTS API docs describe getting movie reviews.
     * Their example URL is https://yts.mx/api/v2/movie_reviews.json?movie_id=10
     * However, as of 2021-01-14, all calls to the endpoint return a 404.
     */
    try {
      await movieReviews({ movie_id: movie_id });
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
});
