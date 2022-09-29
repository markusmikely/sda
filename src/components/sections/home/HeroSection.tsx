import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import VideoContainer from "../../shared/VideoContainer"
import Video from './../../../assets/video/1084666594-preview.mp4'

const HeroSection = () => {

    const CustomButton = ({to, label}: any) => {
        return <Button component={Link} to={to} className="btn btn-primary" variant="outlined" color="success">{label}</Button>
    }

    return (
        <section id="hero-section">
           <VideoContainer video={Video}>
               <h1>Welcome to the Street Dance Academy<span>Notting Hill</span></h1>
               <p>Learn to dance, Improve Coordination and Rythmn</p>
               <p>Establish new Friendships and have Fun, in a Safe and Secure Environment</p>
               <div className="actions">
                    <CustomButton to="/timetable" label="Timetable" />
                    <CustomButton to="/classes" label="Class Packages" />
               </div>
           </VideoContainer>
        </section>
    )
}

export default HeroSection