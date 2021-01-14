module.exports = async () => {
  /* Note: The YTS API docs describe getting movie parental guides.
   * However, as of 2021-01-14, all calls to the endpoint return an informational
   * message stating 'Parental Guide for all the movies will be republished soon. Thank you for understanding!'.
   */
  throw new Error("The movie parental guides API is not working.");
};
