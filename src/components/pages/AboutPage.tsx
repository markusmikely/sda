import { Grid } from "@mui/material"
import CommunitySection from "../sections/about/CommunitySection"
import CreativitySection from "../sections/about/CreativitySection"
import DanceStylesSection from "../sections/about/DanceStylesSection"
import MessageSection from "../sections/about/MessageSection"
import OurMissionSection from "../sections/about/OurMissionSection"
import WhoAreWeSection from "../sections/about/WhoAreWeSection"
import PageHeader from "../shared/PageHeader"
import Video from './../../assets/video/1084666594-preview.mp4'

const AboutPage = () => {
    return (
        <div id="about-page">
            <PageHeader title="About Us" video={Video} />
            <WhoAreWeSection />
            <OurMissionSection />
        </div>
    )
}

export default AboutPage