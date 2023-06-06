export const apiKey = import.meta.env.VITE_API_KEY;

export const apiUrls = {
  popular: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  latest: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`,
  search: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=`,
};
