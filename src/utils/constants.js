export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/CA-en-20250818-TRIFECTA-perspective_70fc89e5-1ac0-4f15-b08a-b8e9ba4eaa19_large.jpg";

export const USER_AVATAR =
  "https://i.pinimg.com/736x/d7/19/6a/d7196adc7c4f353d52235c5e6ed12e65.jpg";

export const API_KEY = "539230bbe6543e58078a33bd897b750a";

export const API_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzkyMzBiYmU2NTQzZTU4MDc4YTMzYmQ4OTdiNzUwYSIsIm5iZiI6MTc1NzMxNTYzNy4yNDYsInN1YiI6IjY4YmU4MjM1NGUwNThkYzBmZTljMDc0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8zgiNIVP3nivYWIcP7baOGQNS_LpWxGHcqHLTwAzC2Q";

export const TMDB_BASE_URL = "https://api.themoviedb.org/3/movie";

export const TMDB_HEADERS = {
  accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_TOKEN}`,
};

export const TMDB_ENDPOINTS = {
  movieChanges: (page = 1) => `/movie/changes?page=${page}`,
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "punjabi", name: "Punjabi" },
  { identifier: "french", name: "French" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = `${import.meta.env.VITE_OPENAI_READ_KEY}`;
