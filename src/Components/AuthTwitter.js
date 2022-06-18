import { RocketLaunch } from "@mui/icons-material";
import { Avatar, Button, Drawer, Fab, TextField } from "@mui/material";
import { useState } from "react";
import './AuthTwitter.css'
import AddIcon from '@mui/icons-material/Add';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import db from "../firebase";
import { useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Tweet from "./Tweet";
const AuthTwitter = () => {
    const [value, setValue] = useState(0)
    const [tweet, setTweet] = useState('')
    const [tweets, setTweets] = useState(null)

    const name = localStorage.getItem('name')
    const profileImg = localStorage.getItem('profileImg')

    // Firebase
    async function getTweets(){
        const querySnapshot = await getDocs(collection(db, "tweets"));
        // querySnapshot.forEach((doc) => {
        //     console.log(`${doc.id} => ${doc.data()}`);
            setTweets(querySnapshot.docs.map(doc => doc.data()))
        // });
    }

    useEffect(() => {
        getTweets()
    }, [])
    
    async function sendTweet(){
        try {
            const docRef = await addDoc(collection(db, "tweets"), {
              tweeterName: name,
              tweeterPhoto: profileImg,
              tweeterText: tweet,
              timestamp: Date.now()
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    // DRAWER
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    
    return ( 
        <div className="home">
            
            <header className="home__header">
                <Avatar 
                src={profileImg} 
                alt={name}
                sx={{ width: 32, height: 32 }}
                />
                <h1>Home</h1>
                <RocketLaunch className="header__iconRight"/>
            </header>
            <div className="tweets">
                {tweets? (
                    tweets.map(tweet => (
                        <Tweet name={tweet.tweeterName} profileImg={tweet.tweeterPhoto} tweetText={tweet.tweeterText } timestamp={tweet.timestamp} key={`${tweet.tweeterName}${Math.floor(Math.random(2085242) * 6054946)}`}/> 
                    ))
                ): (
                    <div className="tweets">
                        <Tweet />
                        <Tweet />
                        <Tweet />
                        <Tweet />
                        <Tweet />
                        <Tweet />
                        <Tweet />
                        <Tweet />
                        <Tweet />
                        <Tweet />
                    </div>
                )}
            </div>
            <Fab color="primary"aria-label="send tweet" onClick={toggleDrawer('right', true)}>
                <AddIcon />
            </Fab>
            {/* Bottom Nav */}
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<DeckOutlinedIcon />} />
                <BottomNavigationAction label="Report Bug" icon={<BugReportOutlinedIcon />} />
            </BottomNavigation>





                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    className="navbar__drawer"
                >
                    <ArrowBackIcon onClick={toggleDrawer('right', false)}/>
                    <br />
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        placeholder="What's happening?"
                        fullWidth
                        value={tweet} onChange={e => setTweet(e.target.value)}
                        // onFocus={() => (matches? setInputFocus(false) : setInputFocus(true))}
                        // onBlur={() => (matches? setInputFocus(true) : setInputFocus(true))}
                    />
                    <br />
                    <Button 
                    color="primary" 
                    onClick={() => {
                        sendTweet()
                        setTweet('')
                    }}
                    component = "span"
                    variant="contained"
                    >Tweet</Button>
                </Drawer>
        </div>
     );
}
 
export default AuthTwitter;