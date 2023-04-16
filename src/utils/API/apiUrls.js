const apiKey = import.meta.env.VITE_API_KEY;

export const apiUrls = {
  popular: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  latest: `https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`,
};
