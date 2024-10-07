#  1. create react app
#  2. Implement Routing 
#  3. Login Form
#  4. Sign Up form 
#  5. Form Validation
#  6. useRef hook
#  7. Firebase Setup
#  8. Deploying our app to production on firebase
#  9. create sign up user
#  10. implement sign in user account
#  11. implement sign in user api
#  12. created  Redux store with user Slice
#  13. Implemented Sign out 
#  14. Update User Profile
#  15. Unsubscribe to the onAuthStateChange callback
#  16. add hardcoded string values to the constants file
#  17. Register for TMDB Movies API for Movie Data : https://www.themoviedb.org/movie 
#  18. get access token and get data from tmdb now playing movies
#  19. Create movie slice
#  20. Update store with Movies data
#  21. fetch data from Trailer Video
#  22. Update store with Trailer Video Data
#  23. Embed the youtube video 
#  24. Make it auto play in background

# 🚀React React App using : Vite
🌏https://vite.dev/guide/

🧑‍💻$ npm create vite@latest
🧑‍💻$ npm create vite@latest myAppName -- --template 


# 🚀Configuring  Tailwind 
🌏https://tailwindcss.com/docs/guides/vite
🌏 Important: https://tailwindcss.com/docs/screens
🧑‍💻$ npm install -D tailwindcss postcss autoprefixer
🧑‍💻$npx tailwindcss init -p

🌏🚀🏆🧑‍💻

# Features
0. Login/SignUp page
1. Browse (after authentication )
   -Header
   -Main Movie
        -Tailer in Background
        -Moview Title and Description
        -Play and Watch Button
   -Movies Suggestions
        -Movies List * N
            -Movies
            -Scrollable List
2. Home Page
    Header
        -Sign in Page
        -Sign Up Page
3. Netflix GPT 
        -Search Bar
        -Movie Suggestions

    
    rafce=> react arrow function creat export

    # 🚀 Installing React Router:
    🌏npm install -D  react-router-dom 

    # 🚀 Login/Sign up Form :

    🌏Formik Library for form validation
    -useRef Hooks
    -FORM Validation: utils Validatejs
    -validate email using regix: 
        🌏 https://regexr.com/
            email-  /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/
            password:  


    Authendication using Google Firebase
    project Id :defaultAccount
    App Nick Name: defaultApp
    --add user authentication on firebase
    --add firebase config file in utils.
    # npm firebase cli using command
    Npm install -g firebase-tools
    --> firebase login
    --> firebase init
    -->firebase deploy
    --> npm build

    # 🚀 create Authentication use sign UP
    https://firebase.google.com/docs/auth/web/manage-users
   

    # Web Modular API
   https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    onAuthStateChange utility provied by firebase
   https://firebase.google.com/docs/reference/js/auth.user




   # TMDB Api for videos: under user edit profile section 
   🌏 https://www.themoviedb.org/movie

   



