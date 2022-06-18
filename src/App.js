import './App.css';
import 'antd/dist/antd.min.css'
import AuthTwitter from './Components/AuthTwitter';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Login from './Components/Login';
import { Routes, Route } from "react-router-dom";

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyDzErGqku33dwk1cEMBs1Wm-ulGoo20uI8",
    authDomain: "twitter-clone-v2-7dd6a.firebaseapp.com",
    projectId: "twitter-clone-v2-7dd6a",
    storageBucket: "twitter-clone-v2-7dd6a.appspot.com",
    messagingSenderId: "173090177316",
    appId: "1:173090177316:web:ab79ab38b1849406bd73b1"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
  console.log(app, db);

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
