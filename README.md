## Overview

This project is a React-based movie browser application that allows users to search, view, and explore movie details using data fetched from The Movie Database (TMDb) API.
It also includes Firebase Authentication for user login and registration (Email/Password and Google Sign-In).

## Features

🔐 User Authentication (Firebase: Register, Login, Logout, Google Sign-In)

🎞️ Browse popular movies fetched from TMDb API

🔍 Search movies by title

📄 View detailed information for each movie

🌙 Responsive and modern UI built with React and CSS


🧩 Tech Stack

Frontend: ReactJS, React Router

Backend/Services: Firebase Authentication

API: TMDb (The Movie Database API)

Styling: CSS / Material UI

## Project Skeleton

```
MOVIE-APP/
│
├── public/
│   └── index.html
├── src/
│   ├── auth/
│   │   └── firebase.js
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── Navbar.jsx
|   |   ├── Switch.jsx
│   │   └── VideoSection.jsx
│   ├── context/
│   │   ├── AuthContext.js
|   |   └── MovieContext.js     
│   ├── helpers/
│   │   └── ToastNotify.js 
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Main.jsx
│   │   └── MovieDetail.jsx
│   ├── router/
|   │   ├── AppRouter.jsx
│   │   └── PrivateRouter.jsx
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── .env
├── package.json
└── README.md
```


## 🔑 Environment Variables
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

REACT_APP_TMDB_API_KEY=your_tmdb_api_key

```

## 🧠 What I Learned

Using Firebase Authentication in React projects

Handling API requests and displaying dynamic movie data

Implementing protected routes with React Router

Managing global authentication state using Context API

## 👨‍💻 Author

Mehmet Kaynar
 • [GitHub](https://github.com/mehmetkaynar)
 • [LinkedIn](https://www.linkedin.com/in/kaynarmehmet/)
