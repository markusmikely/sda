const VideoContainer = ({ video, children, type }: any) => {    
    return (
        <div className={"video-wrapper " + type}>
            <div>
                <video autoPlay loop muted width="100%" height="auto">
                    <source src={video} type="video/mp4"></source>
                </video>  
                <div className="video-overlay"></div>
            </div>
            <div className="video-content">{children}</div>
        </div>
    )
}

export default VideoContainer
