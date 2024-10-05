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
   



