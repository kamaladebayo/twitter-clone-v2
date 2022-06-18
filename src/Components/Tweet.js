import { Avatar, Skeleton } from "@mui/material";
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en'
const Tweet = ({name, profileImg, tweetText, timestamp}) => {
    TimeAgo.addDefaultLocale(en)
    const timeAgo = new TimeAgo('en-US')
    return ( 
        <div className="tweet">
            {profileImg? (
                <Avatar 
                src={profileImg} 
                alt={name}
                sx={{ width: 40, height: 40 }}
            />
            ) : <Skeleton variant="circular" width={40} height={40} sx={{bgcolor: 'rgba(255, 255, 255, .6)'}}/>}
            
            <div className="tweet__detail">
                {name? (<div className="tweet__header">
                    <b>{name}</b>
                    <p className="tweet__timestamp">&bull; {timeAgo.format(timestamp - 2 * 60 * 1000, 'mini')}</p>
                </div>): <Skeleton variant="text" width={150} sx={{bgcolor: 'rgba(255, 255, 255, .6)'}}/> }

                <div className="tweet__text">
                    {tweetText? (
                        <p>{tweetText}</p>
                    ): <Skeleton variant="text" width={250} sx={{bgcolor: 'rgba(255, 255, 255, .6)'}}/>}
                </div>
            </div>
        </div>
     );
}
 
export default Tweet;