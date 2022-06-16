import './App.css';
import 'antd/dist/antd.min.css'
import AuthTwitter from './Components/AuthTwitter';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Login from './Components/Login';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  // TODO: Replace the following with your app's Firebase project configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDzErGqku33dwk1cEMBs1Wm-ulGoo20uI8",
    authDomain: "twitter-clone-v2-7dd6a.firebaseapp.com",
    projectId: "twitter-clone-v2-7dd6a",
    storageBucket: "twitter-clone-v2-7dd6a.appspot.com",
    messagingSenderId: "173090177316",
    appId: "1:173090177316:web:ab79ab38b1849406bd73b1"
  };

  const app = initializeApp(firebaseConfig);

//   const provider = new GoogleAuthProvider();
//   // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
//   const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     console.log(user);
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<AuthTwitter />} />
      </Routes>
    </div>
  );
}

export default App;
