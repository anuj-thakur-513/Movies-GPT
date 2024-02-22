# Movies GPT

Movies GPT is an exciting project that combines the power of the TMDb (The Movie Database) API with the innovative capabilities of OpenAI's GPT (Generative Pre-trained Transformer) model. This application provides users with a sleek and user-friendly interface reminiscent of popular streaming platforms like Netflix.

Visit: [https://moviesgpt-anuj-513.vercel.app/](https://moviesgpt-anuj-513.vercel.app/)

Create a new account or use the follwing credentials:

- email: test@gmail.com
- password: Test@1234

## Tech Stack Used:

- Vite
- React.js
- Redux
- Firebase
- Open AI API
- TMDB API
- Tailwind CSS

## Browse Page Design for Logged In User

![netflix gpt design](https://github.com/anuj-thakur-513/Movies-GPT/assets/82753410/5b2010fb-5465-4d8a-8ffe-ece93efa00a6)

## Folder Structure

- components
  - All the components of the app
- hooks
  - all the custom hooks to be used
- pages
  - all the main pages of the app (login, browse, search)
- store
  - eg. user
    - reducer_files
    - slice
  - appStore.js (main store file)
- utils
  - general utility functions

## Clone and Run Locally:

- Clone repo into local machine

```bash
git clone https://github.com/anuj-thakur-513/Movies-GPT.git
```

- Go to the Project Directory

```bash
cd Movies-GPT
```

- Install all the Dependencies

```bash
npm install
```

- Run the development server

```bash
npm run dev
```

- Visit [http://localhost:5173/](http://localhost:5173/)

## Features

- Login/Signup
  - Sign in/Sign up form
  - Redirect to browse page
- Browser(after auth)
  - Header
  - Main Movie
    - Trailer in the Background
    - Title & Description
    - Movie Suggestions
      - Movie Lists \* N
    - TV Series Suggestions (To be added)
      - TV Series Lists \* N
- GPT Search
  - Search Bar
  - Movie Suggestions
