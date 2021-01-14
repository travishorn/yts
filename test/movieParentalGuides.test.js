const movieParentalGuides = require("../src/index").movieParentalGuides;

const movie_id = 8462;

describe("gets movie parental guides", () => {
  test("by movie id", async () => {
    expect.assertions(1);

    /* Note: The YTS API docs describe getting movie parental guides.
     * However, as of 2021-01-14, all calls to the endpoint return an informational
     * message stating 'Parental Guide for all the movies will be republished soon. Thank you for understanding!'.
     */
    try {
      await movieParentalGuides({ movie_id: movie_id });
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
});
