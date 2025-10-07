
// TMDB API example: Search for "Jack Reacher"
// Docs: https://developer.themoviedb.org/reference/search


// Use Bearer token in Authorization header, not as api_key param
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzI4NzhkZGI1NWNlYzlmZWU2YmQ3NzUzMzYyN2JkOSIsIm5iZiI6MTc1OTg0NTMzOS45OTQsInN1YiI6IjY4ZTUxYmRiMGMyNWQzMzc4NWMyMzAwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JFSuYHfLWUx-JmDOQAMJVOIvdJ3y0LsDGevxzRlBob0";
const query = "Jack Reacher";
const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));

