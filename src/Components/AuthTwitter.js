import { RocketLaunch } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useState } from "react";
import './AuthTwitter.css'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';

const AuthTwitter = () => {
    const [value, setValue] = useState(0)

    const name = localStorage.getItem('name')
    const profileImg = localStorage.getItem('profileImg')
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
                <div className="tweet">
                    
                </div>
            </div>
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
        </div>
     );
}
 
export default AuthTwitter;