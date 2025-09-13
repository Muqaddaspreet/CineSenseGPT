# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Netflix GPT

- Configured Vite
- Installed Tailwind CSS
- Header
- Routing of App
- Login Form
- Signup Form
- Form validations
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create Sign Up user account in firebase
- Implement Sign In user api
- Created Redux store With userSlice
- Implemented Sign out
- Update profile api
- Fetch from Tmdb movies
- Bugfix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in -> Redirect /browse to Login Page and vice-versa.
- Unsubscribe to the onAuthStateChanged() callback.
- Add hardcoded values to the constants file.
- Regiter TMDB API & create an app & get access token.
- Get Data from TMDB now playing movies list API.
- Custom hook for now playing movies
- Create movieSlice
- Update store with movies data
- Planning for mainContainer and secondaryContainer
- Fetch data for Trailer video
- Update store with Trailer video data
- Embedded the youtube video and make it autoplay and mute
- Add tailwind classes to make MainContainer look awesome

# Features

- Login/Signup
  - Signin/signup form
  - Redirect to Browse page
- Browse (After authentication)
  - Header
  - Main Movie
    - Trailer in background
    - Title & Desciption
    - Movie Suggestions
      - MovieLists \* N
- NetflixGPT
  - search bar
  - Movie suggestions
