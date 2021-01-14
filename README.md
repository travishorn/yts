# YTS

Node.js promise-based library for interacting with the YTS YIFY movies API.

## Installation

The module is not published to npm, yet. In the meantime, you can clone the repository.

```
git clone https://github.com/travishorn/yts.git
```

Change into the directory

```
cd yts
```

Install the dependencies

```
npm install
```

Require it in your project.

```
const yts = require("./path/to/yts/src/index");
```

## Usage

### List movies

List the 20 most recently added movies.

```
const main = async () => {
 const res = await yts.listMovies();
}
```

The result will look like this:

```
{
  "movie_count": 25489,
  "limit": 20,
  "page_number": 1,
  "movies": [
    {
      "id": 00000,
      "url": "yts.mx URL",
      "imdb_code": "tt0000000",
      "title": "Movie Title",
      "title_english": "Movie Title in English",
      "title_long": "Movie Title (2021)",
      "slug": "movie-title-2021",
      "year": 2021,
      "rating": 0,
      "runtime": 0,
      "genres": [
        "Array of genre strings"
      ],
      "summary": "Movie summary",
      "description_full": "Movie description",
      "synopsis": "Movie synopsis",
      "yt_trailer_code": "YouTube video ID for trailer",
      "language": "en",
      "mpa_rating": "",
      "background_image": "yts.mx URL for background image JPG",
      "background_image_original": "yts.mx URL for background image JPG",
      "small_cover_image": "yts.mx URL for cover image JPG",
      "medium_cover_image": "yts.mx URL for cover image JPG",
      "large_cover_image": "yts.mx URL for cover image JPG",
      "state": "ok",
      "torrents": [
        {
          "url": "yts.mx torrent URL",
          "hash": "torrent hash",
          "quality": "720p",
          "type": "web",
          "seeds": 0,
          "peers": 0,
          "size": "1.00 MB",
          "size_bytes": 1000000,
          "date_uploaded": "2021-01-14 13:29:52",
          "date_uploaded_unix": 1610627392,
          "magnet_url: "magnet:url for torrent"
        },{
          // Possibly more torrent files for various qualities
        }
      ],
      "date_uploaded": "2021-01-14 13:29:52",
      "date_uploaded_unix": 1610627392
    },
    {
      // More movies
    }
  ]
}
```

#### Narrow the list with parameters

```
const main = async () => {
 const res = await yts.listMovies({ limit: 10, query_term: "Avengers" });
}
```

There are other parameters to use with `listMovies()`. Full documentation can be found at https://yts.mx/api#list_movies

### Get movie details

First get the movie's YTS ID. You might get this from `listMovies()`. Then call `movieDetails()`.

```
const main = async () => {
 const res = await yts.movieDetails({ movie_id: 0000 });
}
```

The result will look like this:

```
{
  "movie": {
    "id": 0000,
    "url": "yts.mx URL",
    "imdb_code": "tt0000000",
    "title": "Movie Title",
    "title_english": "Movie Title in English",
    "title_long": "Movie Title (2021)",
    "slug": "movie-title-2021",
    "year": 2021,
    "rating": 0,
    "runtime": 0,
    "genres": [
      "Array of genre strings"
    ],
    "download_count": 0,
    "like_count": 0,
    "description_intro": "First part of description",
    "description_full": "Full description of movie",
    "yt_trailer_code": "YouTube video ID for trailer",
    "language": "en",
    "mpa_rating": "",
    "background_image": "yts.mx JPG URL",
    "background_image_original": "yts.mx JPG URL",
    "small_cover_image": "yts.mx JPG URL",
    "medium_cover_image": "yts.mx JPG URL",
    "large_cover_image": "yts.mx JPG URL",
    "torrents": [
      {
        "url": "yts.mx torrent URL",
          "hash": "torrent hash",
          "quality": "720p",
          "type": "web",
          "seeds": 0,
          "peers": 0,
          "size": "1.00 MB",
          "size_bytes": 1000000,
          "date_uploaded": "2021-01-14 13:29:52",
          "date_uploaded_unix": 1610627392,
          "magnet_url: "magnet:url for torrent"
      },
      {
        // Possibly more torrent files for various qualities
      },
    ],
    "date_uploaded": "2021-01-14 13:29:52",
    "date_uploaded_unix": 1610627392
  }
}
```

## Get movie comments

The YTS API docs describe getting movie comments. However, as of 2021-01-14, all calls to the endpoint return a 404.

```
const main = async () => {
 const res = await yts.movieComments({ movie_id: 0000 });
}
```

This function will always throw an error stating "The movie comments API is not working."

## Get movie reviews

The YTS API docs describe getting movie reviews. However, as of 2021-01-14, all calls to the endpoint return a 404.

```
const main = async () => {
 const res = await yts.movieReviews({ movie_id: 0000 });
}
```

This function will always throw an error stating "The movie reviews API is not working."

## Get movie parental guides

The YTS API docs describe getting movie parental guides. However, as of 2021-01-14, all calls to the endpoint return an informational message stating 'Parental Guide for all the movies will be republished soon. Thank you for understanding!'.

```
const main = async () => {
 const res = await yts.movieParentalGuides({ movie_id: 0000 });
}
```

This function will always throw an error stating "The movie parental guides API is not working."

## Tests

Full tests are available for this library and the YTS API.

```
npm test
```

Note that this will invoke quite a few simultaneous HTTP requests to the YTS API.

## To Do

- Add function for upcoming movie list
- Add functions for user details, key, profile
- Add functions for registering user, editing settings, forgot/reset password
- Add functions for liking movies, setting/getting/deleting bookmarks
- Add functions for making, liking, reporting, and deleting comments
- Add function for making movie requests

## License

The MIT License

Copyright 2021 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
