import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
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

  export default db;