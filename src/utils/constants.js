export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;
