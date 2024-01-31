# Movies GPT

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
