import './Login.css'
// import GoogleLogo from './GoogleLogo.webp'
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice';
import { useState } from 'react';
const Login = () => {

    const[name, setName] = useState('')
    const[photoURL, setPhotoURL] = useState('')
    
    // console.log(authUser);

// // Redux
//     const authUser = useSelector((state) => state.user.value)
//     const dispatch = useDispatch()
// Firebase auth
    const provider = new GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    const dispatch = useDispatch();
    const auth = getAuth();
    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            dispatch(loginUser(user))
            setName(user.displayName)
            setPhotoURL(user.photoURL)
            console.log(name, photoURL);
            console.log(token);
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential);
            // ...
            });
    }

  
    return ( 
        <div className="login">
            <main>
                <div className="login__content">
                    <ion-icon name="logo-twitter"></ion-icon>
                    <h1>Happening now</h1>
                    {name && <h3>Hi, {name}</h3>}
                    <h2 className='loginContent__signUpText'>Join Twitter today.</h2>
                    <Button type="default" shape="round" size='large' icon={<GoogleOutlined />}>
                        Sign up with Google
                    </Button>
                    <h2 className='loginContent__signInText'>Already have an account?</h2>
                    <Button type="default" shape="round" size='large' icon={<GoogleOutlined />} onClick={handleSignIn}>
                        Sign in
                    </Button>
                </div>
                <div className="login__hero">
                    <ion-icon name="logo-twitter"></ion-icon>
                </div>
            </main>
            <footer>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/reportbug">Report bug</a></li>
                </ul>
                <p>&copy; 2022 Twitter Clone by Kamal.</p>
            </footer>
        </div>
     );
}
 
export default Login;