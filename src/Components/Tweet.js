const Tweet = ({name, profileImg, tweetText, timestamp}) => {
    return ( 
        <div className="tweet">
            <Avatar 
                src={profileImg} 
                alt={name}
                sx={{ width: 40, height: 40 }}
            />
            <div className="tweet__detail">
                <div className="tweet__header">
                    <b>{name.split(" ")[0]}</b>
                    <p className="tweet__timestamp">&bull; 7m</p>
                </div>
                <div className="tweet__text">
                    <p>Welcome to my super minified twitter clone. My focus was building a PWA</p>
                </div>
            </div>
        </div>
     );
}
 
export default Tweet;